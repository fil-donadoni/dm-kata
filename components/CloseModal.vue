<template>
    <button
        type="button"
        class="button is-text p-0 close"
        data-dismiss="modal"
        aria-label="Close"
        @click="$emit('click')"
    >
        <img src="/assets/icons/clear.svg" alt="Chiudi" height="20" width="20">
    </button>
</template>
