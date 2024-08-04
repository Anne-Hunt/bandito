<script setup>
definePageMeta({
    layout: 'products'
})

const {data: products} = await useFetch('/api/raccoon')

useHead({ 
    title: 'Bandito - Disguises'
})
</script>


<template>
<div>
    <h2 class="text-xl font-bold">Disguises by Bandito</h2>
    <p>Not even your mother will know you're a raccoon.</p>
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