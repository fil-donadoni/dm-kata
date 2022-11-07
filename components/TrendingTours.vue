<template>
    <div class="trending-tours">
        <div class="container">
            <template v-if="trendingTours.length">
                <h2 class="mb-1">Trending tours in {{ continent.name }}</h2>

                <div class="trending-tours-gallery" :key="componentKey">
                    <div
                        v-for="tour in trendingTours"
                        :key="tour.id"
                        class="trending-tour"
                        @click="openModal(tour)"
                    >
                        <div class="columns is-mobile">
                            <div class="column is-narrow pr-0">
                                <img
                                    :src="tour.thumbnail || '/assets/icons/camera.svg'"
                                    :alt="tour.thumbnailImage.mobile.altText || tour.title"
                                    class="trending-tour-image"
                                    :component-key="0"
                                />
                            </div>

                            <div class="column pl-small">
                                <div class="trending-tour-title">
                                    {{ tour.title }}
                                </div>

                                <div class="trending-tour-duration">
                                    {{ duration(tour.numberOfDays) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="no-results">
                    Non ci sono tour in {{ continent.name }} al momento.
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { durationLabel } from '../helpers/strings'
import { getTourThumbnail } from '../helpers/images'

export default {
    data() {
        return {
            componentKey: 0,
        }
    },

    computed: {
        ...mapGetters([
            'continent',
            'trendingTours',
        ])
    },

    watch: {
        trendingTours() {
            this.trendingTours.forEach(tour => {
                getTourThumbnail(tour)
                    .then(url => {
                        tour.thumbnail = url

                        this.forceRerender()
                    })
            })
        }
    },

    methods: {
        duration(days) {
            return durationLabel(days)
        },

        forceRerender() {
            this.componentKey += 1
        },

        openModal(tour) {
            this.$store.commit('showModal', { name: 'tour_details_modal', data: { tour }})
        },
    },
}
</script>
