<template>
  <div class="head-container">
    <div class="userInfo">
      <div class="userPhoto"><img :src="userP" alt=""></div>
      <div class="userName">{{ userName }}</div>
      <div class="count">淘气值：{{ count }}</div>
    </div>
    <div class="classify">
      <router-link to="/Collection" tag="div" class="collection">
        <p>{{ collectionNum }}</p>
        <p>收藏夹</p>
      </router-link>
      <router-link to="/collectionItemShop" tag="div" class="attention">
        <p>{{ attentionNum }}</p>
        <p>关注店铺</p>
      </router-link>
      <router-link to="/FootPrint" tag="div" class="footPrint">
        <p>{{ footPrintNum }}</p>
        <p>足迹</p>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        userP: require('../assets/myOwn/myPhoto.jpg'),
        userName: 'Carlton',
        count: 650,
        collectionNum: 25,
        attentionNum: 50,
        footPrintNum: 1500
      }
    }
  }


</script>
