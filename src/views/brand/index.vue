<template>
    <div id="brandVue">
        <div class="container">
            <header>
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <div class="title">
                <div class="main">
                    <open-star></open-star>
                    <img class="main" src="../../assets/img/classify/20210419171241617.png" alt="">
                </div>
            </div>
            <div class="body">
                <div class="first">
                    <div class="first-one"> <img src="../../assets/img/brand/2.jpg" alt=""></div>
                    <div class="first-one"><img src="../../assets/img/brand/3.jpg" alt=""></div>
                </div>
                <div class="second">
                    <div class="ch">
                        <p>趁年轻 去发现</p>
                        <p>以科技为基石，带着年轻无畏的发现精神，</p>
                        <p>致力于提供科学、安全、有效的肌肤解决方案，引领肌肤科技美学。</p>
                    </div>
                    <div class="static-img">
                        <img src="../../assets/img/brand/icon4.png" alt="">
                    </div>
                    <div class="en">
                        <p>PROYA IS A BRAND BUILT ON SCIENCE AND TECHNOLOGY. WITH A YOUNG AND FEARLESS SPIRIT OF DISCOVERY,
                        </p>
                        <p>PROYA IS COMMITTED TO PROVIDING SCIENTIFIC, SAFE AND EFFECTIVE SKINCARE SOLUTIONS, AND LEADING
                            SKIN</p>
                        <p>SCIENCE AND TECHNOLOGY AESTHETICS.</p>
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
</script>
    
<style lang="less" scoped>
@fontColor: #19368b;

#brandVue {
    width: 100%;

    .container {
        width: 100%;

        .title {
            &>.main {
                position: relative;
                overflow: hidden;

                @media (max-width:1024px) {

                    &>.main {
                        display: none;
                    }
                }
            }
        }

        .body {
            width: 100%;
            margin-top: 40px;

            .first {
                width: 79%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

                .first-one {
                    width: 100%;
                    padding: 40px 20px;

                    &>img {
                        width: 100%;
                    }
                }
            }

            .second {
                display: flex;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 100px;

                .ch {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p {
                        color: @fontColor;
                    }

                    p:nth-child(1) {
                        font-size: 40px;
                    }

                    p:nth-child(2) {
                        margin-top: 40px;
                        font-size: 24px;
                    }

                    p:nth-child(3) {
                        font-size: 24px;
                        margin-top: 10px;
                    }

                    @media (max-width: 1366px) {
                        p:nth-child(1) {
                            font-size: 30px;
                        }

                        p:nth-child(2) {
                            margin-top: 30px;
                            font-size: 20px;
                        }

                        p:nth-child(3) {
                            font-size: 20px;
                            margin-top: 6px;
                        }
                    }

                    @media (max-width: 1124px) {
                        p:nth-child(1) {
                            font-size: 26px;
                        }

                        p:nth-child(2) {
                            margin-top: 20px;
                            font-size: 16px;
                        }

                        p:nth-child(3) {
                            font-size: 16px;
                            margin-top: 4px;
                        }
                    }

                    @media (max-width: 737px) {
                        p:nth-child(1) {
                            font-size: 20px;
                        }

                        p:nth-child(2) {
                            margin-top: 10px;
                            font-size: 12px;
                        }

                        p:nth-child(3) {
                            font-size: 12px;
                            margin-top: 2px;
                        }
                    }
                }

                .static-img {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 0;

                    &>img {
                        height: 40px;
                    }
                }

                .en {
                    width: 70%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p {
                        color: @fontColor;
                        text-align: center;
                        font-weight: bold;
                    }

                    p:nth-child(1) {
                        font-size: 24px;
                    }

                    p:nth-child(2) {
                        margin-top: 40px;
                        font-size: 24px;
                    }

                    p:nth-child(3) {
                        font-size: 24px;
                        margin-top: 10px;
                    }

                    @media (max-width: 1366px) {
                        p:nth-child(1) {
                            font-size: 20px;
                        }

                        p:nth-child(2) {
                            margin-top: 30px;
                            font-size: 20px;
                        }

                        p:nth-child(3) {
                            font-size: 20px;
                            margin-top: 6px;
                        }
                    }

                    @media (max-width: 1124px) {
                        p:nth-child(1) {
                            font-size: 16px;
                        }

                        p:nth-child(2) {
                            margin-top: 20px;
                            font-size: 16px;
                        }

                        p:nth-child(3) {
                            font-size: 16px;
                            margin-top: 4px;
                        }
                    }

                    @media (max-width: 737px) {
                        p:nth-child(1) {
                            font-size: 12px;
                        }

                        p:nth-child(2) {
                            margin-top: 10px;
                            font-size: 12px;
                        }

                        p:nth-child(3) {
                            font-size: 12px;
                            margin-top: 2px;
                        }
                    }
                }
            }
        }
    }
}
</style>