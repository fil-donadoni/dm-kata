<template>
    <div
        class="masked-image"
        :style="'mask-image: url(' + src + ')'"
    ></div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="sass" scoped>
    .masked-image
        background-color: #212121
        mask-position: center
        mask-repeat: no-repeat
        mask-size: contain
        height: 2rem
        width: 2rem
        display: inline-block
</style>
