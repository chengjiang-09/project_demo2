<template>
    <div class="product-display" @click="goPushRouter">
        <div class="container">
            <div class="product-display-img" @mouseenter="hoverImgContainer(false)" @mouseleave="hoverImgContainer(true)">
                <img class="product-display-img-static" :src="productImg" alt="" v-if="changeImg">
                <img class="product-display-img-hover" :src="productImgHover" alt="" v-else>
            </div>
            <div class="product-display-content" :class="[{ 'no-animation': !animationStart }]">
                <div class="title">{{ title }}</div>
                <div class="label">{{ label }}</div>
                <div class="price">
                    <span>{{ price }}</span>
                    <i></i>
                    <span>{{ capacity }}</span>
                </div>
                <div class="button" :class="[{ action: !changeImg && animationStart }, { static: !animationStart }]">
                    <CommonButton></CommonButton>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import CommonButton from '@/components/common/components/commonButton/index.vue'
import { getAssetsFile } from '@/utils'
import { toRef, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

interface Props {
    path?: string,
    productImg?: string,
    productImgHover?: string,
    title?: string | number,
    label?: string | number,
    price?: string | number,
    capacity?: string | number,
    animationStart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    productImg: getAssetsFile('more/20210715133151106.jpg'),
    productImgHover: getAssetsFile('more/20210715133151858.jpg'),
    title: '珀莱雅赋能鲜颜淡纹紧致眼霜',
    label: '淡眼纹、塑眼廓、亮眼周',
    price: '￥300',
    capacity: '20ml',
    animationStart: true,
    path: "/product/1"
})

const productImg = toRef(props, 'productImg')
const productImgHover = toRef(props, 'productImgHover')
const title = toRef(props, 'title')
const label = toRef(props, 'label')
const price = toRef(props, 'price')
const capacity = toRef(props, 'capacity')
const animationStart = toRef(props, 'animationStart')
const path = toRef(props, 'path')

const changeImg = ref<boolean>(true)
function hoverImgContainer(status: boolean = false) {
    if (animationStart.value) {
        changeImg.value = status
    }
}

const router = useRouter()
const route = useRoute()
function goPushRouter() {
    if (path.value) router.push({
        path: `${route.path}${path.value}`
    })
}
</script>
    
<style lang="less" scoped>
.product-display {
    width: 100%;
    height: 100%;

    .container {
        width: 100%;
        height: 100%;
        cursor: pointer;

        .product-display-img {
            width: 100%;

            &-static {
                width: 100%;
                height: auto;
            }

            &-hover {
                width: 100%;
                height: auto;
            }
        }

        .product-display-content {
            position: relative;
            background-color: #ffffff;
            width: 100%;
            height: 128px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 22px;
            overflow: hidden;

            .title {
                font-size: 16px;
                line-height: 16px;
                height: 16px;
                color: #333;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .label {
                font-size: 12px;
                line-height: 12px;
                color: #666;
                margin-top: 12px;
            }

            .price {
                text-align: center;
                color: #12368a;
                font-family: Arial;
                font-size: 0;
                position: relative;
                margin-top: 19px;

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

            .button {
                position: absolute;
                left: 50%;
                bottom: 0;
                transition: transform .4s ease, opacity .4s ease;
                opacity: 0;
                transform: translate(-50%, 100%);
            }

            .action {
                opacity: 1;
                transform: translate(-50%, 0);
            }

            .static {
                position: static;
                opacity: 1;
                transform: translate(0, 0);
                margin-top: 10px;
            }
        }

        .no-animation {
            height: 158px;
        }
    }
}
</style>