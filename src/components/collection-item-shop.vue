<template>
  <div class="view">
    <div class="shop-container" v-for="spl in shopCols">
      <div class="shopImg"><img :src="spl.shopImg" alt=""></div>
      <div class="shopIntro">
        <div class="shopName">{{ spl.name }}</div>
        <div class="shopLevel">
          <div class="levelIcon"><img :src="spl.levelIcon" alt=""><img :src="spl.levelIcon" alt=""><img
            :src="spl.levelIcon" alt=""></div>
          <div class="shopRemove"><img :src="spl.colIcon" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
    data(){
      return {
        shopCols: [
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: '一楼土木人创业店',
            shopImg: require('../assets/myOwn/shopCol/shop-img_01.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_01.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: 'kxp塑帛专卖店',
            shopImg: require('../assets/myOwn/shopCol/shop-img_02.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_01.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: '卓致旗舰店',
            shopImg: require('../assets/myOwn/shopCol/shop-img_03.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_02.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: '胖胖哥大码男装8090',
            shopImg: require('../assets/myOwn/shopCol/shop-img_04.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_01.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: '轻轻笔记本配件网店\笔记本键盘\笔记本液晶屏\光驱\电池\适配器',
            shopImg: require('../assets/myOwn/shopCol/shop-img_05.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_02.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: 'k2酷衣之家',
            shopImg: require('../assets/myOwn/shopCol/shop-img_06.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_01.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: '莱蔻旗舰店',
            shopImg: require('../assets/myOwn/shopCol/shop-img_07.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_01.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: '一楼土木人创业店',
            shopImg: require('../assets/myOwn/shopCol/shop-img_01.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_02.png')
          },
          {
            colIcon: require('../assets/myOwn/order/col_icon.png'),
            name: 'kxp塑帛专卖店',
            shopImg: require('../assets/myOwn/shopCol/shop-img_02.jpg'),
            levelIcon: require('../assets/myOwn/shopCol/level-icon_02.png')
          }
        ]
      }
    }
  }


</script>
