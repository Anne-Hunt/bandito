<script setup>
definePageMeta({
    layout: 'account',
    middleware: ["auth"]
})

useHead({
    title: 'Bandito - Your Account'
})
</script>


<template>
    <div>
        <h2>Welcome!</h2>
        <p>Welcome to Bandito, the premier shopping site for all of raccoonkind.</p>
    </div>
    <div class="card">
        <div v-if="account" class="">Hello!</div>
        <div v-else>
            <p class="btn">Log In</p>
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