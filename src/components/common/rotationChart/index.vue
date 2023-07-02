<template>
    <div class="rotation-chart">
        <div class="container ">
            <open-star v-if="mark"></open-star>
            <n-carousel autoplay>
                <img v-for="(path, index) in carousel" :key="index" class="carousel-img" :src="path">
            </n-carousel>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toReactive } from '@vueuse/core';

interface Props {
    carousel?: Array<string>,
    mark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    carousel: () => [],
    mark:false
})

const carousel = toReactive(props.carousel)
</script>
    
<style lang="less" scoped>
.rotation-chart {
    width: 100%;

    .container {
        width: 100%;
        position: relative;
        overflow: hidden;

        .carousel-img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
}
</style>