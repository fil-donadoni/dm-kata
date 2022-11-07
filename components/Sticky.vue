<template>
    <div :class="{ 'is-pinned': is_pinned }" :style="'top: ' + headerOffset + 'px'">
        <slot></slot>
    </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
    props: {
        headerOffset: {
            type: Number,
            default: 0
        },

        offsetTop: {
            type: Number,
            default: 0
        },
    },

    data() {
        return {
            is_pinned: false,
            limit: null,
            sizes: null,
        }
    },

    mounted() {
        this.sizes = this.$el.getBoundingClientRect()
        this.limit = this.sizes.top + this.sizes.height

        this.calculatePin()

        window.addEventListener(
            'scroll',
            debounce(() => {
                this.calculatePin()
            }, 10)
        )
    },

    methods: {
        calculatePin() {
            if(window.scrollY > this.limit) {
                this.is_pinned = true
                this.$el.style.top = this.headerOffset
            }
            else {
                this.is_pinned = false
            }
        },
    }
}
</script>

<style lang="sass" scoped>
    .is-pinned
        position: fixed
        width: 100%
        left: 0
        right: 0
        z-index: 10000000
</style>
