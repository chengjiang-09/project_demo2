<template>
    <div class="body-main">
        <div class="container">
            <index-title cn="RECOMMEND SERIES" ch="主推产品"></index-title>
            <div class="main">
                <ul class="img-box">
                    <li class="img-box-img" v-for="img in imgs" :key="img">
                        <img :src="img" alt="">
                    </li>
                </ul>
            </div>
            <div class="main mini">
                <ul class="img-box">
                    <li class="img-box-img" v-for="img in imgs2" :key="img">
                        <img :src="img" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toReactive } from '@vueuse/core';
import IndexTitle from '../components/indexTitle/index.vue'
import { getAssetsFile } from '@/utils'

interface Props {
    imgs?: Array<string>
    imgs2?: Array<string>
}

const props = withDefaults(defineProps<Props>(), {
    imgs() {
        return [
            getAssetsFile('project/main/20210402134256104.png'),
            getAssetsFile('project/main/index_pic8.jpg')
        ]
    },
    imgs2() {
        return [
            getAssetsFile('project/main/20210402134320640.png'),
            getAssetsFile('project/main/m16.jpg')
        ]
    }
})

const imgs = toReactive(props.imgs)
const imgs2 = toReactive(props.imgs2)
</script>
    
<style lang="less" scoped>
.body-main {
    width: 96%;
    height: auto;
    margin: 0 auto;
    padding-top: 6.2%;
    padding-bottom: 3.1%;

    .container {
        width: 100%;

        .main {
            width: 100%;

            .img-box {
                width: 100%;

                .img-box-img {
                    width: 100%;
                    margin-top: 50px;

                    &>img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        .mini {
            display: none;

            .img-box-img {
                width: 100%;

                &>img {
                    width: 100%;
                    height: auto;
                }

                &>img:last-child {
                    width: 100%;
                    height: 80%;
                }
            }
        }

        @media (max-width: 768px) {
            .main {
                display: none;
            }

            .mini {
                display: block;
            }

        }
    }
}
</style>