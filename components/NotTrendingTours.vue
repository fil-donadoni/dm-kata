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
                        class="column is-6"
                    >
                        <div class="not-trending-tour">
                            <div class="tour-title">
                                {{ tour.title }}
                            </div>

                            <div class="tour-duration">
                                {{ durationLabel(tour.numberOfDays) }}
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
import { mapGetters } from 'vuex';

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
        durationLabel(days) {
            return days + ' ' + (days > 1 ? 'giorni' : 'giorno')
        },
    },
}
</script>