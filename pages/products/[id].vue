<script setup>
definePageMeta({
    layout: 'products'
})
const {id} = useRoute().params
</script>


<template>
<div>
    <h2>Product Details</h2>
    <p>{{id}}</p>
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