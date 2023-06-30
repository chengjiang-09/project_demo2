<template>
    <div class="detil">
        <div class="container">
            <div class="left-box">
                <div class="left-box-body">
                    <dl class="items" v-for="(item, index) in leftItems" :key="index">
                        <dt class="items-title">
                            <router-link :to="item.title.path">{{ item.title.text }}</router-link>
                        </dt>
                        <dd class="items-one" v-for="data in item.datas" :key="data.text">
                            <router-link :to="data.path">{{ data.text }}</router-link>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="right-box">
                <div class="right-box-body">
                    <router-link class="items" v-for="(items, index) in rightItems" :key="index" :to="items.path">
                        <img class="items-img" :src="items.imgPath" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toReactive } from '@vueuse/core';
import { getAssetsFile } from '@/utils'
//左侧盒子
interface Title {
    text: string | number | symbol,
    path: string
}
interface LeftData extends Title { }
interface LeftItems {
    title: Title,
    datas: Array<LeftData>
}
//右侧盒子
interface RightData {
    imgPath: string,
    path: string
}

//props
interface Props {
    leftItems?: Array<LeftItems>,
    rightItems?: Array<RightData>
}

const props = withDefaults(defineProps<Props>(), {
    leftItems() {
        return [
            {
                title: {
                    text: "标题",
                    path: ""
                },
                datas: [
                    {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    },
                ]
            }, {
                title: {
                    text: "标题",
                    path: ""
                },
                datas: [
                    {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    }, {
                        text: "标题",
                        path: ""
                    },
                ]
            },
        ]
    },
    rightItems() {
        return [
            {
                path: "",
                imgPath: getAssetsFile("2021041613334312.png")
            },
            {
                path: "",
                imgPath: getAssetsFile("2021041613334312.png")
            }
        ]
    },
})

const leftItems = toReactive(props.leftItems)
const rightItems = toReactive(props.rightItems)
</script>
    
<style lang="less" scoped>
@fontColor: #18368b;

.detil {
    width: 1000px;
    margin: 0 auto;
    background-color: #f7f9fa;

    .container {
        width: 100%;
        display: flex;
        margin-top: 40px;
        margin-bottom: 30px;

        .left-box {
            flex: 1;

            &-body {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;

                .items {
                    width: 135px;

                    &-title {
                        font-size: 14px;
                        color: @fontColor;
                        margin: 0 0 16px;
                    }

                    &-one {
                        height: 36px;
                        line-height: 36px;
                        font-size: 12px;
                        color: #666;

                        &:hover {
                            color: @fontColor;
                        }
                    }
                }
            }
        }

        .right-box {
            flex: 1;

            &-body {
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                .items {
                    margin-left: 20px;
                }

                .items:nth-child(n+3) {
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>