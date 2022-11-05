<template>
    <div class="continent-description mt-2">
        <div class="container">
            <div class="columns is-mobile">
                <div class="column is-narrow">
                    <img
                        :src="'/assets/' + continent.slug + '.svg'"
                        :alt="continent.name"
                        class="continent-image"
                    >
                </div>

                <div class="column">
                    <ReadMore>
                        <!-- TODO: condizionare solo per mobile -->
                        {{ continent.description }}
                    </ReadMore>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'search'
        ]),

        ...mapGetters([
            'continent',
        ]),
    }, 
}
</script>
