<template>
    <div class="mobile-menu" v-if="is_mobile">
        <div
            class="hamburger"
            :class="{ 'is-open': is_open }"
            @click="toggle"
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <!-- <img src="/assets/icons/menu.svg" class="menu-icon" alt="Menu" /> -->

        <Menu
            v-if="is_open"
            :is-mobile="true"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            is_open: false,
        }
    },

    computed: {
        ...mapState([ 'is_mobile' ]),
    },

    watch: {
        route() {
            this.is_open = false
        },
    },

    methods: {
        toggle() {
            this.is_open = ! this.is_open
        },
    },
}
</script>
