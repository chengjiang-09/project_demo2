<template>
    <div class="float-fish">
        <div class="container image-container" @mouseenter="changeAnimaitionStartStatus(true)"
            @mouseleave="changeAnimaitionStartStatus(false)">
            <ul class="water-box">
                <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <filter id="water-filter">
                        <feTurbulence type="fractalNoise" baseFrequency=".005 .005" numOctaves="1" result="noise1">
                        </feTurbulence>
                        <feColorMatrix in="noise1" type="hueRotate" values="0" result="noise2">
                            <animate attributeName="values" from="0" to="360" dur="1s" repeatCount="indefinite">
                            </animate>
                        </feColorMatrix>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic"
                            in2="noise2">
                        </feDisplacementMap>
                    </filter>
                </svg>
                <li class="fish" v-for="(fish, index) in fishs" :key="fish"
                    :class="[{ [`animation${index}`]: animaitionStart }]">
                    <img ref="fishImg" :src="fish" alt="" :style="{ filter: 'url(#water-filter)' }">
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { getAssetsFile } from '@/utils'
import { ref } from 'vue';

let fishs = [
    getAssetsFile("yu/topYu1.png"),
    getAssetsFile("yu/topYu2.png"),
    getAssetsFile("yu/topYu3.png"),
    getAssetsFile("yu/topYu4.png"),
]

const animaitionStart = ref(false)

function changeAnimaitionStartStatus(status: boolean) {
    animaitionStart.value = status
}
</script>
    
<style lang="less" scoped>
.float-fish {
    width: 100%;
    height: 100%;

    .container {
        height: 100%;
        width: 100%;

        .water-box {
            height: 100%;
            width: 100%;
            position: relative;

            .fish {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                transition: transform 1s;
                transform: translateY(0);
            }

            .animation1 {
                transform: translate(80px,80px);
            }

            .animation4 {
                transform: translate(40px,40px);
            }

            .animation3 {
                transform: translate(-40px,-40px);
            }

            .animation2 {
                transform: translate(-80px,-80px);
            }
        }
    }
}
</style>