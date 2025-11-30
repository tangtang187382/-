import req from "./req";
import base from "./base";
//导出所有请求借口函数
//获取分类列表
const getCategoryList = ()=>{ return req.get(base.categoryUrl)}
export default getCategoryList
//获取首页轮播图
export const getBanner = ()=>req.get(base.bannerUrl);
//首页新鲜好物，黑鸟精选
export const getNew = ()=>req.get(base.findNew)

export const gethot=()=>req.get(base.findhot);
//product
export const getproducts= ()=>req.get(base.product);