<template>
    <div class="header">
        <div class="container">
            <div class="columns is-mobile is-vcentered">
                <div class="column is-narrow">
                    <a href="/">
                        <img src="/assets/logo-white.svg" class="logo" alt="Unbranded" />
                    </a>
                </div>

                <div class="column">
                    <Input
                        v-model="search_key"
                        icon="search"
                        placeholder="Cerca..."
                        @input="search"
                    />
                </div>

                <div class="column is-narrow">
                    <!-- TODO: Menu -->
                    <img src="/assets/icons/menu.svg" class="menu-icon" alt="Menu" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search_key: null,
        }
    },

    methods: {
        search() {
            // TODO: Sticky
            // TODO: Set query string
            this.$store.commit('setSearch', this.search_key)
        },
    }
}
</script>
