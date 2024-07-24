<script setup>
definePageMeta({
    layout: 'products'
})
const {id} = useRoute().params
const item = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(item)

</script>

<template>
<div>
    <img :src="product.image" alt="">
    <h2>{{product.title}}</h2>
    <p>{{ product.price }}</p>
</div>
</template>


<style scoped>

</style>