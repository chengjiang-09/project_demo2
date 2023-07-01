<template>
    <div id="homeVue">
        <div class="container">
            <header>
                <home-header></home-header>
                <home-header-m></home-header-m>
            </header>
            <rotation-chart :carousel="homeStore.carousel"></rotation-chart>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import homeHeader from '@/layouts/home/homeHeader/index.vue';
import homeHeaderM from '@/layouts/home/homeHeaderM/index.vue'
import { useHomeStore } from '@/store'

const homeStore = useHomeStore()

</script>
    
<style lang="less" scoped>
#homeVue {
    width: 100%;

    .container {
        width: 100%;
        height: 200vh;
        background-color: #666;

        header {
            width: 100%;
        }
    }
}
</style>