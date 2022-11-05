<template>
    <div class="input-container" :class="{ 'has-icon': icon }">
        <input v-model="current_value" :placeholder="placeholder" />

        <MaskedImage
            v-if="icon"
            :src="'/assets/icons/' + icon + '.svg'"
            class="input-icon"
        />
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: false,
        },

        placeholder: {
            type: String,
            required: false,
        },

        value: {
            type: String,
            default: null,
        }
    },

    data() {
        return {
            current_value: this.value
        }
    },

    watch: {
        current_value() {
            this.$emit('input', this.current_value)
        },
    }
}
</script>
