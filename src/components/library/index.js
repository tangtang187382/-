import HomeBanner from "./HomeBanner.vue"
import AppMore from "./AppMore.vue"
import AppSkeleton from "./AppSkeleton.vue";
export default {
    install(app){
        app.component(HomeBanner.name,HomeBanner);
        app.component(AppMore.name,AppMore);
        app.component(AppSkeleton.name,AppSkeleton);
    }
}