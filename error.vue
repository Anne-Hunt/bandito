<script setup>

defineProps(['error'])

function clear(){
    clearError({redirect: '/'})
}
</script>


<template>
    <header class="shadow-md bg-slate-300">
    <nav class="container mx-auto p-4 justify-between flex">
        <NuxtLink to="/" class="text-xl font-bold"><i class="mdi mdi-domino-mask"></i>BANDITO</NuxtLink>
        <ul class="flex gap-4">
            <li><NuxtLink to="/" class="btn">Return to Home</NuxtLink></li>
        </ul>
    </nav>
</header>
<body class="text-center px-10">
    <div class="mt-8 card text-center mx-auto">
        <p class="my-8 text-7xl font-semibold">ERROR {{error.statusCode}}</p>
        <h2 class="my-7 text-6xl">Whoooopsies!</h2>
        <p class="mb-10">{{error.message}} <i class="mdi mdi-emoticon-sad-outline"></i></p>
    </div>
        <button class="btn my-10 text-xl" @click="clear">Return Home</button>
</body>
</template>


<style scoped>
.fill{
    height: 80dvh;
}
</style>