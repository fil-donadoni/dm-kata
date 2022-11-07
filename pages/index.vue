<template>
    <div class="page home">
        <Hero />

        <Tours />

        <modal
            name="tour_details_modal"
            ref="tour_details_modal"
            title="Dettagli tour"
        >
            <template slot="body" slot-scope="props">
                <TourDetails :tour="props.data.tour" />
            </template>
        </modal>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',

    mounted() {
        this.setIsMobile()

        window.addEventListener('resize', this.setIsMobile)
    },

    methods: {
        setIsMobile() {
            this.$store.commit('setIsMobile', window.innerWidth <= 768)
        },
    },
}
</script>
