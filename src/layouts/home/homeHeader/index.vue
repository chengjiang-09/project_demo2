<template>
    <div class="home-header" :class="[{ on: !titleShow }]">
        <div class="container">
            <div class="title" ref="title" v-if="titleShow">
                <router-link class="title-logo" to="/" tag="a">
                    <img class="title-logo-img" src="../../../assets/img/logo.png">
                </router-link>
                <div class="title-search">
                    <a href="javascript:;" class="title-search-a"></a>
                </div>
            </div>
            <div class="nav" :class="[{ on: !titleShow }]">
                <li v-for="(obj, index) in a" :key="index" @mouseenter="changeAction(index)" @mouseleave="clearChange">
                    <common-nav-item :actived="obj.active"></common-nav-item>
                </li>
                <router-link class="nav-logo" to="/" tag="a" v-show="!titleShow">
                    <img class="title-logo-img" src="../../../assets/img/logo.png">
                </router-link>
                <div class="nav-search" v-show="!titleShow">
                    <a href="javascript:;" class="title-search-a"></a>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted, computed, reactive } from 'vue';

let a = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
    { active: false }
]

a = reactive(a)

function changeAction(index){
    a.forEach(obj => {
        obj.active = false
    })
    a[index].active = true
}

function clearChange(){
    a.forEach(obj => {
        obj.active = false
    })
}

//获取滚动距离修改图片显示
const scrollDistance = ref<number>(0)
const title = ref<HTMLElement>()
const titleShow = computed(() => scrollDistance.value <= (title.value ? title.value?.getBoundingClientRect().height : 0))

onMounted(() => {
    window.addEventListener('scroll', function () {
        scrollDistance.value = window.scrollY;
    });
})
</script>
    
<style lang="less" scoped>
.home-header {
    background-color: #ffffff;
    width: 100%;
    height: 130px;

    .container {
        width: 100%;
        height: 100%;

        .title {
            width: 100%;
            position: relative;

            &-logo {
                display: block;
                width: 100px;
                height: 100%;
                padding-top: 12px;
                margin: 0 auto;

                &-img {
                    width: 100%;
                    height: 100%;
                }
            }

            &-search {
                width: 18px;
                height: 18px;
                position: absolute;
                top: 28px;
                right: 4.4%;

                &-a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-image: url('../../../assets//img/search.png');
                }
            }
        }

        .nav {
            position: relative;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;

            &-logo {
                position: absolute;
                left: 4.4%;
                top: 0;
                display: block;
                width: 100px;
                height: 100%;
                padding-top: 12px;

                &-img {
                    width: 100%;
                    height: 100%;
                }
            }

            &-search {
                position: absolute;
                width: 18px;
                height: 18px;
                top: 28px;
                right: 4.4%;

                &-a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-image: url('../../../assets//img/search.png');
                }
            }
        }

        .on {
            position: fixed;
            left: 0;
            top: 0;
        }
    }
}

.on {
    background-color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 1024px) {
    .home-header {
        display: none;
    }
}
</style>