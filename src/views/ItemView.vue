<template>
    <PageShell>
        <div class="grid grid-cols-2 w-full h-[36rem] background-blur-strong mt-10 pb-48 items-center">
            <img class="mx-auto mt-4" :src="store.products[id].img" :alt="store.products[id].name">
            <div>
                <h3 class="chibola text-3xl mb-2">{{ store.products[id].name }}</h3>
                <div>Артикул: </div>
                <div class="mb-12">Описание товара: </div>
                <div class="inline-flex gap-8 mb-4">
                    <div class="text-[#FF6700] font-medium">{{ store.products[id].price }}</div>
                    <div class="inline-flex gap-3">
                        <img class="w-4 h-4" :src="checkmark" alt="checkmark icon">
                        <div>
                            Товар в наличии
                        </div>
                    </div>
                </div>
                <br>
                <button class="px-3 py-1 text-nowrap text-[#FF6700] border-2 border-[#FF6700] rounded-lg" @click="store.addItem(id)">Добавить в корзину</button>
            </div>
        </div>
        <div class="block w-full h-8">
            ㅤ 
        </div>
    </PageShell>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useBasketStore } from '../stores/basket.js'
import PageShell from '../components/PageShell.vue'
import checkmark from '../assets/checkmark.png'
const props = defineProps({
    id: String
})
const store = useBasketStore()

</script>