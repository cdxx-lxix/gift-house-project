<template>
    <div class="flex flex-col items-center justify-end background-blur rounded-sm">
        <img class="w-[16rem] h-[16rem] object-contain mb-4" :src="image" :alt="name">
        <div class="flex flex-row text-left justify-between w-[16rem] px-5">
            <div>
                <p>{{ name }}</p>
                <p class="text-[#B84500] font-semibold">{{ price }}</p>
            </div>
            <button>
                <img class="w-10 h-10 rounded-full" :src="addtocart" alt="add to cart icon">
            </button>
        </div>
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
