import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入初始化样式
import './assets/styles/base.css'
//映入全局组件  


createApp(App).use(store).use(router).mount('#app')

