<template>
    <div class="page home">
        <Hero />

        <Tours />
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
