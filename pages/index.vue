<script setup>
useHead({ 
    title: 'Bandito - Home Sweet Dumpster'
})
</script>


<template>

<div>
    <h2>Home</h2>
    <p>Welcome to Bandito, the premier shopping site for all of raccoonkind.</p>
    <div class="categories">
        <h3>Products</h3>
        <div class="">
            <h4>Special Sale on Food</h4>
            <div class="sale">
            </div>
        </div>
        <div class="list">
            <div class="grid grid-cols-3 gap-5">
                <div>
                    <h5>Dumpster Goods</h5>
                    <img src="https://balenciaga.dam.kering.com/m/34e56aaf423b3169/eCom-716897210JA9065_F.jpg" alt="bag of trash">
                </div>
                <div class="type">
                    <h5>Disguises</h5>
                    <img src="https://i5.walmartimages.com/seo/GROUCHO-DISGUISE-SET-GLASS-MUSTACHE_b1e55507-91cd-416e-a6b7-f9898433aa6f.1554f89514ecfcff9b473250baf3cf81.jpeg" alt="mustache">
                </div>
                <div class="type">
                    <h5>Accessories</h5>
                    <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v2708670677486631216/products/219796.jpg" alt="Pinwheel">
                </div>
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