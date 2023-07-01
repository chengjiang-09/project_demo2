<template>
    <div class="home-header" :class="[{ on: !titleShow }]">
        <div class="container">
            <div class="title" ref="title" v-if="titleShow">
                <router-link class="title-logo" to="/" tag="a">
                    <img class="title-logo-img" src="../../../assets/img/logo.png">
                </router-link>
                <div class="title-search" @click="changeEjectCard()">
                    <a href="javascript:;" class="title-search-a"></a>
                </div>
            </div>
            <div class="nav" :class="[{ on: !titleShow }]">
                <li v-for="(nav, index) in homeStore.titleNav" :key="index" @mouseenter="changeAction(index)"
                    @mouseleave="clearChange">
                    <common-nav-item :actived="nav.active" :path="nav.navItem.path" :base-title="nav.navItem.baseTitle"
                        :decorate-actived="nav.navItem.outBodyActived" :out-body-actived="nav.navItem.outBodyActived">
                        <common-nav-item-detil :left-items="nav.itemDatas.leftItems"
                            :right-items="nav.itemDatas.rightItems"></common-nav-item-detil>
                    </common-nav-item>
                </li>
                <router-link class="nav-logo" to="/" tag="a" v-show="!titleShow">
                    <img class="title-logo-img" src="../../../assets/img/logo.png">
                </router-link>
                <div class="nav-search" v-show="!titleShow" @click="changeEjectCard()">
                    <a href="javascript:;" class="title-search-a"></a>
                </div>
                <eject-card class="search-box" :action="appStore.searchOpend" close-size="18" :isfulling="false"
                    @close="changeEjectCard(false)">
                    <div class="card-box">
                        <div class="search">
                            <demo-search></demo-search>
                        </div>
                        <ul class="item">
                            <li v-for="num in 3" :key="num">
                                <dl class="item-one">
                                    <dt class="one">畅销</dt>
                                    <dd class="one-work" v-for="item in homeStore.listItem" :key="item.path">
                                        <div class="img">
                                            <img :src="item.imgPath" alt="">
                                        </div>
                                        <div class="content">
                                            <div>
                                                {{ item.content }}
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </eject-card>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted, computed } from 'vue';
import { useHomeStore, useAppStore } from '@/store'
import { watch } from 'vue';

//选择在haeder中处理头部按钮激活状态的改变
const homeStore = useHomeStore()

function changeAction(index) {
    const titleNav = homeStore.titleNav.map(obj => {
        obj.active = false
        return obj
    })
    titleNav[index].active = true

    homeStore.setTitleNav(titleNav)
}

function clearChange() {
    const titleNav = homeStore.titleNav.map(obj => {
        obj.active = false
        return obj
    })

    homeStore.setTitleNav(titleNav)
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

//appStore
const appStore = useAppStore()

function changeEjectCard(action?: boolean) {
    if (action !== undefined) {
        appStore.setSearchOpend(action)
    } else {
        appStore.setSearchOpend()
    }
}

watch(() => appStore.searchOpend, (newValue) => {
    if (newValue) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 添加平滑滚动效果
        });
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'auto'
    }
})
</script>
    
<style lang="less" scoped>
.home-header {
    background-color: #ffffff;
    width: 100%;
    height: 130px;

    .container {
        position: relative;
        width: 100%;
        height: 100%;

        .title {
            width: 100%;

            &-logo {
                position: relative;
                z-index: 999;
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
                z-index: 999;

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

            &>li {
                position: relative;
                z-index: 5;
            }

            &-logo {
                position: absolute;
                z-index: 5;
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
                z-index: 5;
                width: 18px;
                height: 18px;
                top: 28px;
                right: 4.4%;

                &-a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-image: url('../../../assets/img/search.png');
                }
            }

            .search-box {
                z-index: 1;

                .card-box {
                    width: 89%;
                    height: calc(100% - 240px);
                    margin: 120px auto 0;
                    overflow-y: hidden;

                    .search {
                        width: 90%;
                        margin: 0 auto;
                    }

                    .item {
                        width: 88%;
                        margin: 45px auto 0;
                        height: 100vh;
                        display: flex;
                        justify-content: space-evenly;

                        li {
                            width: 21%;
                            height: 100%;

                            .item-one {
                                width: 100%;
                                height: 100%;

                                .one {
                                    width: 100%;
                                }

                                dt {
                                    width: calc(100% - 116px);
                                    padding-left: 20px;
                                    font-size: 14px;
                                    line-height: 36px;
                                    color: #999;
                                    margin: 0 auto 10px;
                                }

                                .one-work {
                                    width: 100%;
                                    margin-bottom: 10px;
                                    background-color: #f7fbfc;
                                    cursor: pointer;

                                    .img {
                                        display: inline-block;
                                        width: 64px;
                                        height: 64px;
                                        vertical-align: bottom;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }

                                    .content {
                                        display: inline-block;
                                        width: calc(100% - 64px);
                                        height: 64px;

                                        &>div {
                                            display: flex;
                                            align-items: center;
                                            width: 100%;
                                            height: 100%;
                                            padding: 0 4px 0 4px;
                                            font-size: 14px;
                                            color: #666;
                                        }
                                    }

                                    @media (max-width: 1366px) {
                                        &>.img {
                                            width: 50px;
                                            height: 50px;
                                        }

                                        &>.content {
                                            height: 50px;
                                        }
                                    }

                                }
                            }

                        }

                        @media (max-width: 1366px) {
                            &>li {
                                width: 28%;
                            }
                        }
                    }
                }
            }
        }

        .on {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 999;
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