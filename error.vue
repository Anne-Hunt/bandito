<script setup>

defineProps(['error'])
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
<body class="fill px-10">
    <div class="mt-8 card text-center mx-auto">
        <p class="my-8 text-7xl font-semibold">ERROR {{error.statusCode}}</p>
        <h2 class="my-7 text-6xl">Whoooopsies!</h2>
        <p>{{error.message}}</p>
        <NuxtLink to="/" class="">
            <p class="btn my-10 mx-10 text-xl">Return Home</p>
        </NuxtLink>
    </div>
</body>
</template>


<style scoped>
.fill{
    height: 80dvh;
}
</style>