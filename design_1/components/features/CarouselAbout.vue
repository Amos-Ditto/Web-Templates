<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper'
</script>
<template>
    <div class="w-full flex flex-col p-4 md:p-6">
        <swiper
            :spaceBetween="30"
            :effect="'fade'"
            :rewind="true"
            :navigation="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :modules="[EffectFade, Autoplay, Navigation, Pagination]"
            class="mySwiper"
        >
            <swiper-slide>
                <NuxtImg src="/about/2.webp" />
            </swiper-slide>
            <swiper-slide>
                <NuxtImg src="/about/3.webp" />
            </swiper-slide>
            <swiper-slide>
                <NuxtImg src="/about/4.webp" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
}

.swiper-slide img {
    display: block;
    width: 100%;
}
</style>
