<template>
    <div class="home-header-m">
        <div class="container">
            <div class="item" @click="changeEjectCard"></div>
            <router-link class="logo" to="/" tag="a">
                <img src="../../../assets/img/logo.png" alt="">
            </router-link>
            <div class="search" @click="changeSearchEjectCard()" v-if="!appStore.searchOpend"></div>
            <eject-card class="nav-sider" :action="action" @close="changeEjectCard">
                <ul class="card">
                    <li class="card-item" v-for="(nav, index) in homeStore.titleNavM" :key="index">
                        <expansion-bar @change-status="changeAction" :title="nav.navItem.title" :path="nav.navItem.path"
                            :action="nav.active" :detils="nav.navItem.detils" :id="nav.navItem.id"></expansion-bar>
                    </li>
                </ul>
            </eject-card>
            <eject-card class="m-search-box" :action="appStore.searchOpend" close-size="18" :isfulling="false"
                @close="changeSearchEjectCard(false)">
                <div class="m-card-box">
                    <div class="m-search">
                        <demo-search :icon-show="appStore.searchOpend"></demo-search>
                    </div>
                    <ul class="m-item">
                        <li v-for="num in 1" :key="num">
                            <dl class="m-item-one">
                                <dt class="m-one">畅销</dt>
                                <dd class="m-one-work" v-for="item in homeStore.listItem" :key="item.path">
                                    <div class="m-img">
                                        <img :src="item.imgPath" alt="">
                                    </div>
                                    <div class="m-content">
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
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
import { useHomeStore, useAppStore } from '@/store'

//选择在haeder中处理头部按钮激活状态的改变
const homeStore = useHomeStore()

const action = ref(false)

function changeEjectCard() {
    action.value = !action.value
}

function changeAction({ action, id }) {
    const titleNavM = homeStore.titleNavM.map(obj => {
        if (obj.navItem.id && obj.navItem.id === id || (!obj.navItem.id && obj.navItem.title === id)) {
            obj.active = action
        } else {
            obj.active = false
        }
        return obj
    })

    homeStore.setTitleNavM(titleNavM)
}

//appStore
const appStore = useAppStore()

function changeSearchEjectCard(action?: boolean) {
    if (action !== undefined) {
        appStore.setSearchOpend(action)
    } else {
        appStore.setSearchOpend()
    }
}

</script>
    
<style lang="less" scoped>
.home-header-m {
    display: none;
    width: 100%;
    height: 80px;

    .container {
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: #ffffff;

        &>.item {
            position: absolute;
            width: 38px;
            height: 28px;
            top: 26px;
            left: 5.3%;
            z-index: 1000;
            background-image: url('../../../assets//img/navClick.png');
            background-repeat: no-repeat;
            cursor: pointer;
        }

        .logo {
            position: absolute;
            width: 102px;
            height: auto;
            z-index: 1100;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &>.search {
            position: absolute;
            width: 31px;
            height: 34px;
            top: 26px;
            z-index: 1000;
            right: 5.3%;
            background-image: url('../../../assets//img/searchM.png');
            background-repeat: no-repeat;
            cursor: pointer;
        }

        .nav-sider {
            z-index: 1001;

            .card {
                width: 89%;
                height: calc(100% - 120px);
                margin: 0 auto;
                overflow-y: auto;

                &::-webkit-scrollbar {
                    width: 1px;
                    /* 设置滚动条的宽度 */
                }

                &-item {
                    width: 100%;
                    color: #333;
                    display: block;
                    border-bottom: 1px solid #d2d2d2;
                }
            }
        }

        .m-search-box {
            .m-card-box {
                width: 100%;
                height: calc(100% - 120px);
                margin: 60px auto 0;
                overflow-y: auto;

                &>.m-search {
                    width: 90%;
                    margin: 0 auto;
                }

                &>.m-item {
                    width: 88%;
                    margin: 10px auto 0;
                    height: 100vh;
                    display: flex;
                    justify-content: space-evenly;

                    li {
                        width: 100%;
                        height: 100%;

                        .m-item-one {
                            width: 100%;
                            height: 100%;

                            .m-one {
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

                            .m-one-work {
                                width: 100%;
                                margin-bottom: 10px;
                                background-color: #f7fbfc;
                                cursor: pointer;

                                .m-img {
                                    display: inline-block;
                                    width: 50px;
                                    height: 50px;
                                    vertical-align: bottom;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .m-content {
                                    display: inline-block;
                                    width: calc(100% - 50px);
                                    height: 50px;

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

                            }
                        }

                    }
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .home-header-m {
        display: block;
    }
}

@media (max-width: 768px) {
    .home-header-m {
        display: block;
        height: 60px;

        .container {
            height: 60px;

            .item {
                width: 26px;
                height: 20px;
                top: 20px;
                background-size: 100% auto;
            }

            .logo {
                width: 70px;
            }

            .search {
                width: 24px;
                height: 28px;
                top: 16px;
                background-size: 100% auto;
            }
        }
    }
}
</style>