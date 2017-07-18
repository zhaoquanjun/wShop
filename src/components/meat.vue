<template>
  <div class="meat-part">
    <a href="" class="topImg">
      <img :src="imgSp" alt="">
    </a>
    <div class="meat-list">
      <a href="" class="meatItem" v-for="meat in meatLists">
        <div class="itemImg">
          <img :src="meat.img" alt="">
        </div>
        <p class="itemName">{{ meat.name }}</p>
        <p class="itemWeight">{{ meat.weight }}</p>
        <p class="itemInfo">{{ meat.info }}</p>
        <p class="price">
          <span>￥</span><span class="big">{{ meat.price_01 }}</span><span>{{ meat.price_02 }}</span>
        </p>
      </a>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        meatLists: [
          {
            img: require('../assets/meat_01.jpg'),
            name: '锡盟切块羊排',
            weight:'500克',
            info: '肥瘦相间，故乡肉嫩',
            price_01: '37.',
            price_02: '50'
          },
          {
            img: require('../assets/meat_01.jpg'),
            name: '锡盟切块羊排',
            weight:'500克',
            info: '肥瘦相间，故乡肉嫩',
            price_01: '37.',
            price_02: '50'
          },   {
            img: require('../assets/meat_01.jpg'),
            name: '锡盟切块羊排',
            weight:'500克',
            info: '肥瘦相间，故乡肉嫩',
            price_01: '37.',
            price_02: '50'
          }
          ,   {
            img: require('../assets/meat_01.jpg'),
            name: '锡盟切块羊排',
            weight:'500克',
            info: '肥瘦相间，故乡肉嫩',
            price_01: '37.',
            price_02: '50'
          },
          {
            img: require('../assets/meat_01.jpg'),
            name: '锡盟切块羊排',
            weight:'500克',
            info: '肥瘦相间，故乡肉嫩',
            price_01: '37.',
            price_02: '50'
          },
          {
            img: require('../assets/meat_01.jpg'),
            name: '锡盟切块羊排',
            weight:'500克',
            info: '肥瘦相间，故乡肉嫩',
            price_01: '37.',
            price_02: '50'
          }
        ],
        imgSp:require('../assets/special_03.jpg')
      }
    }

  }


</script>
