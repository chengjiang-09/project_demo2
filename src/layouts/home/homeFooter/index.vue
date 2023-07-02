<template>
    <div class="home-footer">
        <div class="container">
            <div class="footer-top">
                <router-link :to="props.authenticProductInquiryPath" tag="div" class="footer-top-left">
                    <img src="../../../assets/img/footer/footer_icon1.png" alt="">
                    <span>正品查询</span><span class="en">GENUINE INQUIRY</span>
                </router-link>
                <router-link :to="props.storeSearch" tag="div" class="footer-top-right">
                    <img src="../../../assets/img/footer/footer_icon2.png" alt="">
                    <span>门店查询</span><span class="en">PRODUCT TRIAL</span>
                </router-link>
            </div>
            <div>
                <div class="footer-center">
                    <div class="top">
                        <ul class="top-items">
                            <li v-for="item in props.centerTopItems" :key="item.path">
                                <router-link :to="{
                                    path: item.path
                                }">
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="bottom">
                        <div class="bottom-items">
                            <a class="bottom-items-img" href="javascript:;">
                                <img src="../../../assets/img/footer/wx.png" alt="">
                            </a>
                            <a class="bottom-items-img" href="javascript:;">
                                <img src="../../../assets/img/footer/wx.png" alt="">
                            </a>
                        </div>
                        <div class="bottom-other">
                            <div>
                                邮箱：test@136.com
                            </div>
                            <div>
                                客户服务热线 | 400-8517-666
                            </div>
                        </div>
                        <div class="bottom-other-m">
                            <div>400-8517-666</div>
                            <div>
                                邮箱：test@136.com
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-foot">
                    珀莱雅化妆品股份有限公司
                </div>
            </div>
            <div class="footer-decoration">
                <float-fish></float-fish>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
interface CenterTopItem {
    path: string,
    title: string
}

interface Props {
    authenticProductInquiryPath?: string,
    storeSearch?: string,
    centerTopItems?: Array<CenterTopItem>
}

const props = withDefaults(defineProps<Props>(), {
    authenticProductInquiryPath: '',
    storeSearch: '',
    centerTopItems() {
        return [
            {
                path: "",
                title: '明星榜单'
            },
            {
                path: "",
                title: '护肤'
            },
            {
                path: "",
                title: '面膜'
            },
            {
                path: "",
                title: '彩妆'
            },
            {
                path: "",
                title: '洗护'
            },
            {
                path: "",
                title: '珀友分享'
            },
            {
                path: "",
                title: '品牌介绍'
            }, {
                path: "",
                title: '新闻资讯'
            },
        ]
    }
})

</script>
    
<style lang="less" scoped>
.home-footer {
    width: 100%;
    background-color: #18368b;

    .container {
        position: relative;
        width: 100%;
        overflow: hidden;

        .footer-top {
            width: 100%;
            display: flex;
            margin: 0 auto;
            justify-content: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 20px 0;

            &-left {
                width: 50%;
                padding: 10px 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-right: 1px solid rgba(255, 255, 255, 0.1);

                img {
                    width: 55px;
                    height: auto;
                }

                span {
                    font-size: 18px;
                    color: #87bfe9;
                }

                span:nth-child(2) {
                    padding-left: 15px;
                    padding-right: 8px;
                }

                .en {
                    position: relative;

                    &::before {
                        content: '';
                        position: absolute;
                        width: 8px;
                        height: 100%;
                        top: 50%;
                        right: 0;
                        transform: translate(200%, -50%);
                        background-image: url('../../../assets/img/footer/footer_icon3.png');
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }

                @media (max-width: 864px) {
                    .en {
                        display: none;
                    }
                }
            }

            &-right {
                width: 50%;

                padding: 10px 20px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 55px;
                    height: auto;
                }

                span {
                    font-size: 18px;
                    color: #87bfe9;
                }

                span:nth-child(2) {
                    padding-left: 15px;
                    padding-right: 8px;
                }

                .en {
                    position: relative;

                    &::before {
                        content: '';
                        position: absolute;
                        width: 8px;
                        height: 100%;
                        top: 50%;
                        right: 0;
                        transform: translate(200%, -50%);
                        background-image: url('../../../assets/img/footer/footer_icon3.png');
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }

                @media (max-width: 864px) {
                    .en {
                        display: none;
                    }
                }
            }
        }

        .footer-center {
            width: 80%;
            margin: 0 auto;
            padding-bottom: 33px;

            .top {
                padding-top: 45px;

                &-items {
                    display: flex;
                    justify-content: center;

                    li {
                        font-size: 14px;
                        line-height: 42px;
                        color: #8ccaf8;
                        padding: 0 21px;
                    }
                }
            }

            @media (max-width: 864px) {
                .top {
                    display: none;
                }
            }

            .bottom {
                margin-top: 45px;
                text-align: center;
                font-size: 0;
                width: 100%;

                .bottom-items {
                    width: 100%;
                    display: flex;
                    justify-content: center;

                    &-img {
                        &>img {
                            width: 31px;
                            height: 31px;
                            margin-right: 15px;
                        }
                    }

                    &-img:last-child {
                        &>img {
                            margin-right: 0px;
                        }
                    }
                }

                .bottom-other {
                    width: 100%;
                    margin-top: 10px;

                    &>div {
                        font-size: 14px;
                        line-height: 27px;
                        color: #70a2d2;
                    }
                }

                @media (max-width: 864px) {
                    .bottom-other {
                        display: none;
                    }
                }

                .bottom-other-m {
                    display: none;
                    width: 100%;
                    margin-top: 10px;

                    &>div {
                        font-size: 14px;
                        line-height: 27px;
                        color: #70a2d2;
                    }

                    &>div:nth-child(1) {
                        width: 100%;
                        font-size: 24px;
                        border-radius: 40px;
                        height: 80px;
                        border: 1px solid #8ccaf8;
                        color: #70a2d2;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 20px;
                    }
                }

                @media (max-width: 864px) {
                    .bottom-other-m {
                        display: block;
                    }
                }

                @media (max-width: 765px) {
                    .bottom-other-m {
                        display: block;

                        &>div:nth-child(1) {
                            font-size: 18px;
                            border-radius: 20px;
                            height: 40px;
                        }
                    }
                }
            }
        }

        .footer-foot {
            width: 100%;
            font-size: 12px;
            color: #70a2d2;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            z-index: 5;
            padding: 22px 0;
            text-align: center;
        }

        @media (max-width: 864px) {
            .footer-foot {
                display: none;
            }
        }

        .footer-decoration {
            position: absolute;
            bottom: 20px;
            right: 0;
            width: 30%;
            height: 30%;
        }
    }
}
</style>