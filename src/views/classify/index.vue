<template>
    <div class="classifyVue">
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
                <div class="body-box">
                    <div class="left">
                        <ul class="card">
                            <li class="card-item" v-for="(nav, index) in homeStore.titleNavM" :key="index">
                                <expansion-bar @change-status="changeAction" :title="nav.navItem.title"
                                    :path="nav.navItem.path" :action="nav.active" :detils="nav.navItem.detils"
                                    :id="nav.navItem.id" :font-size-main="14" :font-size-detil="12" :height="70"
                                    :font-size-icon="11"></expansion-bar>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="right-top">
                            <div class="title">测试</div>
                            <div class="select">选项</div>
                        </div>
                        <div class="right-bottom">
                            <ul class="box">
                                <li class="one" v-for="num in 9" :key="num">
                                    <product-display></product-display>
                                </li>
                            </ul>
                        </div>
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
import HomeFooter from '@/layouts/home/homeFooter/index.vue';
import { useHomeStore } from '@/store'

const homeStore = useHomeStore()

function changeAction({ action, id }) {
    const titleNavM = homeStore.titleNavM.map(obj => {
        if (obj.navItem.id && obj.navItem.id === id || (!obj.navItem.id && obj.navItem.title === id)) {
            obj.active = action
        } else {
            obj.active = false
        }
        return obj
    })

    homeStore.setTitleNavM(titleNavM)
}


</script>
    
<style lang="less" scoped>
.classifyVue {
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
            width: 100%;

            &-box {
                width: 90%;
                margin: 50px auto 0;
                display: flex;

                &>.left {
                    width: 135px;

                    .card {
                        width: 100%;

                        &-item {
                            width: 100%;
                            border-bottom: 1px solid #000000;
                        }
                    }
                }

                @media (max-width: 1024px) {
                    &>.left {
                        display: none;
                    }
                }

                &>.right {
                    flex: 1;

                    .right-top {
                        width: 100%;
                        padding: 20px 50px;
                        display: flex;
                        justify-content: space-between;

                        .title {

                        }

                        .select{

                        }
                    }

                    .right-bottom {
                        width: 100%;
                        padding-left: 50px;

                        &>.box {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;

                            &>.one {
                                width: 30%;
                                margin-bottom: 20px;
                            }

                            @media (max-width: 768px) {
                                &>.one {
                                    width: 48%;
                                    margin-bottom: 20px;
                                }
                            }

                        }
                    }
                }
            }
        }
    }
}
</style>