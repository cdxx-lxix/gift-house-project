<template>
    <div>item</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useBasketStore } from '../stores/basket.js'
const props = defineProps({
    id: String
})
const store = useBasketStore()

</script>