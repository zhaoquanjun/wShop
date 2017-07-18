<template>
  <div class="entrance-container">
    <a class="entranceItem" href=""  v-for="info in infos">
      <div class="entranceImg">
        <img :src="info.image" alt="">
      </div>
      <div class="entranceName">{{ info.name }}</div>
    </a>

  </div>
</template>

<script>
  export default{
      data(){
          return {
              infos:[
                {image:require('../assets/logo_04.png'),name:'会员签到'},
                {image:require('../assets/logo_03.png'),name:'爆款特卖'},
                {image:require('../assets/logo_01.png'),name:'新品上线'},
                {image:require('../assets/logo_02.png'),name:'热卖排行'}
              ]
          }
      },
    components:{}
  }
</script>
