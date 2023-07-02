<template>
    <div id="washCareVue">
        <div class="container">
            <header>
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <div class="title">
                <div class="main">
                    <open-star></open-star>
                    <img class="main" src="../../assets/img/classify/20210419171241617.png" alt="">
                    <img class="mini" src="../../assets/img/classify/20210419171241156.png" alt="">
                </div>
            </div>
            <div class="body">
                <div class="container">
                    <ul class="products">
                        <li class="product" v-for="num in 11" :key="num">
                            <product-display></product-display>
                        </li>
                    </ul>
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
import HomeFooter from '@/layouts/home/homeFooter/index.vue';
</script>
    
<style lang="less" scoped>
#washCareVue {
    width: 100%;

    .container {
        width: 100%;

        .title {
            &>.main {
                position: relative;
                overflow: hidden;

                &>.main {
                    width: 100%;
                    height: auto;
                }

                &>.mini {
                    display: none;
                    width: 100%;
                    height: auto;
                }

                @media (max-width:1024px) {

                    &>.main {
                        display: none;
                    }

                    &>.mini {
                        display: block;
                    }
                }
            }
        }

        .body {
            padding: 200px 0 0 0;
            width: 100%;

            .container {
                width: 78%;
                margin: 0 auto;

                .products {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;

                    li {
                        width: 32%;
                        padding: 10px;
                    }

                    @media (max-width: 768px) {

                        li {
                            width: 50%;
                        }
                    }
                }
            }

        }
    }
}
</style>