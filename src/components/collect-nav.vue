<template>
  <ul class="collect-nav">
    <router-link class="navItem" to="/CollectionItemGoods" replace tag="li">
      <p>宝贝</p>
      <router-link class="progress" to="/CollectionItemGoods" active-class="show" tag="li"></router-link>
    </router-link>
    <router-link class="navItem" to="/CollectionItemShop" replace tag="li">
      <p>店铺</p>
      <router-link class="progress" to="/CollectionItemShop" active-class="show" tag="li"></router-link>
    </router-link>
  </ul>
</template>
