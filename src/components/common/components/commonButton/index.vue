<template>
    <div class="common-button">
        <div class="container">
            <a href="javascript:;" @click="clickRouterPush" class="button">
                <div class="text">
                    {{ title }}
                </div>
            </a>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toRef } from 'vue';
import { useRouter } from 'vue-router'

interface Props {
    title?: string,
    path?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '查看更多',
    path: ''
})

const title = toRef(props, "title")
const path = toRef(props, 'path')

const router = useRouter()
function clickRouterPush() {
    if (path.value !== '') {
        router.push({
            path: path.value
        })
    }
}
</script>
    
<style lang="less" scoped>
.common-button {
    .container {
        .button {
            width: 180px;
            height: 46px;
            display: block;
            text-align: center;
            border-radius: 23rem;
            background-color: #12368a;

            .text {
                position: relative;
                font-size: 14px;
                line-height: 46px;
                color: #fff;

                &::before {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 50%;
                    width: 14px;
                    height: 14px;
                    transform: translate(-250%, -40%);
                    background-image: url('../../../../assets/img/icon1.png');
                    background-size: auto;
                    background-repeat: no-repeat;
                }
            }
        }
    }
}
</style>