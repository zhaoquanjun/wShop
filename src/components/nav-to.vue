<template>
  <div class="footer-container">
    <div class="nav">
      <router-link to="/" tag="li" class="navTo" active-class="activeBg" exact>
        <router-link to="/" active-class="homeCur " class="nav-icon home_bg" exact>
        </router-link>
        <router-link to="/" class="nav-name" active-class="active" exact>首页</router-link>
        <router-link to="/" class="progress" active-class="show" exact></router-link>
      </router-link>
      <router-link to="/MyClassify" tag="li" class="navTo" active-class="activeBg">
        <router-link to="/MyClassify" active-class="classifyCur " class="nav-icon classify_bg">
        </router-link>
        <router-link to="/MyClassify" class="nav-name" active-class="active">分类</router-link>
        <router-link to="/MyClassify" class="progress" active-class="show"></router-link>
      </router-link>
      <router-link to="/ShoppingCar" tag="li" class="navTo" active-class="activeBg">
        <router-link to="/ShoppingCar" active-class=" " class="nav-icon shopping_bg">
        </router-link>
        <router-link to="/ShoppingCar" class="nav-name" active-class="active">购物车</router-link>
        <router-link to="/ShoppingCar" class="progress" active-class="show"></router-link>
      </router-link>
      <router-link to="/MyOwn" tag="li" class="navTo" active-class="activeBg">
        <router-link to="/MyOwn" active-class="myCur " class="nav-icon myOwn_bg">
        </router-link>
        <router-link to="/MyOwn" class="nav-name" active-class="active">我的</router-link>
        <router-link to="/MyOwn" class="progress" active-class="show"></router-link>
      </router-link>
    </div>

  </div>

</template>
<script>

  export default{
    data(){
      return {
        leftO: 0
      }
    },
    methods: {},


  }
</script>
