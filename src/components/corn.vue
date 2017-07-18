<template>
  <div class="corn-part">
    <a href="" class="topImg">
      <img :src="imgSp" alt="">
    </a>
    <div class="cornItem">
      <a href="" class="item-list" v-for="corn in cornLists">
        <div class="listImg">
          <img :src="corn.img" alt="">
        </div>
        <div class="list-intro">
          <div class="list-name">{{ corn.name }}</div>
          <div class="list-point">{{ corn.info }}</div>
          <div class="price">
            <span>￥</span><span class="big">{{ corn.price_01 }}</span><span>{{ corn.price_02 }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        cornLists:[
          {
            img:require('../assets/corn_01.jpg'),
            name:'五常稻谷大米（蓝色编织袋）5kg',
            info:'盘中稻花香，粒粒皆五常',
            price_01:'89.',
            price_02:'90'
          },
          {
            img:require('../assets/corn_02.jpg'),
            name:'五常稻谷大米（蓝色编织袋）5kg',
            info:'盘中稻花香，粒粒皆五常',
            price_01:'89.',
            price_02:'90'
          },
          {
            img:require('../assets/corn_03.jpg'),
            name:'五常稻谷大米（蓝色编织袋）5kg',
            info:'盘中稻花香，粒粒皆五常',
            price_01:'89.',
            price_02:'90'
          },
          {
            img:require('../assets/corn_04.jpg'),
            name:'五常稻谷大米（蓝色编织袋）5kg',
            info:'盘中稻花香，粒粒皆五常',
            price_01:'89.',
            price_02:'90'
          }
        ],
        imgSp:require('../assets/special_04.jpg')
      }
    }
  }


</script>
