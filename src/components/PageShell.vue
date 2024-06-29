<template>
    <main class="max-w-6xl h-full mx-auto moserrat px-20">
        <section>
            <div class="absolute right-[20%] z-10 w-full inline-flex justify-end items-center gap-8 pt-4 pr-16">
                <div class="mt-5 text-lg background-blur">+7 (999) 999 99 99</div>
                <RouterLink to="/cart" class="w-12 h-12 p-2 flex justify-center items-end background-blur">
                    <img :src="cart" alt="cart icon">
                </RouterLink>
            </div>
            <div class="mx-auto">
                <img class="max-h-[10rem] mx-auto pt-8 mix-blend-multiply" :src="logo" alt="site logo">
            </div>
        </section>
        <section>
            <slot />
        </section>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import wood from '../assets/wooden_pattern.png'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
</script>