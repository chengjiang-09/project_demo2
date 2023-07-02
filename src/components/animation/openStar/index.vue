<template>
    <div class="open-star">
        <div class="container">
            <div class="open-star-main" :class="[{ start: start }]">
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted, nextTick } from 'vue'
const start = ref<boolean>()

onMounted(() => {
    nextTick(() => {
        start.value = true
    })
})
</script>
    
<style lang="less" scoped>
.open-star {
    pointer-events: none;

    .container {

        .open-star-main {
            position: absolute;
            z-index: 4;
            width: 2500px;
            height: 1130px;
            left: 0;
            bottom: 0;
            background-image: url('../../../assets/img/15.png');
            background-repeat: no-repeat;
            background-size: 100%;
            opacity: 0;
        }

        .start {
            animation: move 1.5s linear;
        }

        @keyframes move {
            0% {
                opacity: 1;
                left: -50%;
                transform: scale(1);
            }

            25% {
                transform: scale(1.6);
                bottom: 30%;
                left: 40%;
                opacity: 1;
            }

            100% {
                transform: scale(2);
                bottom: 10%;
                left: 180%;
                opacity: 1;
                display: none;
            }
        }
    }
}
</style>