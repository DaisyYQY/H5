<template>
  <div>
    <p>
      <router-link to="/child/one">one</router-link>
      <router-link to="/child/two">two</router-link>
      <router-link to="/child/three">three</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style>

</style>

