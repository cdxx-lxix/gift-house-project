<template>
    <PageShell>
        <div class="h-[34rem]">
            <template v-if="store.basketItems.length <= 0">
                <div class="mt-10 background-blur-strong py-6 h-[28rem]">
                    <img class="w-20 h-20 mx-auto" :src="shoppingcart" alt="shopping icon">
                    <h1 class="uppercase text-center chibola text-4xl mt-6">корзина пока пуста</h1>
                    <p class="text-center mt-5 w-1/2 mx-auto">Загляните в каталог, чтобы выбрать подходящую категорию
                        товаров.
                    </p>
                    <div class="inline-flex w-full mt-6 gap-8 justify-center">
                        <RouterLink to="/"
                            class="px-3 py-2 inline-flex items-center gap-3 text-nowrap text-white border-2 border-[#B84500] bg-[#B84500] rounded-md">
                            <svg class="w-4 h-4 fill-transparent" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.001 512.001" xml:space="preserve">
                                <path
                                    d="M388.819 239.537 156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.2 23.2 0 0 0 139.636 512a23.2 23.2 0 0 0 16.457-6.817L388.819 272.45a23.27 23.27 0 0 0 0-32.913" />
                            </svg>
                            <div class="mr-3">В каталог</div>
                            <svg class="w-3 h-3 fill-white" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.001 512.001" xml:space="preserve">
                                <path
                                    d="M388.819 239.537 156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.2 23.2 0 0 0 139.636 512a23.2 23.2 0 0 0 16.457-6.817L388.819 272.45a23.27 23.27 0 0 0 0-32.913" />
                            </svg>
                        </RouterLink>
                        <RouterLink to="/"
                            class="px-3 py-2 inline-flex items-center gap-3 text-nowrap text-[#B84500] border-2 border-[#B84500] rounded-md">
                            <svg class="w-4 h-4 fill-transparent" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.001 512.001" xml:space="preserve">
                                <path
                                    d="M388.819 239.537 156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.2 23.2 0 0 0 139.636 512a23.2 23.2 0 0 0 16.457-6.817L388.819 272.45a23.27 23.27 0 0 0 0-32.913" />
                            </svg>
                            <div class="mr-3">На главную</div>
                            <svg class="w-3 h-3 fill-[#B84500]" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.001 512.001" xml:space="preserve">
                                <path
                                    d="M388.819 239.537 156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.2 23.2 0 0 0 139.636 512a23.2 23.2 0 0 0 16.457-6.817L388.819 272.45a23.27 23.27 0 0 0 0-32.913" />
                            </svg>
                        </RouterLink>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="grid grid-cols-3 background-blur-strong">
                    <div class="col-span-2 flex flex-col gap-4 p-4">
                        <div v-for="item, index in store.basketItems" class="inline-flex gap-4 items-center">
                            <img class="w-24 object-fit aspect-square" :src="item.product.img" alt="">
                            <div>
                                <div class="inline-flex items-center w-[16rem] justify-between gap-4">
                                    <div>{{ item.product.name }}</div>
                                    <button class="w-4 h-4 p-0.5 rounded-sm bg-[#DBD5CA]/70 flex items-center shadow-md">
                                        <svg class="w-4 h-4" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"
                                                d="M19 19 5 5" />
                                            <path data-name="primary"
                                                style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"
                                                d="M19 5 5 19" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="flex flex-row justify-between gap-1 w-1/3 items-center">
                                    <button class="w-4 h-4 p-1 bg-[#DBD5CA]/70 border border-[#2C221C99] rounded-full shadow-md"
                                        @click="store.decreaseAmount(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"
                                            xml:space="preserve">
                                            <path
                                                d="M361.889 474.762 197.817 256.006 361.889 37.237c7.713-10.283 5.627-24.871-4.655-32.582-10.282-7.713-24.871-5.626-32.582 4.655L150.109 242.042a23.27 23.27 0 0 0 0 27.927l174.544 232.72c4.572 6.097 11.56 9.311 18.637 9.311 4.858 0 9.759-1.517 13.945-4.656 10.283-7.713 12.367-22.3 4.654-32.582" />
                                        </svg>
                                    </button>
                                    <p>{{ item.amount }}</p>
                                    <button class="w-4 h-4 p-1 bg-[#DBD5CA]/70 border border-[#2C221C99] rounded-full shadow-md"
                                        @click="store.increaseAmount(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"
                                            xml:space="preserve">
                                            <path
                                                d="M388.819 239.537 156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.2 23.2 0 0 0 139.636 512a23.2 23.2 0 0 0 16.457-6.817L388.819 272.45a23.27 23.27 0 0 0 0-32.913" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="text-[#FF6700] font-semibold">{{ item.product.price }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 flex flex-col p-4 gap-4">
                        <h3 class="uppercase chibola text-3xl">Ваш заказ</h3>
                        <p>Товар на сумму</p>
                        <p>Скидка</p>
                        <p>Итого</p>
                        <div class="inline-flex gap-3 items-end justify-between">
                            <div class="text-[#110500a5] text-sm border-b-2 border-[#110500] w-full">Введите промокод</div>
                            <button class="text-[#FF6700] border-2 border-[#FF6700] rounded-md py-1 px-3 font-medium">Применить</button>
                        </div>
                        <button class="bg-[#FF6700] text-white rounded-md py-2">Оформить заказ</button>
                    </div>
                </div>
            </template>
        </div>
    </PageShell>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue';
import { useBasketStore } from '../stores/basket.js'
import PageShell from '../components/PageShell.vue'
import shoppingcart from '../assets/shoppingcart.png'

const store = useBasketStore()

</script>