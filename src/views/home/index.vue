<template>
    <div id="homeVue">
        <div class="container">
            <home-header></home-header>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import homeHeader from '@/layouts/home/homeHeader/index.vue';
</script>
    
<style lang="less" scoped>
#homeVue {
    width: 100%;
    .container {
        width: 100%;
        height: 200vh;
    }
}
</style>