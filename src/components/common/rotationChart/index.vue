<template>
    <div class="rotation-chart">
        <div class="container ">
            <n-carousel autoplay>
                <img v-for="(path, index) in carousel" :key="index" class="carousel-img" :src="path">
            </n-carousel>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toReactive } from '@vueuse/core';

interface Props {
    carousel?: Array<string>
}

const props = withDefaults(defineProps<Props>(), {
    carousel: () => []
})

const carousel = toReactive(props.carousel)
</script>
    
<style lang="less" scoped>
.rotation-chart {
    width: 100%;

    .container {
        width: 100%;

        .carousel-img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
}
</style>