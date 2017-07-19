<template>
  <div class="classify" >
    <a href="" class="topImg">
      <img :src="imgSp" alt="">
    </a>
    <a href="" class="classifyItem" v-for="classify in classifies">
      <div class="itemImg">
        <img :src="classify.img" alt="">
      </div>
      <div class="introduce">
        <div class="itemName">{{ classify.name }}</div>
        <div class="info_price">
          <p class="itemInfo">{{ classify.info }}</p>
          <p class="itemPrice">
            <span>￥</span><span class="big">{{ classify.price_01 }}</span><span>{{ classify.price_02 }}</span>
          </p>
        </div>
      </div>
    </a>
  </div>
</template>
<script>

  export default{
      data(){
          return {
              classifies:[
                {img:require('../assets/home/goods-lists_01.jpg'),name:'巨荟芒果果脯',info:'香甜细腻，风情芒芒',price_01:'16.',price_02:80},
                {img:require('../assets/home/goods-lists_02.jpg'),name:'五常稻花香大米',info:'香甜细腻，风情芒芒',price_01:'89.',price_02:'00'},
                {img:require('../assets/home/goods-lists_03.jpg'),name:'长白山原始森林椴树雪密',info:'香甜细腻，风情芒芒',price_01:'39.',price_02:90}
              ],
            imgSp:require('../assets/home/special_01.jpg')
          }
      }
  }




</script>
