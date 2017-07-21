<template>
  <div class="view">
    <div class="collection-item" v-for="collect in collectLists">
      <div class="itemImg"><img :src="collect.imgS" alt=""></div>
      <div class="itemInfo">
        <div class="itemIntro">{{ collect.goods }}</div>
        <div class="itemPrice_btn">
          <div class="price">
            <span>￥</span><span class="big">{{ collect.totalP_01 }}</span><span>{{ collect.totalP }}</span>
          </div>
          <div class="more">
            <span></span><span></span><span></span>
          </div>
          <div class="itemBtn">{{ collect.info }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default{
      data(){
          return{
            collectLists: [
              {
                orderName: '有滋有味官方店  零食大礼包',
                imgS: require('../assets/myOwn/order/goods-logo_01.jpg'),
                saleP: '49.80',
                info:'找相似',
                goods:'零食大礼包组合麻辣一箱送女友批混装休闲小吃一整箱',
                totalP_01: '44.',
                totalP: 90,
              },
              {
                orderName: '享乐购休闲零食',
                imgS: require('../assets/myOwn/order/goods-logo_02.jpg'),
                saleP: '49.80',
                info:'待付款',
                goods:'送女友零食大礼包麻辣组合好吃的香辣味休闲小吃混合一整箱',
                totalP_01: '44.',
                totalP: 90,
              },
              {
                orderName: '一楼土木人创业店',
                imgS: require('../assets/myOwn/order/goods-logo_03.jpg'),
                saleP: '49.80',
                info:'待付款',
                goods:'Apple/苹果 iPhone 6s Plus 国行 移动电信联通 128G 一楼土木人',
                totalP_01: '44.',
                totalP: 90,
              },
              {
                orderName: '馨居汇家具专营店',
                imgS: require('../assets/myOwn/order/goods-logo_04.jpg'),
                saleP: '49.80',
                info:'待付款',
                goods:'皎洁电热蚊香液 3瓶套装送加热器宝宝驱蚊无味孕妇儿童灭蚊液',
                totalP_01: '44.',
                totalP: 90,
              },
              {
                orderName: '艺皇皇图专卖店',
                imgS: require('../assets/myOwn/order/goods-logo_05.jpg'),
                saleP: '49.80',
                info:'待付款',
                goods:'夏季空调被夏凉被单人被芯被子双人春秋被儿童学生宿舍被',
                totalP_01: '44.',
                totalP: 90,
              },
            ]
          }
      }
  }
</script>
