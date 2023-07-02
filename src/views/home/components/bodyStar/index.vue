<template>
    <div class="body-star">
        <div class="container">
            <index-title cn="STAR PRODUCTS" ch="明星产品"></index-title>
            <div class="main">
                <star-product v-for="num in 3" :key="num" :reseverse="num === 2 || num === 4"></star-product>
            </div>
            <div class="mini">
                <star-product-m v-for="num in 2" :key="num"></star-product-m>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import IndexTitle from '../components/indexTitle/index.vue'
import StarProduct from './components/starProduct/index.vue'
import StarProductM from './components/starProductM/index.vue'
</script>
    
<style lang="less" scoped>
.body-star {
    width: 100%;
    height: auto;
    margin: 0 auto;
    max-width: 100%;
    padding-top: 6.2%;
    padding-bottom: 3.1%;
    background-color: #f7fbfc;

    .mini {
        display: none;
    }

    .container {
        @media (max-width: 768px) {
            .main {
                display: none;
            }

            .mini {
                display: block;
            }
        }
    }
}
</style>