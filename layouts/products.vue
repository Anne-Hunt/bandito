<script setup>

</script>


<template>
    <header class="shadow-sm bg-slate-300">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="text-xl font-bold flex"><MdiIcon icon="mdiDominoMask" class="my-auto mr-1 text-black"></MdiIcon> <span>BANDITO</span></NuxtLink>
            <ul>
                <li>
                    <li v-if="account"><NuxtLink to="/account">Account</NuxtLink></li>
            <li v-else><NuxtLink to="/account">Sign In</NuxtLink></li>
                </li>
            </ul>
        </nav>
    </header>

    <body>
        <div class="container mx-auto p-4">
            <slot></slot>
        </div>
    </body>
    <footer class="container mx-auto p-4 flex justify-between border-t-3">
        <ul class="flex gap-4">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
            <li v-if="account">
                <NuxtLink to="/account">Account</NuxtLink>
            </li>
        </ul>
    </footer>
</template>


<style scoped>
.router-link-exact-active{
    color: green;
}

</style>