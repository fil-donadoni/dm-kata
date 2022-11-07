<template>
    <div class="not-trending-tours">
        <div class="container">
            <template v-if="notTrendingTours.length">
                <Input
                    v-model="search_key"
                    icon="search"
                    :placeholder="'Cerca viaggi in ' + continent.name"
                />

                <div v-if="filteredTours.length" class="columns is-mobile is-multiline">
                    <div
                        v-for="tour in filteredTours"
                        :key="tour.id"
                        class="column is-3-desktop is-6-mobile"
                    >
                        <div class="not-trending-tour" @click="openModal(tour)">
                            <div class="tour-title">
                                {{ tour.title }}
                            </div>

                            <div class="tour-duration">
                                {{ duration(tour.numberOfDays) }}
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="no-results">
                    Nessun tour trovato con questa destinazione.
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { durationLabel } from '../helpers/strings'

export default {
    data() {
        return {
            search_key: '',
        }
    },

    computed: {
        ...mapGetters([ 'continent', 'notTrendingTours' ]),

        filteredTours() {
            return this.notTrendingTours.filter(tour => tour.title.toLowerCase().includes(this.search_key.toLowerCase()))
        }
    },

    methods: {
        duration(days) {
            return durationLabel(days)
        },

        openModal(tour) {
            this.$store.commit('showModal', { name: 'tour_details_modal', data: { tour }})
        },
    },
}
</script>