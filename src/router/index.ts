import {createRouter,createWebHashHistory, RouteRecordRaw} from "vue-router";

  const routerList:RouteRecordRaw[]=[
    {
        //访问路径
        path:"/",
        //组件
        redirect:"/login",
        //名称
        name:"root"
       },
   {
    //访问路径
    path:"/home",
    //组件 implicitly has an 'any' type.
    component:()=>import("@/views/home.vue"),
    //名称
    name:"home"
   },
   {
    //访问路径
    path:"/login",
    //组件
    component:()=>import("@/views/login.vue"),
     //名称
    name:"login"
   },
   {
    //访问路径
    path:"/helloWorld",
    //组件
    component:()=>import("@/views/HelloWorld.vue"),
    //名称
    name:"HelloWorld"
   }
  ];

const router=createRouter({history:createWebHashHistory(),routes:routerList});

export default router;