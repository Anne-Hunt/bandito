<script setup>

</script>


<template>
<header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 justify-between">
        <NuxtLink to="/" class="font-large"><i class="mdi mdi-package-variant"></i></NuxtLink>
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            <li v-if="account"><NuxtLink to="/account">Account</NuxtLink></li>
        </ul>
    </nav>
</header>
<div class="container mx-auto p-4">
    <slot></slot>
</div>
</template>


<style scoped>
.router-link-exact-active{
    color: green;
}

</style>