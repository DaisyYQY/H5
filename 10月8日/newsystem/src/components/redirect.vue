<template>
  <div>
    <h1>Redirect----------({{id}})------------</h1>
    {{$route.params.id}}
    <!--<router-link :to="{name:'one',params:{id:6}"></router-link>-->
    <router-link to="/new">新闻页</router-link>
  </div>
</template>

<script>

  export default{
    props:["id"],
//    template:`
//    <div>{{id}}</div>
//    `
//    data(){
//      return{
//        userId:''
//      }
//    },
//    mounted(){
////      this.userId=23
//    }
//    组件内部守卫
    beforeRouteEnter(to,from,next){
      console.log("beforeRouteEnter");
      next();
    },
    beforeRouteUpdate(to,from,next){
      console.log("beforeRouteUpdate");
      next();
    },
    beforeRouteLeave(to,from,next){
      console.log("beforeRouteLeave");
      next();
    }
  }
</script>

<style>

</style>

