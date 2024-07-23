<script setup>

</script>


<template>
<header>
    <div class="">
        <slot></slot>
    </div>
    <nav>
        <NuxtLink to="/"><i class="mdi mdi-package-variant"></i></NuxtLink>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <li v-if="account"><NuxtLink to="/account">Account</NuxtLink></li>
        </ul>
    </nav>
</header>
</template>


<style scoped>
.router-link-exact-active{
    color: green;
}

</style>