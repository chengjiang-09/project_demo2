<template>
    <div class="star-product-m">
        <div class="container">
            <div class="img-main">
                <img :src="imgMain" alt="" srcset="">
            </div>
            <div class="img-other">
                <li v-for="path in imgOther" :key="path">
                    <img :src="path" alt="">
                </li>
            </div>
            <div class="content">
                <div class="content-main">
                    <p>弹润透亮青春精华液 双抗精华2.0</p>
                    <p>全链路「抗氧」 多防线「抗糖」 狙击初老 拯救暗黄</p>
                </div>
            </div>
            <div class="animation-title">
                <ul class="animation-title-box">
                    <li v-for="num in 3" :key="num">
                        <div>
                            <div class="animation-title-box-rotato">
                                <border-rotate :external-adaptation="true"></border-rotate>
                            </div>
                        </div>
                        <p class="animation-title-box-content">弹润透亮青春精华液 双抗精华2.0</p>
                    </li>
                </ul>
            </div>
            <div class="bottom-button">
                <common-button path=""></common-button>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { getAssetsFile } from '@/utils'
import { toRef } from 'vue';
interface Prop {
    imgMain?: string,
    imgOther?: Array<string>
}

const props = withDefaults(defineProps<Prop>(), {
    imgMain: getAssetsFile('project/star/mini/gxm1.jpg'),
    imgOther() {
        return [
            getAssetsFile('project/star/mini/gxm2.jpg'),
            getAssetsFile('project/star/mini/gxm3.jpg'),
            getAssetsFile('project/star/mini/gxm4.jpg')
        ]
    }
})

const imgMain = toRef(props, 'imgMain')
const imgOther = toRef(props, 'imgOther')
</script>
    
<style lang="less" scoped>
.star-product-m {
    width: 100%;

    .container {
        width: 100%;

        .img-main {
            width: 100%;
            height: auto;
        }

        .img-other {
            display: flex;

            li {
                margin: 4px;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            &-main {
                position: relative;
                margin-top: 5px;

                p:nth-child(1) {
                    font-size: 20px;
                }

                p:nth-child(2) {
                    font-size: 16px;
                    color: #222;
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: -10px;
                    top: 0;
                    width: 16px;
                    height: 14px;
                    background-image: url("../../../../../../assets/img/project/star/decoration/m_icon1.jpg");
                    background-size: 100%;
                    background-repeat: no-repeat;
                }

                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    right: -10px;
                    top: 0;
                    width: 16px;
                    height: 14px;
                    background-image: url("../../../../../../assets/img/project/star/decoration/m_icon2.jpg");
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
            }
        }

        .animation-title {
            width: 60%;
            margin: 20px auto;

            .animation-title-box {
                display: flex;

                li {
                    width: 100%;
                    margin: 0 5px;

                    &>div {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .animation-title-box-rotato {
                            width: 40%;
                        }
                    }

                    .animation-title-box-content {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        color: #12368a;
                        font-size: 12px;
                    }
                }
            }
        }

        .bottom-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
        }
    }
}
</style>