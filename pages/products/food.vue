<script setup>
definePageMeta({
    layout: 'products'
})

const {data: products} = await useFetch('/api/raccoon')

useHead({ 
    title: 'Bandito - Products and Merch'
})
</script>


<template>
<div>
    <h2 class="text-xl font-bold">Food by Bandito</h2>
    <p>Good eats, good times, at a dumpster near you.</p>
</div>
<div class="grid grid-cols-5 gap-5">
<div v-for="product in products" :key="id">
<product :product="product"></product>
</div>
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