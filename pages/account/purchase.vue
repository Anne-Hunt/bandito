<script setup>
definePageMeta({
    layout: 'account',
    middleware: ["auth"]
})
const {data: purchase} = await useFetch(`/api/raccoon/account/purchase/${purchase.id}`)

useHead({
    title: 'Bandito - Your Purchases'
})
</script>


<template>
    <div>
        <div>
        <h4>Purchase #{{ purchase.id }} completed on {{ purchase.date }}</h4>
            <div class="grid grid-cols-4" v-for="product in products" :key="id">
                <product :product="product"></product>
            </div>
            <span>{{ purchase.total }}</span>
        </div>
        <div>
        </div>
    </div>
</template>


<style scoped>
h2 {
    margin-bottom: 20px;
}

p {
    margin: 20px 0;
}
</style>