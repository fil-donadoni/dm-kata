<template>
    <div class="menu" :class="{ 'is-mobile': isMobile }">
        <ul class="menu-items" >
            <li class="menu-item">
                <NuxtLink to="/">
                    Viaggi
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/">
                    Come funziona
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/">
                    Fasce d'età
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/">
                    Offerte
                </NuxtLink>
            </li>

            <li class="menu-item is-highlighted">
                <NuxtLink to="/">
                    Turni confermati
                </NuxtLink>
            </li>

            <li class="menu-item">
                <NuxtLink to="/">
                    FAQ
                </NuxtLink>
            </li>

            <li class="menu-item is-dropdown">
                <div class="dropdown-container">
                    <img src="/assets/icons/user.svg" class="user-icon" />

                    <masked-image src="/assets/icons/chevron-down.svg" />
                </div>
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
