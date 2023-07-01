<template>
    <div class="demo-search">
        <div class="container">
            <input class="input-text" v-model="text" type="text" placeholder="搜索">
            <div class="demo-search-icon" v-if="iconShow" @click="submit"></div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toRef, ref } from 'vue';

interface Props {
    iconShow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    iconShow: false
})

const iconShow = toRef(props, 'iconShow')

const emits = defineEmits(['submit'])

const text = ref<string>('')
function submit() {
    emits('submit', text.value)
}
</script>
    
<style lang="less" scoped>
.demo-search {
    width: 100%;
    height: 59px;

    .container {
        position: relative;
        width: 100%;
        height: 100%;

        .input-text {
            width: 100%;
            height: 100%;
            border-bottom: 1px solid #c4c4c4;
            padding: 0 70px;
            font-size: 24px;

            &:focus {
                outline: none;
            }
        }

        .demo-search-icon {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 50%;
            right: 0%;
            transform: translateY(-18%);
            background-image: url('../../../assets/img/search.png');
            background-size: auto;
            background-repeat: no-repeat;
            cursor: pointer;
        }
    }
}

@media (max-width: 1024px) {
    .demo-search {
        width: calc(100% - 30px) !important;
        height: 40px !important;

        .input-text {
            padding: 0 15px !important;
            font-size: 14px !important;
        }
    }
}

@media (max-width: 1366px) {
    .demo-search {
        width: calc(100% - 30px) !important;
        height: 50px !important;

        .input-text {
            padding: 0 30px !important;
        }
    }
}
</style>