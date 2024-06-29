<template>
    <div class="w-full bg-[#1d1d1d] py-16 open-font">
        <div class="max-w-[1170px] w-full h-full mx-auto grid grid-cols-3 px-20 gap-14">
            <img class="w-full h-full object-cover col-span-3 lg:col-span-1" :src="store.films[id].img"
                :alt="store.films[id].name">
            <div class="flex flex-col gap-12 col-span-3 lg:col-span-2">
                <h2 class="text-white  text-3xl font-normal">{{ store.films[id].name }}</h2>
                <div class="font-semibold text-xl text-white">
                    <div class="flex flex-row justify-between my-4">
                        <h6>Жанр:</h6>
                        <p class="w-1/2">{{ store.films[id].genre }}</p>
                    </div>
                    <div class="flex flex-row justify-between my-4">
                        <h6>В ролях:</h6>
                        <p class="w-1/2">{{ store.films[id].cast }}</p>
                    </div>
                    <div class="flex flex-row justify-between my-4">
                        <h6>Страна:</h6>
                        <p class="w-1/2">{{ store.films[id].country }}</p>
                    </div>
                    <div class="flex flex-row justify-between my-4">
                        <h6>Продолж.:</h6>
                        <p class="w-1/2">{{ store.films[id].duration }}</p>
                    </div>
                </div>
                <button
                    class="bg-white relative w-full lg:w-1/2 open-font font-normal text-lg rounded-2xl px-3 py-1 hover:bg-amber-400 hover:shadow-lg border-4 border-transparent"
                    @click="store.addItem(id)">Купить
                    билет
                    <span
                        class="absolute inset-0 rounded-2xl bg-transparent border-4 border-amber-400 opacity-0 hover:opacity-75 hover:animate-impulse"></span>
                </button>
            </div>
            <div class="col-span-3 text-white open-font">
                <h3 class="text-3xl font-semibold mb-4">Рейтинг фильма</h3>
                <div class="flex flex-row items-center gap-4 md:gap-8">
                    <ul class="inline-flex">
                        <li v-for="i in 10" :key="i">
                            <svg class="w-4 h-4 md:w-8 md:h-8"
                                :class="i <= Math.ceil(kinopoiskRating) ? 'text-amber-400' : 'text-gray-300'" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </li>
                    </ul>
                    <div class="text-white text-2xl md:text-4xl">
                        {{ kinopoiskRating.toFixed(1) }}
                    </div>
                </div>
                <div class="ms-1">Всего оценивших: {{ kinopoiskRaters }}</div>
            </div>
            <div class="col-span-3 text-white open-font">
                <h3 class="text-3xl font-semibold mb-4">Галерея</h3>
                <div class="w-full h-full">
                    <swiper-container class="my-swiper" :space-between="spaceBetween" :centered-slides="true"
                        navigation="true" pagination="true" loop="true" effect="fade" id="film-shoots"
                        style="--swiper-navigation-color: #d2d2d2; --swiper-pagination-color: #f4f4f4; --swiper-pagination-bullet-inactive-color: #f1f1f1; aspect-ratio: 16/9;">
                        <swiper-slide v-for="image, index in store.films[id].gallery" :key="index">
                            <img class="w-full object-fill" style="height: 100%;" :src="image" :alt="index">
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
            <div class="col-span-3 text-white open-font">
                <h3 class="text-3xl font-semibold mb-4">Описание фильма</h3>
                <p class="font-normal text-md">{{ store.films[id].description }}</p>
            </div>
        </div>
    </div>
    <div class="w-full bg-[#222222] py-16 inter-font text-white">
        <div class="max-w-[1170px] w-full mx-auto flex flex-col lg:flex-row text-center lg:justify-between px-6">
            <div class="w-full lg:w-1/3">

            </div>
            <h4 class="w-full lg:w-1/3 font-semibold text-2xl mb-2">Фильмы Гая Ричи</h4>
            <div class="w-full lg:w-1/3 lg:text-right flex flex-col">
                <a href="tel:89873300843" class="text-3xl font-normal mb-2 hover:text-gray-200/60">8 (987) 330-
                    08-43</a>
                <a href="mailto:allguyritchiefilms@mail.ru"
                    class="hover:text-gray-200/60">allguyritchiefilms@mail.ru</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useBasketStore } from '../stores/basket.js'
import { register } from 'swiper/element/bundle';
import 'swiper/css/bundle'
import 'swiper/css/navigation'
register();
const props = defineProps({
    id: String
})
const store = useBasketStore()
const kinopoiskOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': '0S2TAPV-TV940W2-KKHEBNG-6GN4D1Z'
    }
}

const kinopoiskData = ref({});
const kinopoiskRating = ref(0)
const kinopoiskRaters = ref(0)

const fetchKinopoiskData = async (kinopoiskID) => {
    try {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${kinopoiskID}`, kinopoiskOptions);
        const data = await response.json();
        kinopoiskData.value = data;
    } catch (err) {
        console.error(err);
    }
};

onMounted(async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    await fetchKinopoiskData(store.films[props.id].kinopoisk);
    kinopoiskRating.value = kinopoiskData.value.rating.kp
    kinopoiskRaters.value = kinopoiskData.value.votes.kp 


});

</script>