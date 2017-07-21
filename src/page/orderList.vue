<template>
  <div class="view">
    <order-tab></order-tab>
    <router-view>
      <all-entrance></all-entrance>
    </router-view>
    <router-view>
      <wait-pay></wait-pay>
    </router-view>
    <router-view>
      <wait-post></wait-post>
    </router-view>
    <router-view>
      <wait-get></wait-get>
    </router-view>
    <router-view>
      <wait-commit></wait-commit>
    </router-view>
  </div>
</template>


<script>

  import {OrderTab, AllEntrance, WaitPay,WaitPost,WaitGet,WaitCommit} from '../components'
  export default{
    data(){
      return {}
    },
    components: {
      OrderTab,
      AllEntrance,
      WaitPay,
      WaitPost,
      WaitGet,
      WaitCommit
    }
  }

</script>
