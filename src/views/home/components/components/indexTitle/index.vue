<template>
    <div class="index-title">
        <div class="container">
            <div class="title">
                <div class="cn">{{ cn }}</div>
                <div class="ch">{{ ch }}</div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { toRef } from 'vue';

interface Props {
    cn: string | number,
    ch: string | number,
}

const props = withDefaults(defineProps<Props>(), {
    cn: '',
    ch: '',
})

const cn = toRef(props, 'cn')
const ch = toRef(props, 'ch')

</script>
    
<style lang="less" scoped>
.index-title {
    .container {
        .title {
            width: 100%;

            &>div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #18368b;
                font-size: 30px;
                line-height: 30px;
            }

            .cn {
                font-family: Arial;
            }

            .ch {
                margin-top: 13px;
            }

            @media (max-width: 1366px) {
                .cn {
                    font-size: 24px;
                    line-height: 24px;
                }

                .ch {
                    font-size: 24px;
                    line-height: 24px;
                }
            }

            @media (max-width: 1200px) {
                .cn {
                    font-size: 20px;
                    line-height: 20px;
                }

                .ch {
                    font-size: 20px;
                    line-height: 20px;
                }
            }

            @media (max-width: 768px) {
                .cn {
                    font-size: 18px;
                    line-height: 18px;
                }

                .ch {
                    font-size: 18px;
                    line-height: 18px;
                }
            }
        }
    }
}
</style>