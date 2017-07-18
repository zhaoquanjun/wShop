<template>
  <div class="fruit-part">
    <a href="" class="topImg">
      <img :src="imgSp" alt="">
    </a>
    <div class="fruitItem">
      <a href class="item-list" v-for="fruite in fruitLists">
        <div class="listImg">
          <img :src="fruite.img" alt="">
        </div>
        <div class="list-intro">
          <div class="list-name">{{ fruite.name }}</div>
          <div class="list-point">{{ fruite.info }}</div>
          <div class="price">
            <span>￥</span><span class="big">{{ fruite.price_01 }}</span><span>{{ fruite.price_02 }}</span>
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
              fruitLists:[
                {
                    img:require('../assets/fruit_01.jpg'),
                    name:'赣南脐橙5斤装',
                    info:'味甜肉嫩，满满VC能量',
                    price_01:'49.',
                    price_02:'90'
                },
                {
                  img:require('../assets/fruit_02.jpg'),
                  name:'赣南脐橙5斤装',
                  info:'味甜肉嫩，满满VC能量',
                  price_01:'49.',
                  price_02:'90'
                },
                {
                  img:require('../assets/fruit_03.jpg'),
                  name:'赣南脐橙5斤装',
                  info:'味甜肉嫩，满满VC能量',
                  price_01:'49.',
                  price_02:'90'
                },
                {
                  img:require('../assets/fruit_04.jpg'),
                  name:'赣南脐橙5斤装',
                  info:'味甜肉嫩，满满VC能量',
                  price_01:'49.',
                  price_02:'90'
                }
              ],
            imgSp:require('../assets/special_02.jpg')
          }
      }
  }


</script>
