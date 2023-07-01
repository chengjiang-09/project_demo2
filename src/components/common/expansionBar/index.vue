<template>
    <div class="expansion-bar">
        <div class="container">
            <div class="title" :style="{ height: `${height}px` }">
                <div class="title-text" :style="{ fontSize: `${fontSizeMain}px` }">{{ title }}</div>
                <div class="title-click" :class="[{ on: action }]" @click="changeStatus"
                    v-if="(!path || detils.length > 0)"></div>
            </div>
            <div class="detil" v-if="!path" :style="[{ height: `${newHeight}px` }]">
                <div class="detil-text" ref="detilText">
                    <div v-for="(detil, index) in detils" :key="index"
                        :style="[{ fontSize: `${fontSizeDetil}px`, height: `${height}px`, lineHeight: `${height}px` }]">{{
                            detil.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { expansionBarProps } from '@/components/common/index'
import { ref, toRef, watch } from 'vue';

const props = defineProps(expansionBarProps)
const title = toRef(props, 'title')
const fontSizeMain = toRef(props, 'fontSizeMain')
const fontSizeDetil = toRef(props, 'fontSizeDetil')
const path = toRef(props, 'path')
const detils = toRef(props, 'detils')
const height = toRef(props, 'height')
const action = toRef(props, 'action')
const id = toRef(props, 'id')


const emits = defineEmits(['changeStatus'])
function changeStatus() {
    emits('changeStatus', {
        action: !action.value,
        id: id.value ? id.value : title.value
    })
}

const newHeight = ref(0)
const detilText = ref<HTMLElement>()
watch(() => action.value, (newVelue) => {
    if (newVelue) {
        if (detilText.value) {
            newHeight.value = detilText.value.getBoundingClientRect().height
        }
    } else {
        newHeight.value = 0
    }
})
</script>
    
<style lang="less" scoped>
.expansion-bar {
    width: 100%;

    .container {
        width: 100%;

        .title {
            position: relative;
            width: 100%;

            &-text {
                position: absolute;
                top: 50%;
                left: 2.3%;
                transform: translateY(-50%);
                cursor: pointer;
            }

            &-click {
                position: absolute;
                top: 50%;
                right: 1.3%;
                transform: translateY(-50%);
                height: 100%;
                width: 21px;
                background-image: url('../../../assets/img/nav_icon1.png');
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
            }

            .on {
                background-image: url('../../../assets/img/nav_icon1_h.png');
            }
        }

        .detil {
            width: 100%;
            padding-left: 40px;
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease;

            &-text {
                width: 100%;

                &>div {
                    color: #333;
                    width: 100%;
                }
            }
        }
    }
}
</style>