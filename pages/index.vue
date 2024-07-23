<script setup>

</script>


<template>
<header>
    <nav>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <li v-if="account"><NuxtLink to="/account">Account</NuxtLink></li>
        </ul>
    </nav>
</header>
<div>
    <h2>Home</h2>
    <p>Welcome to Bandito, the premier shopping site for all of raccoonkind.</p>
</div>
</template>


<style scoped>
h2{
    margin-bottom: 20px;
}
p{
    margin: 20px 0;
}
</style>