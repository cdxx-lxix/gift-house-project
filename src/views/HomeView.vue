<template>
  <main class="max-w-6xl h-full m-auto moserrat px-20">
    <section class="w-full max-h-[23rem] min-h-[23rem]">

      <div class="absolute right-[20%] z-10 w-full inline-flex justify-end items-center gap-8 pt-6 pr-16">
        <div class="mt-5 text-lg text-blur">+7 (999) 999 99 99</div>
        <div class="w-14 h-14 p-2 flex justify-center items-end background-blur">
          <img :src="cart" alt="cart icon">
        </div>
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
      <h1 class="text-xl text-center px-8 font-medium text-[#5E4B40] text-blur mb-8">САМЫЙ БОЛЬШОЙ ОНЛАЙН-МАГАЗИН
        ОРИГИНАЛЬНЫХ ПОДАРКОВ
        С ЛАЗЕРНЫМ ГРАВИРОВАНИЕМ ДЛЯ СЕБЯ, ДРУЗЕЙ, СЕМЬИ, КОЛЛЕГ, ЛЮБИМЫХ.</h1>
    </section>

    <section class="w-full">
      <div class="absolute ">
        <img class="w-14 h-14 transform rotate-[-25deg] opacity-60" :src="case_icon" alt="case icon">
      </div>
      <h2 class="text-center text-4xl chibola text-[#2C221C] mb-16">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
    </section>
    <section class="my-8 w-full grid grid-cols-3 gap-16 justify-between">
      <ProductCard :name="store.products[0].name" :image="store.products[0].img" :price="store.products[0].price" />
      <ProductCard :name="store.products[1].name" :image="store.products[1].img" :price="store.products[1].price" />
      <ProductCard :name="store.products[2].name" :image="store.products[2].img" :price="store.products[2].price" />
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

    <section class="grid grid-cols-5 w-full px-8 mb-12">
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
      <div class="absolute">
        <img class="w-14 h-14 transform rotate-[25deg] opacity-40" :src="wallet" alt="wallet icon">
      </div>
      <h2 class="text-center text-4xl chibola text-[#2C221C] mb-16">КАТАЛОГ ТОВАРОВ</h2>
    </section>
    <section class="my-8 w-full grid grid-cols-3 gap-16 justify-between">
      <ProductCard :name="store.products[3].name" :image="store.products[3].img" :price="store.products[3].price" />
      <ProductCard :name="store.products[4].name" :image="store.products[4].img" :price="store.products[4].price" />
      <ProductCard :name="store.products[5].name" :image="store.products[5].img" :price="store.products[5].price" />
      <ProductCard :name="store.products[6].name" :image="store.products[6].img" :price="store.products[6].price" />
      <ProductCard :name="store.products[7].name" :image="store.products[7].img" :price="store.products[7].price" />
      <ProductCard :name="store.products[8].name" :image="store.products[8].img" :price="store.products[8].price" />
    </section>

    <section class="w-full">
      <div class="absolute">
        <img class="w-14 h-14 transform rotate-[-85deg] opacity-40" :src="pen" alt="pen icon">
      </div>
      <h2 class="text-center text-4xl chibola text-[#2C221C]">ㅤ</h2>
    </section>
    <section class="my-8 w-full">
      <img class="w-12 h-12 mx-auto" :src="loading" alt="loading icon">
      <img class="w-12 h-12 mx-auto mb-12 opacity-0" :src="loading" alt="loading icon">
    </section>

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
import { useBasketStore } from '../stores/basket.js'
import ProductCard from '../components/ProductCard.vue'

const store = useBasketStore();

</script>

<style>
@font-face {
  font-family: "Chibola";
  src: url("https://fontsforyou.com/fonts/c/Chibola.ttf");
}

.moserrat {
  font-family: "Montserrat", sans-serif;
}

.chibola {
  font-family: "Chibola";
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

.text-blur {
  text-shadow: #ffffff 0 0 20px;
}
.break-line-option {
      white-space: pre-line; /* This allows line breaks to be respected */
    }
</style>