<template>
  <div>
    <brotherOne/>
    <brotherTwo/>
  </div>
</template>

<script>
  import Vue from "vue"
  Vue.component("brotherOne",{
    template:`
    <div>
    <div style="width:200px;height:200px;background:#ff0" @mouseover="send">{{a}}</div>
    </div>
    `,
    data(){
      return{
        a:"我是大哥"
      }
    },
    methods:{
      send(){
        bus.$emit("receive",this.a)
      }
    }
  })
  Vue.component("brotherTwo",{
    template:`
    <div>
       <div style="width:300px;height:300px;background:red">{{info}}</div>
    </div>
    `,
    data(){
      return{
        info:''
      }
    },
    methods:{
      get(){
        bus.$on("receive",(val)=>{
          this.info=val
        })
      }
    },
    mounted(){
//      setTimeout(()=>{
//        this.get()
//      },1000)
      this.get()
    }
  })
  var bus=new Vue;
  export default{

  }
</script>

<style>

</style>








