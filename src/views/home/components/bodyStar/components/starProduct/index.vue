<template>
    <div class="star-product">
        <div class="container">
            <div :class="[{ 'left': !reseverse }, { 'right': reseverse }]">
                <img v-if="!reseverse" :src="mainImg" alt="">
                <div class="right-title" v-if="reseverse">
                    {{ title }}
                </div>
                <div class="right-content" v-if="reseverse">
                    {{ content }}
                </div>
                <div class="right-detil" v-if="reseverse">
                    {{ detil }}
                </div>
                <div class="right-price" v-if="reseverse">
                    <span>{{ price }}</span>
                    <i></i>
                    <span>{{ capacity }}</span>
                </div>
                <common-button v-if="reseverse" class="right-button" :path="path"></common-button>
            </div>
            <div class="center" v-if="centerShow">
                <div class="top">
                    <img src="../../../../../../assets/img/project/star/animaition/gx2.png" class="gx2" alt="">
                    <img src="../../../../../../assets/img/project/star/animaition/gx3.png" class="gx3" alt="">
                    <img src="../../../../../../assets/img/project/star/animaition/gx4.png" class="gx4" alt="">
                </div>
                <div class="bottom">
                    <div v-for="num in 3" :key="num">
                        <div class="bottom-rotato">
                            <border-rotate></border-rotate>
                        </div>
                        <p class="bottom-content">弹润透亮青春精华液 双抗精华2.0</p>
                    </div>
                </div>
            </div>
            <div :class="[{ 'left': reseverse }, { 'right': !reseverse }]">
                <img v-if="reseverse" :src="mainImg" alt="">
                <div class="right-title" v-if="!reseverse">
                    {{ title }}
                </div>
                <div class="right-content" v-if="!reseverse">
                    {{ content }}
                </div>
                <div class="right-detil" v-if="!reseverse">
                    {{ detil }}
                </div>
                <div class="right-price" v-if="!reseverse">
                    <span>{{ price }}</span>
                    <i></i>
                    <span>{{ capacity }}</span>
                </div>
                <common-button v-if="!reseverse" class="right-button" :path="path"></common-button>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { getAssetsFile } from '@/utils'
import { toRef } from 'vue';

interface Props {
    mainImg?: string,
    title?: string,
    content?: string,
    detil?: string,
    price?: string,
    capacity?: string,
    path?: string,
    reseverse?: boolean,
    img?: Array<string>,
    centerShow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    mainImg: getAssetsFile('project/star/gx1.png'),
    title: '弹润透亮青春精华液 双抗精华2.0',
    content: '多链路抗氧「抗氧」 多防线「抗糖」 狙击初老 拯救暗黄',
    detil: '抗氧抗糖协同作战，1+1>2才能发挥抗初老高效能，科学复配四大前沿成分 一支双效抵御初老',
    price: '￥300',
    capacity: '20ml',
    path: '',
    reseverse: false,
    img() {
        return []
    },
    centerShow: true
})


const mainImg = toRef(props, 'mainImg')
const title = toRef(props, 'title')
const content = toRef(props, 'content')
const detil = toRef(props, 'detil')
const price = toRef(props, 'price')
const capacity = toRef(props, 'capacity')
const path = toRef(props, 'path')
const reseverse = toRef(props, 'reseverse')
const img = toRef(props, 'img')

</script>
    
<style lang="less" scoped>
@animation1: cubic-bezier(0.4, 0, 0.2, 1);

.star-product {
    width: 95%;
    margin-top: 40px;

    .container {
        width: 100%;
        display: flex;

        .left {
            flex: 2;
            height: auto;
        }

        .center {
            flex: 1.7;

            .top {
                height: 60%;
                width: 100%;
                position: relative;

                .gx2 {
                    position: absolute;
                    width: 38%;
                    left: 18%;
                    top: 6%;
                    transition: transform 1.2s @animation1;
                }

                .gx3 {
                    position: absolute;
                    width: 34%;
                    left: 4%;
                    top: 47%;
                    transition: transform 1.2s @animation1;
                }

                .gx4 {
                    position: absolute;
                    width: 40%;
                    left: 58%;
                    top: 17%;
                    transition: transform 1.2s @animation1;
                }

                &:hover {
                    .gx2 {
                        transform: translate(-4%, 4%);
                    }

                    .gx3 {
                        transform: translate(4%, -4%);
                    }

                    .gx4 {
                        transform: translate(-4%, 4%);
                    }
                }
            }

            .bottom {
                height: 40%;
                width: 100%;
                display: flex;
                justify-content: space-evenly;

                &-rotato {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                &-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    height: auto;
                    font-size: 12px;
                    color: #666;
                    margin: 5px 8px 0;
                }
            }
        }

        .right {
            flex: 2;
            height: auto;
            padding-top: 7%;
            margin-left: 5%;

            &-title {
                font-size: 30px;
                line-height: 32px;
                color: #12368a;
            }

            @media (max-width: 1024px) {
                &-title {
                    font-size: 20px;
                    line-height: 22px;
                }
            }

            &-content {
                font-size: 14px;
                line-height: 14px;
                color: #333;
                margin-top: 20px;
            }

            &-detil {
                font-size: 12px;
                line-height: 20px;
                color: #666;
                width: 265px;
                max-width: 90%;
                margin-top: 35px;
            }

            @media (max-width: 765px) {
                &-detil {
                    display: none;
                }

                &-content {
                    display: none;
                }
            }

            @media (max-width: 1024px) {
                &-detil {
                    margin-top: 18px;
                }
            }

            &-price {
                font-size: 14px;
                line-height: 14px;
                font-family: Arial;
                color: #12368a;
                margin-top: 68px;

                i {
                    width: 1px;
                    height: 10px;
                    margin: 0 10px;
                    display: inline-block;
                    background-color: #c4c4c4;
                }

                span {
                    font-size: 14px;
                    line-height: 14px;
                }
            }

            @media (max-width: 1366px) {
                &-price {
                    margin-top: 45px;
                }
            }


            @media (max-width: 1024px) {
                &-price {
                    margin-top: 25px;
                }
            }

            &-button {
                margin-top: 30px;
            }


            @media (max-width: 1024px) {
                &-button {
                    margin-top: 15px;
                }
            }
        }

        @media (max-width: 1024px) {
            .right {
                padding-top: 2%;
            }
        }
    }
}
</style>