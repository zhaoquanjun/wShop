<template>
  <div class="view">
    <div class="repair-container" v-for="orderL in orderLists">
      <div class="order-title">
        <p class="order-name">
          <span class="order-icon"><img :src="orderL.imgL" alt=""></span><span class="order-name_">{{ orderL.orderName }}</span>
        </p>
      </div>
      <div class="goods-container">
        <div class="goodsImg"><img :src="orderL.imgS" alt=""></div>
        <div class="goodsInfo">
          <div class="goods-intro">{{ orderL.goods }}</div>
          <div class="price_count">
           <p>退款金额:{{ orderL.originP }}</p>
          </div>
        </div>
      </div>
      <div class="total-info">
        <p class="infoImg"><img :src="orderL.imgR" alt=""></p>
        <p class="infoIntro">{{ orderL.fucBtn }}</p>
      </div>
      <div class="fucBtn">
        <router-link class="btn confirm" to="" tag="li">
          <p>{{ orderL.btnInfo }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>

  export default{
    data(){
      return {
        orderLists: [
          {
            orderName: '有滋有味官方店  零食大礼包',
            imgL: require('../assets/myOwn/order/shop-logo_01.png'),
            imgS: require('../assets/myOwn/order/goods-logo_01.jpg'),
            imgR:require('../assets/myOwn/reback.png'),
            saleP: '49.80',
            info:'待收货',
            goods:'零食大礼包组合麻辣一箱送女友批混装休闲小吃一整箱',
            originP: '￥99.80',
            totalP_01: '44.',
            totalP: 90,
            countT:1,
            countN:'x1',
            fucBtn:'退货退款  退款成功',
            btnInfo:'查看详情'
          },
          {
            orderName: '享乐购休闲零食',
            imgL: require('../assets/myOwn/order/shop-logo_02.png'),
            imgS: require('../assets/myOwn/order/goods-logo_02.jpg'),
            imgR:require('../assets/myOwn/reback.png'),
            saleP: '49.80',
            info:'待收货',
            goods:'送女友零食大礼包麻辣组合好吃的香辣味休闲小吃混合一整箱',
            originP: '￥99.80',
            totalP_01: '44.',
            totalP: 90,
            countT:1,
            countN:'x1',
            fucBtn:'退货退款  退款成功',
            btnInfo:'查看详情'

          },
          {
            orderName: '一楼土木人创业店',
            imgL: require('../assets/myOwn/order/shop-logo_03.png'),
            imgS: require('../assets/myOwn/order/goods-logo_03.jpg'),
            imgR:require('../assets/myOwn/reback.png'),
            saleP: '49.80',
            info:'待收货',
            goods:'Apple/苹果 iPhone 6s Plus 国行 移动电信联通 128G 一楼土木人',
            originP: '￥4480',
            totalP_01: '44.',
            totalP: 90,
            countT:1,
            countN:'x1',
            fucBtn:'退货退款  退款成功',
            btnInfo:'查看详情'
          },
          {
            orderName: '馨居汇家具专营店',
            imgL: require('../assets/myOwn/order/shop-logo_02.png'),
            imgS: require('../assets/myOwn/order/goods-logo_02.jpg'),
            imgR:require('../assets/myOwn/reback.png'),
            saleP: '49.80',
            info:'待收货',
            goods:'皎洁电热蚊香液 3瓶套装送加热器宝宝驱蚊无味孕妇儿童灭蚊液',
            originP: '￥62.90',
            totalP_01: '44.',
            totalP: 90,
            countT:1,
            countN:'x1',
            fucBtn:'仅退款  退款成功',
            btnInfo:'查看详情'
          },
          {
            orderName: '艺皇皇图专卖店',
            imgL: require('../assets/myOwn/order/shop-logo_01.png'),
            imgS: require('../assets/myOwn/order/goods-logo_01.jpg'),
            imgR:require('../assets/myOwn/reback.png'),
            saleP: '49.80',
            info:'待收货',
            goods:'夏季空调被夏凉被单人被芯被子双人春秋被儿童学生宿舍被',
            originP: '￥138.90',
            totalP_01: '44.',
            totalP: 90,
            countT:1,
            countN:'x1',
            fucBtn:'仅退款  退款成功',
            btnInfo:'查看详情'
          },
        ]
      }
    }
  }


</script>
