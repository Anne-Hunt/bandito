<script setup>

</script>


<template>
<header class="shadow-sm bg-slate-300">
    <nav class="container mx-auto p-4 justify-between flex">
        <NuxtLink to="/" class="text-xl font-bold flex"><MdiIcon icon="mdiDominoMask" class="my-auto mr-1 text-black"></MdiIcon> <span>BANDITO</span></NuxtLink>
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            <li v-if="account"><NuxtLink to="/account">Account</NuxtLink></li>
            <li v-else><NuxtLink to="/account">Sign In</NuxtLink></li>
        </ul>
    </nav>
</header>
</template>


<style scoped>
.router-link-exact-active{
    color: green;
}
</style>