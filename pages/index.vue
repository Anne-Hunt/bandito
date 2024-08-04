<script setup>
useHead({ 
    title: 'Bandito - Home Sweet Dumpster'
})
</script>


<template>

<div class="px-10">
    <h2 class="text-3xl font-bold">Home</h2>
    <p>Welcome to Bandito, the premier shopping site for all of raccoonkind.</p>
    <div class="categories">
        <h3 class="text-2xl font-semibold mb-5">Products</h3>
        <NuxtLink :to="`/products/food`" >
            <div class="sale rounded-md shadow-lg flex content-end p-5">
                <h4 class="text-4xl font-bold text-white">Special Sale on Food</h4>
            </div>
            </NuxtLink>
        <div class="list">
            <div class="grid grid-cols-3 gap-5">
                <NuxtLink :to="`/products/dumpster`" >

                    <div class="p-5">
                        <h5 class="text-lg font-bold">Dumpster Goods</h5>
                        <img class="rounded-md shadow-md" src="https://balenciaga.dam.kering.com/m/34e56aaf423b3169/eCom-716897210JA9065_F.jpg" alt="bag of trash">
                    </div>
                </NuxtLink>
                <NuxtLink :to="`/products/disguises`" >

                    <div class="p-5">
                        <h5 class="text-lg font-bold">Disguises</h5>
                        <img class="rounded-md shadow-md" src="https://i5.walmartimages.com/seo/GROUCHO-DISGUISE-SET-GLASS-MUSTACHE_b1e55507-91cd-416e-a6b7-f9898433aa6f.1554f89514ecfcff9b473250baf3cf81.jpeg" alt="mustache">
                    </div>
                </NuxtLink>
                <NuxtLink :to="`/products/accessories`" >

                    <div class="p-5">
                        <h5 class="text-lg font-bold">Accessories</h5>
                        <img class="rounded-md shadow-md" src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v2708670677486631216/products/219796.jpg" alt="Pinwheel">
                    </div>
                </NuxtLink>
            </div>
        </div>
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

.sale{
    height: 30dvh;
    background-image: url(https://i.redd.it/7xlhecmchlsb1.jpg);
    background-position: center;
    background-size: cover;
}

</style>