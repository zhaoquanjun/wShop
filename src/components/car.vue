<template>
  <div class="car-container">
    <div class="carImg"><img :src="imgCar" alt=""></div>
    <p class="info">{{ info }}</p>
    <p class="ask">{{ askFor }}</p>
    <router-link to="/" class="btn" href="">去逛逛</router-link>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        info: '购物车快饿瘪了T.T',
        askFor: '主人快给我挑点宝贝吧',
        imgCar:require('../assets/home/footer/shoppingCar_hight.png')
      }
    }
  }


</script>
