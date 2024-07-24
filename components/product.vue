<script setup>

const {product} = defineProps(['product'])
</script>


<template>
<div class="card text-center">
    <NuxtLink :to="`/products/${product.id}`" class="flex-row">
        <img :src="product.image" :alt="product.title" class="thumbnail">
        <p class="truncate font-semibold text-slate-700">{{ product.title }}</p>
        <p class="decimal">${{ product.price }}</p>
    </NuxtLink :to="`/products/${product.id}`">
    <NuxtLink :to="`/products/${product.id}`" class="">
        <p class="btn mt-9 mx-5">View Details</p>
    </NuxtLink>
</div>
</template>


<style scoped>

</style>