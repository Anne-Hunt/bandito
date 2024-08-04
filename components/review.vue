<script setup>

const {review} = defineProps(['review'])
</script>


<template>
<div class="card text-center">
    <NuxtLink :to="`/products/${review.product.id}`" >
        <div class="thumbimg mb-2">
            <img :src="product.image" :alt="product.title" class="thumbnail">
        </div>
        <p class="truncate font-semibold text-slate-700 mb-4">{{ product.title }}</p>
        <p class="decimal">${{ product.price }}</p>
    </NuxtLink :to="`/products/${product.id}`">
    <NuxtLink :to="`/products/${product.id}`" class="">
        <p class="btn mt-4 mx-5">View item</p>
    </NuxtLink>
</div>
</template>


<style scoped>

</style>