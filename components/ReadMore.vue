<template>
    <div class="read-more" :class="{ 'is-expanded': expanded }">
        <div
            class="read-more-container"
            :style="'height: ' + height"
            ref="container"
        >
            <div class="read-more-content" ref="content">
                <slot></slot>
            </div>
        </div>
        <div class="container-button">
            <button
                v-if="! expanded && has_more"
                class="button is-text p-0"
                @click="showMore"
            >
                Leggi di più
                <img src="/assets/icons/chevron-down.svg" class="read-more-chevron" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        collapsedHeight: {
            type: Number,
            default: 80,
        },

        enabled: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        // TODO: funzione per chiudere, cambio chevron
        return {
            expanded: ! this.enabled,
            has_more: false,
        }
    },

    computed: {
        height() {
            return this.collapsedHeight + 'px'
        },
    },

    mounted() {
        this.hasMore()

        window.addEventListener('resize', this.hasMore)
    },

    methods: {
        hasMore() {
            this.has_more = this.$refs.content.clientHeight > this.$refs.container.clientHeight
        },

        showMore() {
            this.expanded = true
        },
    },
}
</script>
