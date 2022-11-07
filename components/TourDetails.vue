<template>
    <div class="tour-details" :key="componentKey">
        <img
            v-if="tour.thumbnail"
            :src="tour.thumbnail"
            :alt="tour.title"
            class="tour-image"
        >

        <h2>{{ tour.title }}</h2>

        <div class="tour-main-data columns is-mobile">
            <div class="column is-narrow pt-0 pr-2">
                {{ tour.destinationLabel }}
            </div>

            <div class="column is-narrow pt-0 pr-2">
                {{ duration(tour.numberOfDays) }}
            </div>

            <div class="column is-narrow pt-0 pr-2">
                {{ tour.bestTour.price }} €
            </div>
        </div>

        <div class="tour-moods">
            <div
                v-for="(rating, mood) in tour.moods"
                :key="mood"
                class="tour-mood"
            >
                <span class="tour-mood-label">
                    {{ mood }}
                </span>

                <div class="tour-mood-rating" :class="moodRatingClass(rating)">
                    {{ rating }}
                </div>
            </div>
        </div>

        <div class="tour-labels">
            <div class="columns is-mobile">
                <div class="column">
                    <div
                        class="tour-label"
                        :class="statuses[tour.bestTour.salesStatus].class"
                    >
                        <MaskedImage src="/assets/icons/alert.svg" />

                        {{ statuses[tour.bestTour.salesStatus].label }}
                    </div>
                </div>

                <div class="column is-narrow">
                    <button v-if="tour.bestTour.salesStatus !== 'SOLD_OUT'" class="button is-primary">
                        Prenota ora!
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { durationLabel } from '../helpers/strings'
import { getTourThumbnail } from '../helpers/images'

export default {
    props: {
        tour: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            componentKey: 0,
            statuses: {
                PLANNED: { label: 'Pianificato', class: 'is-blue', },
                ALMOST_CONFIRMED: { label: 'Quasi confermato', class: 'is-yellow', },
                CONFIRMED: { label: 'Confermato', class: 'is-green', },
                ALMOST_FULL: { label: 'Quasi pieno', class: 'is-orange', },
                SOLD_OUT: { label: 'Sold out', class: 'is-red', },
            },
        }
    },

    mounted() {
        getTourThumbnail(this.tour)
            .then(url => {
                this.tour.thumbnail = url

                this.forceRerender()
            })
    },

    methods: {
        duration(days) {
            return durationLabel(days)
        },

        forceRerender() {
            this.componentKey += 1
        },

        moodRatingClass(rating) {
            if(rating < 30) {
                return 'is-orange'
            }
            if(rating < 60) {
                return 'is-yellow'
            }
            if(rating < 80) {
                return 'is-green'
            }

            return 'is-blue'
        }
    },
}
</script>
