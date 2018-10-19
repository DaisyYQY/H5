<template>
  <div>
    <h1>three</h1>
    <!--{{$route.params.id}}-->
    <!--<button @click="back">back</button>-->
    <router-link :to="{name:'two',params:{id:2}}">Go to two</router-link>
    <!--命名式路由  相当于动态路由跳转  $route.push()-->
  </div>
</template>

<script>
  export default{
//    data(){
//      return{
//
//      }
//    },
//    methods:{
//      back(){
//        this.$router.go(-1);
//      }
//    }
  }
</script>

<style>

</style>

