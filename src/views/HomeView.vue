<template>
  <main class="max-w-6xl h-full m-auto moserrat px-20">
    <section class="w-full max-h-[23rem] min-h-[23rem]">

      <div class="absolute right-[20%] z-10 w-full inline-flex justify-end items-center gap-8 pt-6 pr-16">
        <div class="mt-5 text-lg background-blur">+7 (999) 999 99 99</div>
        <RouterLink to="/cart" class="w-14 h-14 p-2 flex justify-center items-end background-blur">
          <img :src="cart" alt="cart icon">
          <div v-show="store.basketItems.length"
            class="absolute inline-flex text-center items-center justify-center w-5 h-5 top-6 right-16 text-xs font-bold text-white bg-[#FF6700] rounded-full">
            {{ store.basketItems.length }}</div>
        </RouterLink>
      </div>

      <div class="mx-auto">
        <img class="max-h-[16rem] mx-auto pt-8 mix-blend-multiply" :src="logo" alt="site logo">
      </div>

      <form class="max-w-3xl mx-auto mt-6 mb-4">
        <div class="flex">
          <div class="relative w-full">
            <input type="search"
              class="block p-2.5 w-full z-20 text-sm bg-[#FFFFFFA3] placeholder-gray-800 outline-none"
              placeholder="Название товара..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-[#FFFFFFA2]">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </form>

    </section>

    <section class="py-6">
      <h1 class="text-xl text-center px-8 font-medium text-[#5E4B40] background-blur mb-8">САМЫЙ БОЛЬШОЙ ОНЛАЙН-МАГАЗИН
        ОРИГИНАЛЬНЫХ ПОДАРКОВ
        С ЛАЗЕРНЫМ ГРАВИРОВАНИЕМ ДЛЯ СЕБЯ, ДРУЗЕЙ, СЕМЬИ, КОЛЛЕГ, ЛЮБИМЫХ.</h1>
    </section>

    <section class="w-full">
      <div class="absolute ">
        <img class="w-14 h-14 transform rotate-[-25deg] opacity-60" :src="case_icon" alt="case icon">
      </div>
      <h2 class="text-center text-5xl chibola text-[#2C221C] mb-16">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
    </section>
    <section class="my-8 w-full grid grid-cols-3 gap-16 justify-between">
      <ProductCard :id="store.products[0].id" :name="store.products[0].name" :image="store.products[0].img"
        :price="store.products[0].price" />
      <ProductCard :id="store.products[1].id" :name="store.products[1].name" :image="store.products[1].img"
        :price="store.products[1].price" />
      <ProductCard :id="store.products[2].id" :name="store.products[2].name" :image="store.products[2].img"
        :price="store.products[2].price" />
    </section>

    <section class="w-full inline-flex gap-12 justify-center mt-2 mb-10">
      <button class="w-14 h-10 bg-gray-50/70 rounded-sm">
        <svg class="w-12 h-6 m-auto" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2" />
        </svg>
      </button>

      <button class="w-14 h-10 bg-gray-50/70 rounded-sm">
        <svg class="w-12 h-6 m-auto" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414" />
        </svg>
      </button>
    </section>

    <section class="grid grid-cols-5 w-full px-8 mb-6">
      <div class="bg-gray-50/70 text-center border border-black py-3 inline-flex items-center gap-4 justify-center">
        <select class=" bg-transparent px-2">
          <option selected>Для нее</option>
        </select>
      </div>
      <div class="bg-gray-50/70 text-center border border-black py-3 inline-flex items-center gap-4 justify-center">
        <select class=" bg-transparent px-2">
          <option selected>Для него</option>
        </select>
      </div>
      <div class="bg-gray-50/70 text-center border border-black py-3 inline-flex items-center gap-4 justify-center">
        <select class=" bg-transparent px-2">
          <option selected>Любимым</option>
        </select>
      </div>
      <div class="bg-gray-50/70 text-center border border-black py-3 inline-flex items-center gap-4 justify-center">
        <select class=" bg-transparent px-2 text-wrap">
          <option class="break-line-option" selected>Smoke аксессуары</option>
        </select>
      </div>
      <div class="bg-gray-50/70 text-center border border-black py-3 inline-flex items-center gap-4 justify-center">
        <select class=" bg-transparent px-2">
          <option selected>Другое</option>
        </select>
      </div>
    </section>

    <section class="w-full">
      <div class="w-full block">
        <img class="w-14 h-14 transform rotate-[25deg] opacity-40" :src="wallet" alt="wallet icon">
      </div>
      <h2 class="text-center text-5xl chibola text-[#2C221C] mb-16">КАТАЛОГ ТОВАРОВ</h2>
    </section>
    <section class="my-8 w-full grid grid-cols-3 gap-16 mb-16 justify-between">
      <ProductCard :id="store.products[3].id" :name="store.products[3].name" :image="store.products[3].img"
        :price="store.products[3].price" />
      <ProductCard :id="store.products[4].id" :name="store.products[4].name" :image="store.products[4].img"
        :price="store.products[4].price" />
      <ProductCard :id="store.products[5].id" :name="store.products[5].name" :image="store.products[5].img"
        :price="store.products[5].price" />
    </section>
    <div class="absolute right-[22%]">
      <img class="w-14 h-14 transform rotate-[25deg] opacity-40" :src="lighter" alt="lighter icon">
    </div>
    <section class="my-8 w-full grid grid-cols-3 gap-16 justify-between">
      <ProductCard :id="store.products[6].id" :name="store.products[6].name" :image="store.products[6].img"
        :price="store.products[6].price" />
      <ProductCard :id="store.products[7].id" :name="store.products[7].name" :image="store.products[7].img"
        :price="store.products[7].price" />
      <ProductCard :id="store.products[8].id" :name="store.products[8].name" :image="store.products[8].img"
        :price="store.products[8].price" />
    </section>

    <section class="w-full">
      <div class="w-full block">
        <img class="w-14 h-14 transform rotate-[-85deg] opacity-40" :src="pen" alt="pen icon">
      </div>
      <h2 class="text-center text-4xl chibola text-[#2C221C]">ㅤ</h2>
    </section>
    <section class="my-8 w-full">
      <img class="w-12 h-12 mx-auto" :src="loading" alt="loading icon">
      <img class="w-12 h-12 mx-auto mb-12 opacity-0" :src="loading" alt="loading icon">
    </section>

    <div class="fixed bottom-20 right-[20%] z-50 mt-24 mr-2">
      <div class="p-2 mb-2 rounded-full bg-gray-300/90 cursor-pointer opacity-70 border border-black">
        <svg class="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
        </svg>
      </div>
      <div class="p-2 rounded-full bg-gray-300/90 cursor-pointer opacity-70 border border-black">
        <svg class="w-8 h-8" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h48v48H0z" fill="none" />
          <path d="m6.586 30.585 2.828 2.828L24 18.827l14.586 14.586 2.828-2.828L24 13.171z" />
        </svg>
      </div>
    </div>

  </main>
