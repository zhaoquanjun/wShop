<template>
  <div class="order-container">
    <router-link to="/OrderList" class="tTitle">
      <p>我的订单</p>
      <p>查看更多订单 ></p>
    </router-link>
    <div class="fucContainer">
      <ul  class="fuc" v-for="status in fucLists">
        <router-link :to="status.path" tag="li">
          <p class="fucImg"><img :src="status.img" alt=""></p>
          <p class="fucName">{{ status.name }}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>

  export default{
      data(){
          return{
              fucLists:[
                {img:require('../assets/myOwn/wait_pay.jpg'),name:'待付款',path:'/WaitPay'},
                {img:require('../assets/myOwn/wait_post.jpg'),name:'待发货',path:'/WaitPost'},
                {img:require('../assets/myOwn/wait_get.jpg'),name:'待收货',path:'/WaitGet'},
                {img:require('../assets/myOwn/wait_commit.jpg'),name:'待评价',path:'/WaitCommit'},
                {img:require('../assets/myOwn/return_back.jpg'),name:'退款/售后',path:'/Repair'},
              ]
          }
      }
  }


</script>
