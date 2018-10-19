//import Vue from 'vue'
//import VueRouter from 'vue-router'
//import Home from '@/components/home'
//import HelloWorld from '@/components/HelloWorld'
//import Com from '@/components/com'
//import New from "@/components/new"
//import Chat from "@/components/chat"
//import About from "@/components/about"
//
//Vue.use(VueRouter)   //use  如果涉及vue内部方法时，需要通过use调用
//
//export default new VueRouter({
//  mode:'history',   //hash  匹配#进行跳转   history  window下面的方法   html5出现
//  routes: [
//    {
//      path: '/',
//      component: Home
//    },
//    {
//      path: '/com',
//      component: Com
//    },
//    {
//      path: '/HelloWorld',
//      component: HelloWorld
//    },
//    {
//      path: '/new',
//      component: New
//    },
//    {
//      path: '/chat',
//      component:Chat
//    },
//    {
//      path: '/about',
//      component:About
//    }
//  ]
//})

import Vue from "vue"
import VueRouter from "vue-router"
import New from "@/components/new"
import Chat from "@/components/chat"
import About from "@/components/about"
import Run from "@/components/runRouter"
import Child from "@/components/childrouter"
import One from "@/components/one"
import Two from "@/components/two"
import Three from "@/components/three"
import View from "@/components/routeview"
import Redirect from "@/components/redirect"
import Nav from "@/components/nav"
import Compa from "@/components/compa"
import VueX from "@/components/vueX"
//import Component from "@/components/component"

Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes:[
    {
      path:'/new',
      component:New
    },
    {
      path:'/chat',
      component:Chat
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/run/:id',
      component:Run,
      query:{

      }
    },
    {
      path:'/child',
      component:Child,
      children:[
        {
          path:'/child/one',
          name:"one",
          component:One,
        },
        {
          path:'/child/two',
          name:"two",
          component:Two
        },
        {
          path:'/child/three',
          name:"three",
          component:Three
        }
      ]
    },
    {
      path:'/view',
      component:View,
      children:[
        {
          path:'',
          components:{
              default:Two,
              a:One,
              b:Three
            }
        }
      ]
    },
    {
      path:'/red',
      //path:'/red/:id',
      //redirect:"/new",
      //redirect:{name:'one'},
      //redirect:to=>{
      //  const { hash, params, query } = to
      //    return { path: '/new',query:null}
      //},
      //alias:'/b',  //别名
      component:Redirect,
      //props: true,
      meta:{
        requireAuth:false
      },
      beforeEnter(to,from,next){
        //console.log(to);
        next();
      }
    },
    {
      path:'/nav',
      component:Nav
    },
    {
      path:'/pa/:id',
      component:Compa,
      props:true   //路由组件
    },
    {
      path:'/vuex',
      component:VueX
    }
  ]
})
//全局导航守卫
router.beforeEach((to,from,next)=>{
  //to  路由去向的目标
  // from  路由从哪里离开
  // next  函数  执行下一步
  if(to.path=="/red"){
    if(to.meta.requireAuth==false) {
      router.push("/new");
    }else{
      router.push("/child/one");
    }
  }
  next();  //执行接下来的内容
})
////全局解析守卫    2.50增加
//router.beforeResolve((to,from)=>{
//
//})
//全局后置钩子   作用：销毁  取消销毁的状态
router.afterEach((to,from)=>{
  //console.log(to);
  //console.log(from);
})

export default router;








