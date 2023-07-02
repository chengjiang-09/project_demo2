<template>
    <div class="index-main">
        <div class="container">
            <div class="index-container">
                <div class="body-index-left">
                    <product-display></product-display>
                    <product-display></product-display>
                </div>
                <div class="body-index-center">
                    <product-display></product-display>
                    <product-display></product-display>
                </div>
                <div class="body-index-right">
                    <product-display></product-display>
                    <product-display></product-display>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

</script>

<style lang="less" scoped>
.index-main {
    width: 100%;
    .container {
        width: 100%;

        .index-container {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 40px auto 0;

            &>div {
                position: relative;
                z-index: 2;
                display: flex;
                flex-direction: column;
                margin: 0 5px;
            }

            &>div:nth-child(2) {
                display: flex;
                flex-direction: column;
                margin: 8.7% 10px 0;
            }
        }
    }
}
</style>