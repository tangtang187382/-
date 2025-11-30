<template>
    <div class="my-header w">
        <div class="header-top">
            <h1 class="logo">
                <router-link to="/">雷鸟惊雷</router-link>
            </h1>
            <!--搜索-->
            <div class="center">
                <div class="center-search">
                    <input type="" name="" value="" placeholder="618......">
                    <button class="search-btn">搜索</button>
                </div>
                <ul class="center-navs">
                    <li><a href="">美食</a></li>
                    <li><a href="">餐厨</a></li>
                    <li><a href="">艺术</a></li>
                    <li><a href="">电器</a></li>
                    <li><a href="">居家</a></li>
                    <li><a href="">数码产品</a></li>
                    <li><a id="last-li" href="">办公硬件</a></li>
                </ul>
            </div>
            <div class="cart">
                <a href="">
                    <img src="@/assets/images/gouwuche.png" alt="购物车"/><span style="font-size: 16px;">购物车</span>
                    <em>2</em>
               </a>
            </div>
        </div>
        <AppHeaderNav />
    </div>
</template>

<script>
import { useStore } from 'vuex';
import AppHeaderNav from './AppHeaderNav.vue';
export default {
    components:{
        AppHeaderNav
    },
    setup(){
        const store = useStore();
        //触发action
        store.dispatch('category/getAllCategory')
    }
}

</script>
<style lang='less' scoped>
.my-header{
    height: 120px;
    padding: 25px 0 0 0 ;
    background-color: #fff;
    .header-top{
        display: flex;
        .logo{
            width: 230px;
            height: 60px;
            a{
                display: inline-block;
                height: 60px;
                width: 100%;
                background: url('../assets/images/heiniao.png') no-repeat center;
                background-size: 50px 50px;
            }
        }
        .center{
            flex: 1;
            .center-search{
                width: 540px;
                height: 35px;
                input{
                    width: 440px;
                    height: 35px;
                    box-sizing: border-box;
                    border: 1px solid @xtxColor;
                    border-radius: 20px 0 0 20px;
                    padding-left: 15px;
                }
                .search-btn{
                    width: 100px;
                    float: right;
                    height: 35px;
                    background-color: @xtxColor;
                    border-radius: 0 20px 20px 0;
                    border: 0;
                    font-size: 16px;
                    cursor: pointer;
                }
            }
            .center-navs{
                width: 540px;
                li{
                    float: left;
                    padding: 5px;
                    height: 32px;
                    a{
                        padding: 0 5px;
                        border-right: 1px solid #ccc;
                        &:hover{
                            color: @xtxColor;
                        }
                    }
                }
                }
            }
        .cart{
            width: 150px;
            height: 35px;
            line-height: 32px;
            border-radius: 20px;
            border: 1px solid @xtxColor;
            font-size: 16px;
            text-align: center;
            box-sizing: border-box;
            img{
                width: 24px; // 固定图标宽度（根据实际图标大小调整）
                height: 24px; // 固定图标高度，避免变形
                margin-right: 6px; // 图标与文字间距
                object-fit: contain; // 保持图标比例，避免拉伸
            }
            a{
                display: inline-flex;
                align-items: center;

            }
            em{
                background-color: red;
                border-radius: 50%;
                padding: 2px 2px;
                font-size: 10px;
                height: 12px;
                line-height: 10px;
                color:#fff;
                display: inline-block;
                width: 12px;
            }

        }
    }
}
#last-li{
    border: 0;
}

</style>
