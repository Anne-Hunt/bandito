<script setup>
const {id} = useRoute().params
const item = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(item, {key:id})

if(!product.value){
    throw createError({statusCode: 404, message: 'Unable to find product'})
}
</script>

<template>
<section class="card grid grid-cols-2 gap-10">

    <div class="p-8">
        <img :src="product.image" :alt="product.title" class="mx-auto my-7">
    </div>
    <div class="p-7">
        <h2 class="text-4xl my-7">{{product.title}}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <p class="btn my-7 text-center mx-20">Add to Cart</p>
    </div>
</section>
</template>


<style scoped>

</style>