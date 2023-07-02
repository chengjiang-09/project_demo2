<template>
    <div id="productVue">
        <div class="container">
            <header ref="header">
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <div class="body">
                <div class="body-container">
                    <div class="first" ref="first">
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
                    <div class="first-m">
                        <rotation-chart :carousel="imgs"></rotation-chart>
                        <div class="bottom">
                            <p class="main">珀莱雅红宝石淡纹紧致精华2.0</p>
                            <p class="no-main">抗皱标杆 全新升级 攻守兼备 动静皆无纹</p>
                            <div class="main-img">
                                <div class="one" v-for="num in 3" :key="num">
                                    <div class="rotate">
                                        <border-rotate :external-adaptation="true"></border-rotate>
                                    </div>
                                    <p>双效六胜肽-1</p>
                                </div>
                            </div>
                            <div class="lv">
                                <div class="img">
                                    <img src="../../assets/img/product/xinx5.png" alt="">
                                </div>
                                <div class="content">5.0</div>
                            </div>
                            <div class="specifications">
                                <span>规格：</span>
                                <span>30ml</span>
                            </div>
                            <div class="price">
                                <span>价格：</span>
                                <span>¥350.00</span>
                            </div>
                            <div class="bottom-button">
                                <common-button title="点击购买"></common-button>
                            </div>
                        </div>
                    </div>
                    <div class="second">
                        <div class="second-container">
                            <div class="info-title">产品说明</div>
                            <div class="info">
                                <p class="main">「红宝石精华」2.0</p>
                                <p class="main">抗皱标杆 重磅升级</p>
                                <p>1、功效升级：</p>
                                <p>黄金抗皱「胜A」CP 双重升级</p>
                                <p>20%进阶双效六胜肽溶液，直击动态纹</p>
                                <p>1%超分子维A醇，对抗静态纹</p>
                                <p>温和兼高效，提升抗皱力</p>
                                <p>1、功效升级：</p>
                                <p>黄金抗皱「胜A」CP 双重升级</p>
                                <p>20%进阶双效六胜肽溶液，直击动态纹</p>
                                <p>1%超分子维A醇，对抗静态纹</p>
                                <p>温和兼高效，提升抗皱力</p>
                            </div>
                            <div class="info-title">使用方法</div>
                            <div class="info">
                                <p>使用时，旋转泵头至开启位置后，轻按泵头，取适量精华液均匀涂抹于脸上。</p>
                                <p>按摩手法：1.双手轻抚纤紧下颌线：手掌托住下巴，沿下颌线向上提拉至耳根</p>
                                <p>2.V型轻夹饱满苹果肌：食指与中指微张成V型于脸颊处轻夹3次</p>
                                <p>3.O型轻推淡褪法令纹：双手O型向上延伸至太阳穴，用指腹按摩太阳穴，结束后沿脸颊向下</p>
                            </div>
                            <div class="info-title">建议搭配</div>
                            <div class="other">
                                <div class="one" v-for="num in 3" :key="num">
                                    <product-display></product-display>
                                </div>
                            </div>
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

const isDisplayNone = ref<boolean>(false)
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

    //采用回滚初始值的方式解决pc和移动端切换后滚动图产生的bug
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth <= 1024) {
        isDisplayNone.value = true
    }

    if (viewportWidth > 1024 && isDisplayNone.value) {
        actionMiniIndex.value = 1
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 添加平滑滚动效果
        });
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

                                @media (max-height: 786px) {
                                    .top-container {
                                        height: 100%;
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

                @media (max-width: 1024px) {
                    .first {
                        display: none;
                    }
                }

                .first-m {
                    display: none;
                    width: 100%;

                    .bottom {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding-top: 40px;

                        .main {
                            font-size: 18px;
                            color: #333;
                        }

                        .no-main {
                            font-size: 14px;
                            color: #666;
                        }

                        .main-img {
                            margin-top: 20px;
                            width: 100%;
                            display: flex;

                            .one {
                                display: flex;
                                align-items: center;

                                .rotate {
                                    width: 40px;
                                }


                                p {
                                    width: 80px;
                                    font-size: 12px;
                                    margin-left: 4px;
                                    color: #18368b;
                                }
                            }
                        }

                        .lv {
                            display: flex;
                            align-items: center;
                            margin-top: 30px;

                            .img {
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    height: 15px;
                                    width: auto;
                                }
                            }

                            .content {
                                margin-left: 20px;
                                margin-top: 4px;
                            }
                        }

                        .specifications,
                        .price {
                            margin-top: 20px;

                            span {
                                font-size: 16px;
                                color: #333;
                            }

                            span:last-child {
                                margin-left: 30px;
                            }
                        }

                        .bottom-button {
                            padding: 10px 0 20px;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-bottom: 1px solid #e6e6e6;
                        }
                    }
                }

                @media (max-width: 1024px) {
                    .first-m {
                        display: block;
                    }
                }

                .second {
                    width: 100%;

                    &-container {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .info-title {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                            color: #12368a;
                            padding-bottom: 10px;
                            padding-top: 60px;
                            border-bottom: 1px solid #e6e6e6;
                            position: relative;

                            &::before {
                                content: "";
                                width: 30px;
                                height: 2px;
                                background-color: #12368a;
                                position: absolute;
                                bottom: -1px;
                                left: 50%;
                                margin-left: -15px;
                            }
                        }

                        .info {
                            margin-top: 40px;

                            p {
                                text-align: center;
                                color: #999 !important;
                                font-size: 14px;
                                margin-bottom: 12px;
                            }

                            .main {
                                color: #999 !important;
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }

                        .other {
                            width: 100%;
                            padding-top: 60px;
                            padding-bottom: 120px;
                            display: flex;
                            justify-content: center;

                            .one {
                                margin: 0 10px;
                            }

                            @media (max-width:1024px) {
                                .one:last-child {
                                    display: none;
                                }
                            }
                        }
                    }

                    @media (max-width: 1024px) {
                        &-container {
                            align-items: start;

                            .info-title {
                                justify-content: start;
                                border-bottom: 0px solid #e6e6e6;
                                padding-bottom: 0;
                                color: #333;
                                font-size: 18px;
                                font-weight: bold;

                                &::before {
                                    display: none;
                                }
                            }

                            .info {
                                p {
                                    text-align: left;
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