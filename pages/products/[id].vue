<script setup>
definePageMeta({
    layout: 'products'
})
const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(uri)

</script>


<template>
<productdetails></productdetails>
</template>


<style scoped>
h2{
    margin-bottom: 20px;
}
p{
    margin: 20px 0;
}
</style>