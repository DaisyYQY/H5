<template>
  <div>
    <h1>component{{id}}</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
  export default{
    props:["id"]
  }
</script>

<style>

</style>







