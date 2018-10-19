<template>
  <div>
   <parent/>
    <button>传送</button>
  </div>
</template>

<script>
  import Vue from "vue"
  Vue.component("parent",{
    template:`
    <div>
       <div style="width:300px;height:300px;background:red">{{getchildMsg}}</div>
       <child :parentData="parentMsg" @get="getMsg"></child>
    </div>
    `,
    data(){
      return{
        parentMsg:'父亲',
        getchildMsg:''
      }
    },
    methods:{
      getMsg(val){
        this.getchildMsg=val
      }
    },
    components:{
      "child":{
        props:['parentData'],
        template:`
        <div style="width:150px;height:150px;background:#0f0">{{parentData}}</div>
        `,
        data(){
          return{
            childMsg:'儿子'
          }
        },
        methods:{
          send(){
            this.$emit("get",this.childMsg)
          }
        },
        mounted(){
            this.send()
        }
      }
    }
  })

  export default{

  }
</script>

<style>

</style>








