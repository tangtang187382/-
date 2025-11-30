<template>
    <div class="w category">
        <HomeBanner :slides="banner"/>
        <!--分类展示-->
        <div class="sub-list">
            <h3>全部分类</h3>
            <ul>
                <li v-for="item in category.subCateList" :key="item.id">
                    <a href="##">
                        <img :src="item.bannerUrl" alt="">
                        <div class="name">{{ item.name }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HomeBanner from '@/components/library/HomeBanner.vue';
import {computed, ref} from 'vue';
import { getBanner } from '@/api';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
components:{
    HomeBanner,
},
setup(){
    //获取仓库和路由对象
    const store = useStore();
    const route = useRoute();
    const category = computed(()=>{
        let cate = {};
        //查找id相等的分类
        cate = store.state.category.catelist.find(item=>{
            return item.id == route.params.id;
        });
        return cate;
    })
    //轮播图
    const banner=ref([]);
    getBanner().then(res=>{
        if(res.msg=='操作成功'){
            banner.value = res.result;
        }
    }).catch(err=>{
        return{err}
    })
    return {banner,category};
}
}
</script>

<style lang="less" scoped>
.category{
    .sub-list{
        h3{
            font-size: 32px;
            text-align: center;
            font-weight: normal;
            line-height: 100px;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 140px;
                height: 160px;
                text-align: center;
                &:hover{
                    .name{
                        color: @xtxColor;
                    }
                }
                img{
                    width: 100px;
                    height: 100px;
                    margin: 5px 0;
                }
            }
        }
    }
}
</style>