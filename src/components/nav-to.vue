<template>
  <div class="footer-container">
    <div class="nav">
      <router-link to="/" class="navTo" @click="ledTo($event)">
        <div class="nav-icon">
          <img class="home" src="../assets/home/footer/home.png" alt="">
        </div>
        <div class="nav-name">首页</div>
      </router-link>
      <router-link to="/MyClassify" class="navTo" @click="ledTo($event)">
        <div class="nav-icon">
          <img class="classiy" src="../assets/home/footer/classify_logo.png" alt="">
        </div>
        <div class="nav-name">分类</div>
      </router-link>
      <router-link to="/ShoppingCar" class="navTo" @click="ledTo($event)">
        <div class="nav-icon">
          <img class="shoppingCar" src="../assets/home/footer/shoppingCar_logo.png" alt="">
        </div>
        <div class="nav-name shoppingCar">购物车</div>
      </router-link>
      <router-link to="/MyOwn" class="navTo" @click="ledTo($event)">
        <div class="nav-icon">
          <img class="myOwn" src="../assets/home/footer/myOwn_logo.png" alt="">
        </div>
        <div class="nav-name myOwn">我的</div>
      </router-link>
    </div>
    <div class="progress"></div>
  </div>

</template>
<script>
  import {ShoppingCar,MyOwn,MyClassify} from '../page'

  import Jquery from 'jquery'
  window.$ = Jquery;
  export default{
    data(){
      return {
        leftO: 0
      }
    },
    components: {
      ShoppingCar,
      MyOwn,
      MyClassify
    },
    methods: {
      ledTo(){
        var target = event.currentTarget,
          children = $(target).children('.nav-name')[0];
        $(target).css('background', '#333').siblings().css('background', '#404042');
        $(target).children('.nav-name').css('color', '#fff').parent().siblings().children('.nav-name').css('color', '#949494');
        if (children.innerHTML == '首页') {
          this.left = 0;
          $(target).children('.nav-icon').children('img').attr('src', require('../assets/home/footer/home_hight.png'));
          $('.classiy').attr('src', require('../assets/home/footer/classify_logo.png'));
          $('.shoppingCar').attr('src', require('../assets/home/footer/shoppingCar_logo.png'));
          $('.myOwn').attr('src', require('../assets/home/footer/myOwn_logo.png'));
          $('.progress').animate({left: this.left});
        } else if (children.innerHTML == '分类') {
          this.left = 1.6 + 'rem';
          $(target).children('.nav-icon').children('img').attr('src', require('../assets/home/footer/classify_hight.png'));
          $('.home').attr('src', require('../assets/home/footer/home.png'));
          $('.shoppingCar').attr('src', require('../assets/home/footer/shoppingCar_logo.png'));
          $('.myOwn').attr('src', require('../assets/home/footer/myOwn_logo.png'));
          $('.progress').animate({left: this.left});
        } else if (children.innerHTML == '购物车') {
          this.left = 3.2 + 'rem';
          $(target).children('.nav-icon').children('img').attr('src', require('../assets/home/footer/shoppingCar_hight.png'));
          $('.home').attr('src', require('../assets/home/footer/home.png'));
          $('.classiy').attr('src', require('../assets/home/footer/classify_logo.png'));
          $('.myOwn').attr('src', require('../assets/home/footer/myOwn_logo.png'));
          $('.progress').animate({left: this.left});
        } else if (children.innerHTML == '我的') {
          this.left = 4.8 + 'rem';
          $(target).children('.nav-icon').children('img').attr('src', require('../assets/home/footer/myOwn_hight.png'));
          $('.home').attr('src', require('../assets/home/footer/home.png'));
          $('.classiy').attr('src', require('../assets/home/footer/classify_logo.png'));
          $('.shoppingCar').attr('src', require('../assets/home/footer/shoppingCar_logo.png'));
          $('.progress').animate({left: this.left});
        }
      }
    }

  }
</script>
