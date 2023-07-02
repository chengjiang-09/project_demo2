<template>
    <div id="StarListVue">
        <div class="container">
            <header>
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <div class="title">
                <div class="main">
                    <open-star></open-star>
                    <img src="../../assets/img/starList/star_banner.jpg" alt="">
                    <div class="main-content">
                        <div class="main-content-top">
                            <div class="main-content-top-left">
                                <div class="top">TOP</div>
                                <div class="bottom">
                                    <img src="../../assets/img/starList/xin.png" alt="" srcset="">
                                </div>
                                <div class="bottom-x">
                                    <img src="../../assets/img/starList/xinx.png" alt="" srcset="">
                                </div>
                            </div>
                            <div class="main-content-top-right">
                                10
                            </div>
                        </div>
                        <div class="main-content-center">
                            珀莱雅明星产品
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="body-container">
                    <div class="main">
                        <star-product :center-show="false" v-for="num in 3" :key="num"
                            :reseverse="num === 2 || num === 4"></star-product>
                    </div>
                </div>
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
import HomeFooter from '@/layouts/home/homeFooter/index.vue'
import StarProduct from '@/views/home/components/bodyStar/components/starProduct/index.vue'
import { useRoute } from 'vue-router'
import { useHomeStore } from '@/store'

const homeStore = useHomeStore()
const route = useRoute()
homeStore.setTargetView(route.path)

</script>
    
<style lang="less" scoped>
#StarListVue {
    width: 100%;
    .container {
        width: 100%;
        background-image: url('../../assets/img/starList/star_bg.png');
        background-size: 100%;
        background-color: #eef3f7;

        header {
            width: 100%;
        }

        .title {
            &>.main {
                position: relative;
                overflow: hidden;

                &>img {
                    width: 100%;
                    height: auto;
                }

                @media (max-width:1024px) {
                    &>img {
                        opacity: 0;
                    }
                }

                .main-content {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 40%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &-top {
                        &-left {
                            vertical-align: top;
                            display: inline-block;

                            .top {
                                width: 100%;
                                font-size: 32px;
                                color: #ffffff;
                                vertical-align: top;
                                padding-left: 15px;
                                padding-top: 35px;
                                transition: font-size .5s;
                            }

                            .bottom {
                                // padding: 0 0 65px 0px;
                                vertical-align: top;
                            }

                            .bottom-x {
                                display: none;
                            }

                            @media (max-width:1024px) {
                                .bottom {
                                    display: none;
                                }

                                .bottom-x {
                                    display: block;
                                    width: 87px;
                                    height: 12px;
                                }
                            }
                        }

                        &-right {
                            display: inline-block;
                            font-size: 80px;
                            color: #ffffff;
                            transition: font-size .5s;
                        }
                    }

                    &-center {
                        display: block;
                        font-size: 42px;
                        color: #ffffff;
                        transition: font-size .5s;
                    }

                    @media (max-width:1366px) {
                        &-top {
                            &-left {
                                .top {
                                    font-size: 26px;
                                    padding-left: 15px;
                                    padding-top: 23px;
                                }
                            }

                            &-right {
                                font-size: 60px;
                            }
                        }

                        &-center {

                            font-size: 32px;
                        }
                    }

                    @media (max-width:1024px) {
                        &-top {
                            &-left {
                                .top {
                                    font-size: 26px;
                                    padding-left: 15px;
                                    padding-top: 23px;
                                    color: #18368b;
                                }
                            }

                            &-right {
                                font-size: 60px;
                                color: #18368b;
                            }
                        }

                        &-center {
                            color: #18368b;
                            font-size: 32px;
                        }
                    }
                }
            }
        }

        .body {
            width: 100%;
            padding: 30px 0;
            margin-bottom: 50px;

            &-container {
                width: 80%;
                margin: 0 auto;

            }
        }
    }
}
</style>