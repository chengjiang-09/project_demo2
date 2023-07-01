<template>
    <div class="eject-card"
        :class="[{ action: action && isfulling, common: action && !isfulling, 'animation-init': !isfulling }]">
        <div class="container">
            <i class="close" @click="close" v-if="closeShow"
                :style="[{ height: `${closeSize}px`, width: `${closeSize}px` }]"></i>
            <slot></slot>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toRef } from 'vue';

interface Props {
    action?: boolean,
    closeShow?: boolean,
    closeSize?: string,
    isfulling?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    action: false,
    closeShow: true,
    closeSize: '27',
    isfulling: true
})
const action = toRef(props, 'action')
const closeShow = toRef(props, 'closeShow')
const closeSize = toRef(props, 'closeSize')
const isfulling = toRef(props, 'isfulling')

//关闭
const emits = defineEmits(['close'])
function close() {
    emits('close')
}
</script>
    
<style lang="less" scoped>
@animation1: cubic-bezier(0.4, 0, 0.2, 1);
.eject-card {
    position: absolute;
    left: 0;
    top: 0;
    height: 0vh;
    width: 100%;
    transition: height .5s;
    z-index: 999;
    overflow: hidden;
    background-color: #ffffff;

    .container {
        position: relative;
        height: 100%;
        width: 100%;

        .close {
            width: 27px;
            height: 27px;
            position: absolute;
            z-index: 1002;
            top: 16px;
            right: 8.3%;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url('../../../assets/img/mClose.png');
            cursor: pointer;
        }
    }
}

.action {
    height: 100vh;
}

.common {
    transform: translateY(0) !important;
    opacity: 1 !important;
    pointer-events: initial !important;
}

.animation-init {
    height: auto;
    transition: transform 1s @animation1, opacity 1s @animation1;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
}
</style>