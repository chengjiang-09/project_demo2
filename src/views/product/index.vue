<template>
    <div id="productVue">
        <div class="container">
            <header ref="header">
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <div class="body">
                <div class="body-container">
                    <div class="first">
                        <div class="left">
                            <ul class="img-list" ref="imgList">
                                <li v-for="img in imgs" :key="img" :style="{ height: `${imgHeight}px` }">
                                    <img :src="img" alt="">
                                </li>
                            </ul>
                            <ul class="img-list-mini" :style="{ top: `${imgMiniTop}px` }">
                                <li v-for="(img, index) in imgs" :key="img"
                                    :class="[{ action: index === actionMiniIndex - 1 }]"
                                    :style="{ height: `${imgMiniHeight}px`, width: `${imgMiniHeight}px` }">
                                    <img :src="img" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="right">
                            <div class="box" :style="{ height: `${imgHeight}px`, top: `${mainTop}px` }">
                                <div class="top">
                                    <div class="top-container">
                                        <p class="first">珀莱雅红宝石淡纹紧致精华2.0</p>
                                        <p class="second">抗皱标杆 全新升级 攻守兼备 动静皆无纹</p>
                                        <ul class="third">
                                            <li class="one" v-for="num in 3" :key="num">
                                                <border-rotate :external-adaptation="true"></border-rotate>
                                                <p>双效六胜肽-1</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="bottom-container">
                                        <div class="title">
                                            <img src="../../assets/img/product/xinx5.png" alt="">
                                            <span class="content">5.0</span>
                                        </div>
                                        <div class="specifications">
                                            <span class="title">规格：</span>
                                            <span class="content">30ml</span>
                                        </div>
                                        <div class="price">
                                            <span class="title">价格：</span>
                                            <span class="content">¥350.00</span>
                                            <common-button title="点击购买"></common-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second"></div>
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
import { getAssetsFile } from '@/utils'
import { toReactive } from '@vueuse/core';
import { onMounted, ref } from 'vue';

interface Props {
    imgs?: Array<string>
}

const props = withDefaults(defineProps<Props>(), {
    imgs() {
        return [
            getAssetsFile('product/2021042918330812.png'),
            getAssetsFile('product/2021042918330812.png'),
            getAssetsFile('product/2021042918330812.png')
        ]
    },
})

const imgs = toReactive(props.imgs)

const imgList = ref<HTMLElement>()
const header = ref<HTMLElement>()
const imgHeight = ref<number>(0)
const imgMiniHeight = ref<number>(0)
const imgMiniTop = ref<number>(0)
const imgMiniBaseTop = ref<number>(0)
const mainTop = ref<number>(0)

const actionMiniIndex = ref<number>(1)
const startScrollTop = ref<number>(1)
function setImgHeight() {
    if (header.value) {
        imgHeight.value = window.innerHeight - header.value.getBoundingClientRect().height
        imgMiniBaseTop.value = imgHeight.value / 2
        imgMiniTop.value = imgMiniBaseTop.value
        startScrollTop.value = imgMiniTop.value
    }

    if (imgList.value) {
        imgMiniHeight.value = imgList.value.getBoundingClientRect().left
    }
}

onMounted(() => {
    setImgHeight()

    window.addEventListener('resize', setImgHeight)

    window.addEventListener('scroll', function () {
        let scrollDistance = window.scrollY || document.documentElement.scrollTop;

        if (header.value) {
            //判断滚动距离是否大于图片列表的(n - 1)*高加上头部导航栏的高度，简单来说就是除开最后一张图片后的高度
            if (imgHeight.value && imgHeight.value > 0 && imgs.length > 0 && scrollDistance <= (imgHeight.value * (imgs.length - 1) + header.value.getBoundingClientRect().height)) {
                imgMiniTop.value = imgMiniBaseTop.value + scrollDistance

                //右侧盒子滚动，当滚动距离超过n-1张img高度时，盒子将保证与最后一张img保持平齐
                if (scrollDistance < (imgs.length - 1) * imgHeight.value) {
                    mainTop.value = scrollDistance
                } else {
                    mainTop.value = (imgs.length - 1) * imgHeight.value
                }
            }
        }

        //记录激活显示mini图片，原理是滚动超过上一张图片的一半就会将index加一
        //最初会判断滚动是否大于img高度的一半，是则为判断用的基础值加上img高度，后续将会判断是否高于img完整高度，是则重复加上img高度，同时计数加一
        //回滚时，判断基础值是否大于1.5倍的img高度，是则说明以及往下滚动了，接着就判断滚动距离是否小于基础值减去img高度，是则计数减一
        if (scrollDistance > startScrollTop.value && actionMiniIndex.value < imgs.length) {
            actionMiniIndex.value += 1
            startScrollTop.value += imgHeight.value
        } else if (startScrollTop.value >= imgHeight.value * 1.5 && scrollDistance < startScrollTop.value - imgHeight.value) {
            actionMiniIndex.value -= 1
            startScrollTop.value -= imgHeight.value
        }
    });
})
</script>
    
