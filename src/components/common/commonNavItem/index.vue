<template>
    <div class="common-nav-item" @click="commonNavitemClick">
        <div class="container" ref="container">
            <div class="in-body" @click="pathPush">
                <div class="title"
                    :class="[{ 'title-active': actived ? titleActived !== undefined ? titleActived : actived : false }]">
                    {{ baseTitle }}
                </div>
                <i class="decorate"
                    :class="[{ 'decorate-active': actived ? decorateActived !== undefined ? decorateActived : actived : false }]"></i>
            </div>
            <div class="out-body" ref="outBody"
                :class="[{ 'out-body-active': actived ? outBodyActived !== undefined ? outBodyActived : actived : false }]"
                :style="{ transform: `translateX(${-outBodyLeft}px)`, width: `${outBodyWidth}px` }">
                <slot></slot>
            </div>
            <div class="mark" v-if="actived ? outBodyActived !== undefined ? outBodyActived : actived : false"></div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
defineOptions({
    name: 'CommonNavItem'
})
import { onMounted, onUnmounted, ref, toRef } from 'vue';
import { commonNavItemProps } from '@/components/common/index'
import { useRouter } from 'vue-router'
import { useHomeStore } from '@/store';

//引入运行时类型定义声明
const props = defineProps(commonNavItemProps)

const baseTitle = toRef(props, 'baseTitle')
const actived = toRef(props, 'actived')
const titleActived = toRef(props, 'titleActived')
const decorateActived = toRef(props, 'decorateActived')
const outBodyActived = toRef(props, 'outBodyActived')
const path = toRef(props, 'path')

//emits
const emits = defineEmits(['click'])

/**
 * 传导节点点击事件（common-nav-item根节点）
 * 
 * @param e 
 */
function commonNavitemClick(e: MouseEvent) {
    emits('click', e)
}

//动态设置outBody定位信息，保证能够紧贴浏览器左侧
const container = ref<HTMLElement>()
const outBodyLeft = ref<number>(0)
const outBodyWidth = ref<number>(0)
function setOutBodyLeft() {
    if (container.value) {
        // 获取视口宽度
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        // 获取滚动条宽度
        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        // 计算并设置盒子的宽度
        outBodyWidth.value = viewportWidth - scrollbarWidth;
        outBodyLeft.value = container.value.getBoundingClientRect().left
    }
}
onMounted(() => {
    setOutBodyLeft()

    window.addEventListener('resize', setOutBodyLeft)
})
onUnmounted(() => {
    window.removeEventListener('resize', setOutBodyLeft)
})

//点击路由时的跳转
const router = useRouter()
const homeStore = useHomeStore()

function pathPush() {
    if (path.value) {
        homeStore.setTargetView(path.value)
        router.push({
            path: path.value
        })
    }
}
</script>
    
<style lang="less" scoped>
@title-color: #18368b;

.common-nav-item {
    .container {
        position: relative;

        .in-body {
            margin: 0 20px;
            padding: 24px 0;

            .title {
                font-size: 14px;
                padding: 0 10px;
                color: #000000;
                cursor: pointer;
            }

            .title-active {
                color: @title-color;
            }

            .decorate {
                position: absolute;
                width: 19px;
                height: 13px;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                background-image: url('../../../assets/img/header_icon1.png');
            }

            .decorate-active {
                opacity: 1;
            }

        }

        .out-body {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #f7f9fa;
            display: none;
            z-index: 1;
        }

        .out-body-active {
            display: block;
        }

        .mark {
            position: fixed;
            pointer-events: none;
            left: 0;
            top: 142px;
            width: 100%;
            height: calc(100% - 142px);
            z-index: -1;
            background-color: rgba(0, 0, 0, 0.3);;
        }

        @media (max-width: 1510px) {
            .in-body {

                margin: 0 15px;
            }
        }

        @media (max-width: 1200px) {
            .in-body {
                margin: 0 10px;
            }
        }
    }
}
</style>