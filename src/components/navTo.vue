<template>
  <div class="footer-container">
    <div class="nav">
      <div class="navTo" @click="ledTo($event)">
        <div class="nav-icon">
          <img class="home" src="../assets/footer/home.png" alt="">
        </div>
        <div class="nav-name">首页</div>
      </div>
      <div class="navTo"@click="ledTo($event)">
        <div class="nav-icon">
          <img class="classiy" src="../assets/footer/classify_logo.png" alt="">
        </div>
        <div class="nav-name">分类</div>
      </div>
      <div class="navTo" @click="ledTo($event)" >
        <div class="nav-icon">
          <img class="shoppingCar" src="../assets/footer/shoppingCar_logo.png" alt="">
        </div>
        <div class="nav-name shoppingCar">购物车</div>
      </div>
      <div class="navTo" @click="ledTo($event)">
        <div class="nav-icon">
          <img class="myOwn" src="../assets/footer/myOwn_logo.png" alt="">
        </div>
        <div class="nav-name myOwn">我的</div>
      </div>
    </div>
    <div class="progress"></div>
  </div>

</template>
<script>
  import Jquery from 'jquery'
  window.$ = Jquery;
  export default{
    data(){
      return {
//        navLists: [
//          {
//            img: require('../assets/footer/home.png'),
//            name: '首页'
//          },
//          {
//            img: require('../assets/footer/classify_logo.png'),
//            name: '分类'
//          },
//          {
//            img: require('../assets/footer/shoppingCar_logo.png'),
//            name: '购物车'
//          },
//          {
//            img: require('../assets/footer/myOwn_logo.png'),
//            name: '我的'
//          }
//        ],
        flag:false
      }
    },
    methods: {
      ledTo(){
          var target = event.currentTarget,
              children = $(target).children('.nav-name')[0];
          $(target).css('background','#333').siblings().css('background','#404042');
          $(target).children('.nav-name').css('color','#fff').parent().siblings().children('.nav-name').css('color','#949494');
          if(children.innerHTML == '首页'){
            $(target).children('.nav-icon').children('img').attr('src',require('../assets/footer/home_hight.png'));
            $('.classiy').attr('src',require('../assets/footer/classify_logo.png'));
            $('.shoppingCar').attr('src',require('../assets/footer/shoppingCar_logo.png'));
            $('.myOwn').attr('src',require('../assets/footer/myOwn_logo.png'));
            $('.progress').animate({left:0});
          }else if(children.innerHTML == '分类'){
            $(target).children('.nav-icon').children('img').attr('src',require('../assets/footer/classify_hight.png'));
            $('.home').attr('src',require('../assets/footer/home.png'));
            $('.shoppingCar').attr('src',require('../assets/footer/shoppingCar_logo.png'));
            $('.myOwn').attr('src',require('../assets/footer/myOwn_logo.png'));
            $('.progress').animate({left:1.6+'rem'});
          }else if(children.innerHTML == '购物车'){
            $(target).children('.nav-icon').children('img').attr('src',require('../assets/footer/shoppingCar_hight.png'));
            $('.home').attr('src',require('../assets/footer/home.png'));
            $('.classiy').attr('src',require('../assets/footer/classify_logo.png'));
            $('.myOwn').attr('src',require('../assets/footer/myOwn_logo.png'))
            $('.progress').animate({left:3.2+'rem'});
          }else if(children.innerHTML == '我的'){
            $(target).children('.nav-icon').children('img').attr('src',require('../assets/footer/myOwn_hight.png'));
            $('.home').attr('src',require('../assets/footer/home.png'));
            $('.classiy').attr('src',require('../assets/footer/classify_logo.png'));
            $('.shoppingCar').attr('src',require('../assets/footer/shoppingCar_logo.png'));
            $('.progress').animate({left:4.8+'rem'});
          }
      }
    }

  }
</script>
