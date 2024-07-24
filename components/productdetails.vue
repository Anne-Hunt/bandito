<script setup>
const {id} = useRoute().params
const item = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(item)

</script>

<template>
<section>

    <div class="">
        <img :src="product.image" alt="">
    </div>
    <div class="">
        <h2>{{product.title}}</h2>
        <p>$ {{ product.price }}</p>
    </div>
</section>
</template>


<style scoped>

</style>