<script setup>

const {purchase} = defineProps(['purchase'])
</script>


<template>
<div class="card text-center">
    <NuxtLink :to="`/account/purchase/${purchase.id}`" >
        <div class="thumbimg mb-2">
            <i class="mdi mdi-package-variant-closed text-5xl"></i>
            <span>{{ purchase.date }}</span>
        </div>
        <p class="decimal">${{ purchase.total }}</p>
    </NuxtLink>
    <NuxtLink :to="`/account/purchase/${purchase.id}`" class="">
        <p class="btn mt-4 mx-5">View this purchase</p>
    </NuxtLink>
</div>
</template>


<style scoped>

</style>