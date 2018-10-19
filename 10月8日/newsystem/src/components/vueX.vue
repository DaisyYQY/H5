<template>
  <div>
    <h1>vuex</h1>
    <!--{{$store.state.num}}-->
    {{num}}
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <!--<button @click="reduce">-</button>-->
    <!--<button @click="add">+</button>-->
    <!--<button @click="addAction">+</button>-->
    <!--<button @click="reduceAction">-</button>-->

    <!--{{$store.state.age}}-->
    <!--{{$store.state.name}}-->
    <!--{{count}}-->
  </div>
</template>

<script>
  import store from "../store"
  import {mapState,mapMutations,mapGetters,mapActions} from "vuex"   //映射
  export default{
    //方法一：
computed:{   //计算属性  setter  getter
  num(){
    return store.state.num
  }
}

////    方法二：
//    computed:mapState(['num']),  //mapState映射
////    方法1
//    methods:{
//      ...mapMutations(["add","reduce"])  //扩展运算符
//    }
////    方法2
//  methods:mapMutations(["add","reduce"]),

//  methods:mapActions(["addAction","reduceAction"]),

    //方法三：
//    computed:mapState({
    //1、箭头函数
////      num:state=>state.num
    //2、非箭头函数
//      num(state){
//        return state.num
//      }
//    })

//方法四：
//    computed:mapState({
//      num(){
//        return this.$store.state.num
//      }
//    })

//   computed:mapGetters(["count"])
//    computed:{
//      ...mapGetters(["count"])
//    }

  }

</script>

<style>

</style>























