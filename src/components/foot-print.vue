<template>
  <div class="print-container">
    <div class="print-item" v-for="data in dataLists">
      <div class="itemImg"><img :src="data.imgP" alt=""></div>
      <div class="itemIntro">{{ data.intro }}</div>
      <div class="itemPrice">
        <p class="priceL">{{ data.price }}</p>
        <p class="more">
          <span></span><span></span><span></span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>

  export default{
    data(){
      return {
        dataLists: [
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_01.jpg'),
            intro: '尊蓝男士身体润肤乳液浴后全身保湿补水滋润香体防干燥脱皮润肤露',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_02.jpg'),
            intro: '杰威尔男士爽肤水补水保湿控油收缩毛孔滋润紧肤须后水喷雾护肤品',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_03.jpg'),
            intro: '睡袍男夏冰丝短袖薄款性感丝绸浴袍男士长款加大码丝质睡衣家居服',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_04.jpg'),
            intro: '夏季男女日式和服睡衣薄款冰丝绸情侣睡袍两件套时尚性感浴袍浴衣',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_05.jpg'),
            intro: '夏季男女短袖浴袍薄款情侣睡衣冰丝绸性感吊带女睡袍两件套睡裙夏',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_06.jpg'),
            intro: '春秋男士长款丝绸睡袍短袖浴袍男夏季薄款性感冰丝睡衣家居服特价',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_07.jpg'),
            intro: '睡衣男春夏季冰丝绸短袖短裤真丝青年男士家居服休闲薄款套装大码',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_08.jpg'),
            intro: '2盒32元】曼秀雷敦 新乐敦滴眼液13ml 乐敦眼药水缓解眼睛疲劳',
            price: '￥57'
          },
          {
            imgP: require('../assets/myOwn/footPrint/shop-img_09.jpg'),
            intro: '日本代购LION/狮王滴眼润洗眼液药水隐形裸眼两用缓解疲劳护眼液',
            price: '￥57'
          }
        ]
      }
    }
  }


</script>
