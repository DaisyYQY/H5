<template>
  <div>
    <HelloWorld/>
    <Com/>
    <!--<Brother/>-->
    <div>
      <ul>
        <li v-for="(item,index) in json">{{index}}{{item.name}}{{item.age}}</li>
      </ul>
    </div>
    <!--<input type="text" v-model="msg">-->
    <!--{{msg}}-->
    <!--<div v-text="msg"></div>-->
    <!--<div v-html="msg"></div>-->
    <!--<div :class="red" v-show="hide"></div>-->
    <!--<div :class="[c,d]"></div>-->
    <!--<div :class="{object:e}"></div>-->
    <!--<div :style="green" v-if="show"></div>-->
    <!--<div :style="{color:colorS}">hahaha</div>-->
    <!--<div :style="[a,b]"></div>-->
  </div>
</template>

<script>
  import HelloWorld from "./HelloWorld"
  import Com from "./com"
//  import Brother from "./brother"
  export default {
    components:{HelloWorld,Com},
//    name: 'App',
    data(){
      return{
        e:true,
        c:'c',
        d:'d',
        a:{
          background:"#ff0"
        },
        b:{
          width:"100px",
          height:"100px"
        },
        colorS:'#00f',
        hide:true,
        show:true,
        msg:'<h1>hahaha</h1>',
        arr:[1,2,3,4,5,6],
        json:[
          {"name":"Tom","age":18},
          {"name":"Tom","age":18},
          {"name":"Tom","age":18},
          {"name":"Tom","age":18},
          {"name":"Tom","age":18}
        ],
        green:{
          background:"#0f0",
          width:"100px",
          height:"100px"
        },
        red:"red"
      }
    }
  }
</script>

<style>
.red{
  background:#f00;
  width:100px;
  height:100px;
}
  .object{
    background:#0ff;
    width:100px;
    height:100px;
  }
  .c{
    background:#cff;
  }
.d{
  width:100px;
  height:100px;
}
</style>















