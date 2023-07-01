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
import { detilProps } from '@/components/common/index'

//动态引入类型定义
const props = defineProps(detilProps)

const leftItems = toReactive(props.leftItems ? props.leftItems : [])
const rightItems = toReactive(props.rightItems ? props.rightItems : [])
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