<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
                <div class="banner-item"
                    :style="{'background': banner.icon ? `url(${require(`~/assets/img/${banner.icon}`)})` : ''}"
                    @click="$router.push(banner.url)"/>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            banners: [
                {
                    icon: 'bg_dyysb.png',
                    url: '/'
                },
                {
                    icon: 'bg-sssb.png',
                    url: '/'
                }
            ],
            swiperOption: {
                loop: true,
                speed: 1000,
                effect: 'fade',
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    }
}
</script>

<style lang="scss">
.banner-item {
    height: 470px;
    background-size: cover;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    background: #ffffff;
}
</style>
