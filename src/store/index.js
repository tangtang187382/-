import { createStore } from 'vuex'
import usermodule from './modules/user'
import category from './modules/category'
export default createStore({
  modules: {
    user:usermodule,
    category:category,
  }
})
