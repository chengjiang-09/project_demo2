<template>
    <div id="homeVue">
        <div class="container">
            <header>
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <rotation-chart class="carousel" :carousel="homeStore.carousel" :mark="true"></rotation-chart>
            <rotation-chart class="carouselM" :carousel="homeStore.carouselM"></rotation-chart>
            <div class="body">
                <div class="body-decoration">
                    <BodyIndex></BodyIndex>
                    <div class="left-top">
                        <float-fish></float-fish>
                    </div>
                    <div class="right-bottom">
                        <float-fish></float-fish>
                    </div>
                </div>
                <BodyStar></BodyStar>
                <BodyMain></BodyMain>
            </div>
            <footer>
                <home-footer></home-footer>
            </footer>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import homeHeader from '@/layouts/home/homeHeader/index.vue';
import homeHeaderM from '@/layouts/home/homeHeaderM/index.vue';
import BodyIndex from './components/bodyIndex/index.vue';
import BodyStar from './components/bodyStar/index.vue';
import BodyMain from './components/bodyMain/index.vue';
import HomeFooter from '@/layouts/home/homeFooter/index.vue'
import { useRoute } from 'vue-router'
import { useHomeStore } from '@/store'

const homeStore = useHomeStore()
const route = useRoute()
homeStore.setTargetView(route.path)

</script>
    
<style lang="less" scoped>
#homeVue {
    width: 100%;

    .container {
        width: 100%;

        header {
            width: 100%;
        }

        &>.carousel {
            display: block;
        }

        &>.carouselM {
            display: none;
        }

        @media (max-width: 1024px) {
            &>.carousel {
                display: none;
            }

            &>.carouselM {
                display: block;
            }

        }

        &>.div {
            width: 500px;
            height: 500px;
        }

        .body {
            width: 100%;
            overflow-y: hidden;
        }

        .body-decoration {
            width: 100%;
            position: relative;
            overflow: hidden;

            .left-top {
                position: absolute;
                left: 0;
                top: 0;
                width: 37%;
                height: 37%;
            }

            .right-bottom {
                position: absolute;
                transform: rotate(180deg);
                right: 0;
                bottom: 0;
                width: 37%;
                height: 20%;
            }
        }

        .text {
            width: 100%;
            height: 500px;
            background-color: #000000;
            position: relative;
            overflow: hidden;
        }
    }
}
</style>