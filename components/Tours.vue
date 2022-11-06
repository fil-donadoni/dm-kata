<template>
    <div class="tours-index">
        <div class="container">
            <ContinentsMenu />

            <template v-if="continent && continent.id">
                <ContinentDescription />

                <TrendingTours />

                <NotTrendingTours />
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([ 'continent' ]),
    },

    mounted() {
        if(! this.$store.state.continents.length) {
            this.$api.get('/api/continents.json')
                    .then(data => {
                        this.$store.commit('setContinents', data)
                    })
        }

        if(! this.$store.state.tours.length) {
            this.$api.get('/api/tours.json')
                    .then(({ data }) => {
                        this.$store.commit('setTours', data)
                    })
        }
    },
}
</script>
