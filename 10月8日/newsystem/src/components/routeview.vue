<template>
  <div>
    <h1>routeview</h1>
    routeview
    <router-view style="width: 100%;height: 40px;background: #f00">默认</router-view>
    <router-view name="a" style="width: 50%;height: 200px;background: #00f">a</router-view>
    <router-view name="b" style="width: 50%;height: 200px;background: #ccc">b</router-view>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>

</style>