<style lang="less" scoped>
#productVue {
    width: 100%;

    .container {
        width: 100%;

        .body {
            width: 100%;

            &-container {
                width: 90%;
                margin: 0 auto;

                .first {
                    width: 100%;
                    display: flex;

                    .left {
                        flex: 1;
                        position: relative;

                        .img-list {
                            width: 100%;

                            li {
                                padding: 10px;

                                img {
                                    height: 100%;
                                    width: 100%;
                                }
                            }
                        }

                        .img-list-mini {
                            position: absolute;
                            left: -10%;
                            top: 0;
                            transform: translateY(-100%);

                            li {
                                margin-bottom: 10px;

                                img {
                                    height: 100%;
                                    width: 100%;
                                }
                            }
                        }

                        .action {
                            border: 2px solid #18368b;
                        }
                    }

                    .right {
                        position: relative;
                        flex: 1;

                        .box {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            &>.top {
                                flex: 1;
                                display: flex;
                                justify-content: center;
                                align-items: end;

                                .top-container {
                                    width: 90%;
                                    height: 60%;

                                    .first {
                                        color: #333;
                                        font-size: 22px;
                                    }


                                    @media (max-width: 1366px) {
                                        .first {
                                            color: #333;
                                            font-size: 18px;
                                        }
                                    }

                                    .second {
                                        font-size: 14px;
                                        color: #666;
                                        margin-top: 7px;
                                    }

                                    .third {
                                        padding-top: 25px;
                                        display: flex;

                                        .one {
                                            height: 100%;
                                            width: 65px;
                                            display: flex;
                                            flex-direction: column;
                                            align-items: center;
                                            margin-right: 40px;

                                            p {
                                                margin-top: 15px;
                                                text-align: center;
                                                font-size: 12px;
                                                color: #18368b;
                                            }
                                        }
                                    }
                                }
                            }

                            &>.bottom {
                                flex: 1;
                                display: flex;
                                justify-content: center;
                                padding: 70px 0 0 0;

                                .bottom-container {
                                    width: 90%;
                                    height: 60%;

                                    &>.title {
                                        display: flex;
                                        align-items: center;
                                        height: 60px;
                                        border-bottom: 1px solid #e6e6e6;

                                        &>img {
                                            height: 13px;
                                            width: auto;
                                        }

                                        .content {
                                            display: block;
                                            margin-left: 20px;
                                        }
                                    }


                                    @media (max-width: 1366px) {
                                        &>.title {

                                            height: 40px;
                                        }
                                    }

                                    &>.specifications {
                                        display: flex;
                                        align-items: center;
                                        height: 60px;
                                        border-bottom: 1px solid #e6e6e6;

                                        .content {
                                            display: block;
                                            margin-left: 20px;
                                        }
                                    }

                                    @media (max-width: 1366px) {
                                        &>.specifications {

                                            height: 40px;
                                        }
                                    }


                                    &>.price {
                                        display: flex;
                                        align-items: center;
                                        height: 100px;

                                        .content {
                                            display: block;
                                            margin-left: 20px;
                                            margin-right: 230px;
                                        }
                                    }

                                    @media (max-width: 1366px) {
                                        &>.price {
                                            height: 60px;

                                            .content {

                                                margin-right: 100px;
                                            }
                                        }
                                    }
                                }
                            }

                            @media (max-width: 1366px) {
                                &>.bottom {
                                    padding: initial;
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