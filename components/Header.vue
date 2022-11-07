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
                    <Hamburger />

                    <Menu v-if="! $store.is_mobile" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hamburger from './Hamburger.vue'
export default {
  components: { Hamburger },
    data() {
        return {
            search_key: null,
        }
    },

    methods: {
        search() {
            // TODO: Set query string
            this.$store.commit('setSearch', this.search_key)
        },
    }
}
</script>
