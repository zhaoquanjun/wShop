<template>
  <div class="order-container">
    <a href="" class="tTitle">
      <p>我的订单</p>
      <p>查看更多订单 ></p>
    </a>
    <div class="fucContainer">
      <a href="" class="fuc" v-for="status in fucLists">
        <p class="fucImg"><img :src="status.img" alt=""></p>
        <p class="fucName">{{ status.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>

  export default{
      data(){
          return{
              fucLists:[
                {img:require('../assets/myOwn/wait_pay.jpg'),name:'待付款'},
                {img:require('../assets/myOwn/wait_post.jpg'),name:'待发货'},
                {img:require('../assets/myOwn/wait_get.jpg'),name:'待收货'},
                {img:require('../assets/myOwn/wait_commit.jpg'),name:'待评价'},
                {img:require('../assets/myOwn/return_back.jpg'),name:'退款/售后'},
              ]
          }
      }
  }


</script>
