<template>
    <div class="index-mini">
        <div class="container">
            <div class="index-container">
                <div class="body-index-center">
                    <product-display class="product" v-for="num in 2" :key="num" :animationStart="false"
                        :productImg="getAssetsFile('project/mini/2022030717551511.jpg')"></product-display>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { getAssetsFile } from '@/utils'
</script>
    
<style lang="less" scoped>
.index-mini {
    width: 100%;
    display: none;

    .container {
        width: 100%;

        .index-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 40px auto 0;

            &>div {
                display: flex;
                flex-direction: column;
                margin: 0 5px;
            }

            &>div:nth-child(2) {
                display: flex;
                flex-direction: column;
                margin: 8.7% 10px 0;
            }

            .body-index-center {
                .product {
                    margin-bottom: 30px;
                }
            }
        }
    }
}
</style>