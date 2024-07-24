<script setup>


</script>


<template>
<div>
    <NuxtLink :to="`/products/${product.id}`" class="flex-row">
        <img :src="product.image" :alt="product.title" class="flex justify-self-center">
        <p class="truncate">{{ product.title }}</p>
        <p class="text-end">${{ product.price }}</p>
    </NuxtLink>
</div>
</template>


<style scoped>

</style>