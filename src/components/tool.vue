<template>
  <div class="tool-container">
    <a href="" class="tTitle">
      <p>必备工具</p>
      <p>查看更多工具 ></p>
    </a>
    <div class="fucContainer">
      <a href="" class="fuc" v-for="tool in toolLists">
        <p class="fucImg"><img :src="tool.img" alt=""></p>
        <p class="fucName">{{ tool.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        toolLists:[
          {img:require('../assets/myOwn/ticket.jpg'),name:'待付款'},
          {img:require('../assets/myOwn/cost.jpg'),name:'待发货'},
          {img:require('../assets/myOwn/leaguer.jpg'),name:'待收货'},
          {img:require('../assets/myOwn/mysec.jpg'),name:'待评价'},
          {img:require('../assets/myOwn/myQue.jpg'),name:'退款/售后'},
          {img:require('../assets/myOwn/myFri.jpg'),name:'退款/售后'},
          {img:require('../assets/myOwn/myComm.jpg'),name:'退款/售后'},
          {img:require('../assets/myOwn/myShar.jpg'),name:'退款/售后'},
        ]
      }
    }
  }


</script>
