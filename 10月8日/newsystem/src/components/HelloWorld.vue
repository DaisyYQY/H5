<template>
<div>
  <!--1.普通事件
  2.事件修饰符
  3.按键修饰符
  -->
  <button @click="click">click</button>
  <button @mouseenter="mouseenter">mouseenter</button>
  <button @mouseleave="mouseleave">mouseleave</button>
  <button @mouseover="mouseover">mouseover</button>
  <button @mouseout="mouseout">mouseout</button>
  <button @dblclick="dblclick">dblclick</button>
  <button @mousedown="mousedown">mousedown</button>
  <button @mouseup="mouseup">mouseup</button>
  <button @mousemove="mousemove">mousemove</button>
  <!--<div style="width: 200px;height:200px;background: red" @click="parent">-->
    <!--<div style="width: 100px;height: 100px;background: #0f0" @click.stop="child"></div>-->
  <!--</div>-->
</div>
</template>

<script>
export default {
methods:{
  parent(){
    alert("parent");
  },
  child(){
    alert("child");
  },
  click(){
    console.log("click");
  },
  mouseenter(){
    console.log("mouseenter");
  }
  ,
  mouseleave(){
    console.log("mouseleave");
  }
  ,
  mouseover(){
    console.log("mouseover");
  }
  ,
  mouseout(){
    console.log("mouseout");
  }
  ,
  dblclick(){
    console.log("dbclick");
  }
  ,
  mouseup(){
    console.log("mouseup");
  }
  ,
  mousedown(){
    console.log("mousedown");
  }
  ,
  mousemove(){
    console.log("mousemove");
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
