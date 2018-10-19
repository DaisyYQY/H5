<template>
  <div>
    <h1>one</h1>
    <button @click="link">跳转2</button>
    <button @click="link1">跳转3</button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        id:123,
        id1:345
      }
    },
   methods:{
     link(){
//       this.$router.push("two");  //字符串
//       this.$router.push({path:"two"});  //对象
//       this.$router.push({ name: 'two',params:{id:1}});  //命名式路由
//       this.$router.push({ path: 'two', query: { plan: 'private' }});  //带有查询参数
//       this.$router.push({path:"two",query:{id:1,a:2}})
//       this.$router.go(-1);  //返回上一页
       this.$router.push({ name: 'two',params:{id:this.id}});
     },
     link1(){
       this.$router.push({ name: 'three',params:{id:this.id1}});
     }
   }
  }
</script>

<style>

</style>