</template>

<script setup>
import wood from '../assets/wooden_pattern.png'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import case_icon from '../assets/case.png'
import wallet from '../assets/wallet.png'
import pen from '../assets/pen.png'
import loading from '../assets/loading.png'
import lighter from '../assets/lighter.png'
import { useBasketStore } from '../stores/basket.js'
import ProductCard from '../components/ProductCard.vue'

const store = useBasketStore();

</script>

<style>
@font-face {
  font-family: "Chibola";
  src: url("../assets/Chibola.woff") format('woff');
}

.moserrat {
  font-family: "Montserrat", sans-serif;
}

.chibola {
  font-family: "Chibola";
  color: #2C221C;
}

main {
  background: linear-gradient(rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)), url('../assets/wooden_pattern.png');
  background-repeat: repeat-y;
  mix-blend-mode: darken;
}

.background-blur {
  background: radial-gradient(#ffffffab, #ffffff4a);
  box-shadow: 0 0 50px 15px #e8e8e896;
}

.background-blur-strong {
  background: radial-gradient(#fff, #ffffff8a);
  box-shadow: 0 0 50px 15px #e8e8e8;
}

.text-blur {
  text-shadow: #ffffff 0 0 20px;
}

.break-line-option {
  white-space: pre-line;
  /* This allows line breaks to be respected */
}
</style>