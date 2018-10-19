<template>
  <div>
    <h1>two</h1>
    {{$route.params.id}}
    <!--{{$route.query.id}}-->
    <!--<button @click="back">back</button>-->
    <!--<button @click="goto">goto</button>-->
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
//      back(){
//        this.$router.go(-1);
//      },
//      goto(){
//        this.$router.push({path:'three',query:{type:'student'}});
//      }
    }
  }
</script>

<style>

</style>

