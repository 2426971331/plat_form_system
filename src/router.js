import Vue from 'vue'
import VueRouter from "vue-router" //引入路由工具
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'',
        component:()=> import('@/views/home.vue')
    },
    {
        path:'/home',
        name:'home',
        component:()=> import('@/views/home.vue')
    },
    {
        path:'/chatroom',
        name:'chatroom',
        component:()=> import('@/views/chatroom.vue')
    },
    {
        path:'/news',
        name:'news',
        component:()=> import('@/views/news.vue')
    },
    {
        path:'/my',
        name:'my',
        component:()=> import('@/views/my.vue')
    },
    {
        path:'/detail',
        name:'detail',
        component:()=> import('@/views/detail.vue')
    },
    {
        path:'/Publish',
        name:'Publish',
        component:()=> import('@/views/publish.vue')
    },
    {
        path:'/Comment',
        name:'Comment',
        component:()=> import('@/views/comment.vue')
    },
    
    
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router