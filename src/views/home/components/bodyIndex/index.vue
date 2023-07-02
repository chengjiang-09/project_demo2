<template>
    <div class="body-index">
        <div class="container">
            <index-title cn="NEW RECOMMEND" ch="新品推荐"></index-title>
            <index-main class="main"></index-main>
            <index-mini class="mini"></index-mini>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import IndexMain from './components/indexMain/index.vue'
import IndexMini from './components/indexMini/index.vue'
import IndexTitle from '../components/indexTitle/index.vue'
</script>
    
<style lang="less">
.body-index {
    width: 90%;
    height: auto;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 6.2%;
    padding-bottom: 3.1%;

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