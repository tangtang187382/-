<template>
        <ul class="my-header-nav">
            <li class="item">
                <router-link class="link" to="/">首页</router-link>
            </li>
            <li class="item" v-for="item in list" :key="item.id" 
            @mouseenter="show(item)"
            @mouseleave="hide(item)">
                <router-link class="link" :to="'/category/'+item.id" @click="hide(item)">{{ item.name }}</router-link>
                <!--弹出层-->
                <div class="layer" :class="{active:item.open}">
                    <ul>
                        <li v-for="ele in item.subCateGroupList" :key="ele.id">
                            <a href="#">
                                <img :src="ele.categoryList[0].bannerUrl" >
                            </a>
                            <div>{{ ele.name }}</div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
</template>

<script>
import { computed } from 'vue';
import {useStore} from 'vuex';
export default {
    setup(){
        const store = useStore();
        //仓库读取列表
        const list = computed(()=>{
            return store.state.category.catelist
        });
        const show = (item)=>{
            item.open = true;
        };        
        const hide = (item)=>{
            item.open = false;
        };
        
        return {list,show,hide}
        //使用computed实现响应式数据，同时减少性能开销
    }
}
</script>

<style lang="less" scoped>
.my-header-nav{
    position: relative;
    z-index:999;
    .item{
        float: left;
        padding: 0 10px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        .router-link-exact-active{
            color: @xtxColor;
            border-bottom: 2px solid @xtxColor;
        }
        .link{
            padding-bottom: 10px;
            white-space: nowrap; /* 防止文字换行 */
        }
        &:hover{
            .link{
                color: @xtxColor;
                border-bottom: 2px solid @xtxColor;

            }
            .layer{
                opacity: 0;
                height: 150px;
            }
            .active{
                opacity: 1;
            }
        }
    }
}
.layer{
    box-shadow: 0 0 5px #ccc;
    position: absolute;
    left: 0;
    top: 40px;
    width: 1000px;
    height: 0px;
    opacity: 0;
    border: 1px solid #ccc;
    background-color: #fff;
    overflow: hidden;
    transition: all 0.5s;
    ul{
        display: flex;
        width: 150px;
        margin: 0;
        padding: 0;
        li{
            height: 100px;
            a{
                border-bottom: 0;
                font-size: 15px;
            }
            img{
                width: 90px;
                height: 90px;
            }
            div{
                text-align: center;
            }
            &:hover{
                background-color: #ccc;
            }
        }
    }
}
//二级导航

</style>