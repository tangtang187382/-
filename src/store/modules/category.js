import getCategoryList from "@/api/index"
import {topCategory} from '@/utils/constants.js'
export default {
    namespaced:true,
    state:()=>{
            return {
                catelist:topCategory,//默认值，临时显示
            }
        },
    mutations:{
        setList(state,payload){
            state.catelist = payload
        }
    },
    actions:{
        //请求后台
        async getAllCategory({commit}){
        try {
            const res = await getCategoryList();
            if(res.code==200){
                commit('setList',res.data.cateList)
                //解构上下文对象
            }
        }catch(error){
            return {error}
        }}
        
    },
    getters:{

    }
}