<script setup>
definePageMeta({
    layout: 'products'
})

const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>


<template>
<div>
    <h2>Welcome!</h2>
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