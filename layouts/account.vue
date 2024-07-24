<script setup>

</script>


<template>
<navbar></navbar>
<div class="container mx-auto p-4">
    <slot></slot>
</div>
</template>


<style scoped>
.router-link-exact-active{
    color: green;
}
/* .router-link{
    color: black;
} */

</style>