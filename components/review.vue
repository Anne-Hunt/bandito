<script setup>

const {review} = defineProps(['review'])
</script>


<template>
<div class="card text-center">
    <NuxtLink :to="`/products/${review.product.id}`" >
        <div class="thumbimg mb-2">
            <img :src="review.product.image" :alt="review.product.title" class="thumbnail">
        </div>
        <p class="">{{ review.title }}</p>
        <p class="truncate font-semibold text-slate-700 mb-4">{{ review.product.title }}</p>
        <p>{{ review.rating }}</p>
        <p class="decimal">${{ review.description }}</p>
    </NuxtLink>
    <NuxtLink :to="`/account/review/${review.id}`">
        <button class="rounded-md shadow-md bg-green-700 text-white">Edit</button>
    </NuxtLink>
</div>
</template>


<style scoped>

</style>