<template>
    <div class="menu" :class="{ 'is-mobile': isMobile }">
        <ul class="menu-items" >
            <li class="menu-item">
                <NuxtLink to="/">
                    Viaggi
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/come-funziona">
                    Come funziona
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/fasce-eta">
                    Fasce d'età
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/offerte">
                    Offerte
                </NuxtLink>
            </li>

            <li class="menu-item is-highlighted">
                <NuxtLink to="/turni-confermati">
                    Turni confermati
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/faq">
                    FAQ
                </NuxtLink>
            </li>

            <li class="menu-item">
                USER
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        isMobile: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
