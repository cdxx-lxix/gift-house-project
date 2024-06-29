<template>
    <div class="grid grid-cols-3 background-blur rounded-sm">
        <img class="col-span-3 w-[16rem] h-[16rem] object-contain mb-4" :src="image" :alt="name">
        <div class="col-span-2 text-blur">
            <p>{{ name }}</p>
            <p class="text-[#B84500] font-semibold">{{ price }}</p>
        </div>
        <button class="col-span-1 mx-auto">
            <img class="w-10 h-10 rounded-full" :src="addtocart" alt="add to cart icon">
        </button>
    </div>
</template>

<script setup>
import addtocart from '../assets/addtocart.png'
const props = defineProps([
    'name',
    'price',
    'image'
])
</script>
