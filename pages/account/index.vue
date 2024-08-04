<script setup>
definePageMeta({
    layout: 'account',
    // middleware: ["auth"]
})
const {data: purchases} = await useFetch('/api/raccoon/account/purchase')
const {data: reviews} = await useFetch('/api/raccoon/account/reviews')
useHead({
    title: 'Bandito - Your Account'
})
</script>


<template>
    <div>
        <div class="card">
            <div v-if="account" class="p-5">
                <h2 class="text-2xl">Welcome {{account.name}}!</h2>
                <p>View your previous purchases and reviews below.</p>
            </div>
            <div v-else>
                <p class="btn">Log In</p>
            </div>
        </div>
        <div v-if="account">
            <div>
                <h4>Past Purchases</h4>
                <div v-for="purchase in purchases" :key="id">
                    <purchase :purchase="purchase"></purchase>
                </div>
            </div>
            <div>
                <h4>Past Purchases</h4>
                <div v-for="review in reviews" :key="id">
                    <review :review="review"></review>
                    
                </div>
            </div>
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