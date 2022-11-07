<template>
    <div
        class="modal"
        :class="additionalClasses"
        :style="showStyle"
        @keyup.esc="close"
    >
        <div class="modal-background" @click="forceClose"></div>

        <transition name="slide-up">
            <div v-if="is_open" class="modal-content">
                <div class="modal-card">
                    <div class="modal-card-head columns is-mobile">
                        <slot name="header" :data="extra_data" :close="close">
                            <div class="column py-small">
                                <h5 class="modal-title">
                                    <span v-html="title"></span>
                                </h5>
                            </div>
                            <div class="column py-small is-narrow">
                                <close-modal @click="forceClose" />
                            </div>
                        </slot>
                    </div>

                    <div class="modal-card-body">
                        <slot name="body" :data="extra_data" />
                    </div>

                    <div class="modal-card-footer">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CloseModal from './CloseModal'

export default {
    components: {
        'close-modal': CloseModal,
    },

    props: {
        extraClass: {
            type: String,
            required: false,
        },

        autoOpen: {
            type: Boolean,
            default: false,
        },

        name: {
            type: String,
            default: 'my_modal',
        },

        title: {
            type: String,
            default: '',
        },

        safeClose:{
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {
            extra_data: null,
            is_open: false,
        }
    },

    mounted() {
        if(this.autoOpen) {
            this.open()
        }
    },

    computed: {
        ...mapState([ 'open_modals' ]),

        additionalClasses() {
            let open_class = this.is_open ? 'is-open ' : ''
            let extraClass = this.extraClass ? this.extraClass + ' ' : ''

            return open_class + extraClass + this.name.replaceAll('_', '-')
        },

        showStyle() {
            return this.is_open ? 'display: flex;' : ''
        },
    },

    watch: {
        open_modals: {
            handler() {
                if(this.$store.state.open_modals.includes(this.name)) {
                    this.extra_data = this.$store.state.modal_data[this.name]
                    this.open()
                }
            },
            deep: true
        }
    },

    methods: {
        close(value) {
            if(! this.safeClose || this.name == value) {
                this.is_open = false

                document.body.classList.remove('modal-open')

                this.$store.commit('hideModal', this.name)
            }
        },

        forceClose() {
            this.is_open = false

            document.body.classList.remove('modal-open')

            this.$store.commit('hideModal', this.name)
        },

        open() {
            this.is_open = true

            document.body.classList.add('modal-open')
        },
    },
}
</script>

<style scoped>
    .modal-backdrop {
        z-index: -1;
    }
</style>
