<template>
    <div v-if="continents.length" class="continents-menu">
        <ul>
            <li
                v-for="(continent, key) in continents"
                :key="key"
                :class="{ 'is-active': active === continent.id }"
                @click="select(continent.id)"
            >
                <span>
                    {{ continent.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            active: 1,
        }
    },

    computed: {
        ...mapState([
            'continents',
        ])
    },

    methods: {
        select(key) {
            this.active = key

            this.$store.commit('setContinent', this.active)
        },
    },
}
</script>