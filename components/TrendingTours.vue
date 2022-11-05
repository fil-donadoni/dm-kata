<template>
    <div class="trending-tours">
        <div class="container">
            <template v-if="trendingTours.length">
                <h2 class="mb-1">Trending tours in {{ continent.name }}</h2>

                <div class="trending-tours-gallery">
                    <div
                        v-for="tour in trendingTours"
                        :key="tour.id"
                        class="trending-tour"
                    >
                        <div class="columns is-mobile">
                            <div class="column is-narrow pr-0">
                                <img
                                    :src="getThumbnail(tour)"
                                    :alt="tour.thumbnailImage.mobile.altText || tour.title"
                                    class="trending-tour-image"
                                />
                            </div>

                            <div class="column pl-small">
                                <div class="trending-tour-title">
                                    {{ tour.title }}
                                </div>

                                <div class="trending-tour-duration">
                                    {{ durationLabel(tour.numberOfDays) }}
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
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'continent',
            'trendingTours',
        ])
    },

    methods: {
        durationLabel(days) {
            return days + ' ' + (days > 1 ? 'giorni' : 'giorno')
        },

        getThumbnail(tour) {
            const thumbnail_url = '/api/assets/thumbnails/' + tour.thumbnailImage.mobile.id + '.jpg'

            return thumbnail_url

            // TODO: controllo esistenza file immagine e restituzione img default
            // return new Promise((resolve, reject) => {
            //     axios.head(thumbnail_url)
            //         .then(data => {
            //             console.log(data)
            //             resolve(thumbnail_url)
            //         })
            //         .catch(error => {
            //             console.log(error.response.status)
            //             resolve('/assets/logo.svg')
            //         })
            // })
        },
    },
}
</script>
