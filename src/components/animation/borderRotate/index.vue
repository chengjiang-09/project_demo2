<template>
    <div class="border-rotate" :class="[{ 'border-rotate-external-adaptation': externalAdaptation }]"
        @mouseenter="animationStart" @mouseleave="animationReLoad">
        <div class="container" :class="[{ 'container-external-adaptation': externalAdaptation }]">
            <img class="main-img" :class="[{ 'main-img-external-adaptation': externalAdaptation }]" :src="img" alt="">
            <img class="border-img"
                :class="[{ 'animation-start': start }, { 'border-img-external-adaptation': externalAdaptation }]"
                :src="borderImg" alt="">
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { getAssetsFile } from '@/utils'
import { toRef, ref } from 'vue';

interface Props {
    borderImg?: string,
    img?: string,
    animationStatus?: boolean,
    //外部自适应，开启的话，borderRotate将依赖父组件的宽高
    externalAdaptation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    borderImg: getAssetsFile('1515.png'),
    img: getAssetsFile('20210401095418241.png'),
    animationStatus: true,
    externalAdaptation: false
})

const borderImg = toRef(props, 'borderImg')
const img = toRef(props, 'img')
const animationStatus = toRef(props, 'animationStatus')
const externalAdaptation = toRef(props, 'externalAdaptation')

//动画开启
const start = ref<boolean>(false)
function animationStart() {
    if (animationStatus.value) {
        start.value = true
    }
}

function animationReLoad() {
    if (animationStatus.value) {
        start.value = false
    }
}
</script>
    
<style lang="less" scoped>
.border-rotate {
    display: inline-block;

    .container {
        position: relative;

        .border-img {
            position: absolute;
            left: 0;
            top: 0;
            transform: rotate(0deg);
            transition: transform .5s ease;
        }

        .animation-start {
            transform: rotate(180deg);
        }
    }
}

.border-rotate-external-adaptation {
    display: block;
    width: 100%;
    height: 100%;

    .container-external-adaptation {
        width: 100%;
        height: 100%;

        .main-img-external-adaptation {
            width: 100%;
            height: 100%;
        }

        .border-img-external-adaptation {
            width: 100%;
            height: 100%;
        }
    }
}
</style>