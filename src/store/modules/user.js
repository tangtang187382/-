export default {
    namespaced:true,
    state:()=>{
            return {
                userinfo:{
                token:'d8k3nf0s',
                username:'汤了个汤',
            }
        }
    },
    mutations:{
        updateName(state,payload){
            state.userinfo.username = payload;
        }
    },
    actions:{
        updateNameAsync({commit},payload){
            setTimeout(()=>{
                commit('updateName',payload)
            },2000);
        }
    },
}