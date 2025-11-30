<template>
    <div>
        <HomeBanner :slides='list.length>0 ? list :defaultlist'/>
    </div>
</template>

<script>
import { getBanner } from '@/api';
import {ref} from 'vue'
import HomeBanner from './library/HomeBanner.vue';
export default {
    setup(){
        const defaultlist=ref([{
      "id": "20",
      "imgUrl": "https://gw.alicdn.com/bao/uploaded/i1/2209761618122/O1CN01VcHw4B29rvx4MtuJ8_!!2209761618122.jpg_.webp",
      "hrefUrl": "/category/1002000",
      "type": "1"
    },])
        const list=ref([]);//响应式数据
        getBanner().then(res=>{
            if(res.msg=="操作成功"){
                list.value = res.result;
                //ref所以list.value                        
            }
        }).catch(e =>{
            return {e}
        })
        return {list,defaultlist}
    },
    components:{HomeBanner}
}
</script>

<style lang="less" scoped>

</style>