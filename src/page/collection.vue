<template>
  <div class="view">
    <collect-nav></collect-nav>
    <router-view>
      <collection-item-goods></collection-item-goods>
    </router-view>
    <router-view>
      <collection-item-shop></collection-item-shop>
    </router-view>
  </div>
</template>


<script>

  import {CollectNav, CollectionItemGoods,CollectionItemShop} from '../components'

  export default{
    data(){
      return {}
    },
    components: {
      CollectNav,
      CollectionItemGoods,
      CollectionItemShop
    }
  }

</script>
