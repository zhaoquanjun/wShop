<template>
  <div class="view">
    <order-tab></order-tab>
    <router-view>
      <all-entrance></all-entrance>
    </router-view>
    <router-view>
      <wait-pay-entrance></wait-pay-entrance>
    </router-view>

  </div>
</template>


<script>

  import {OrderTab, AllEntrance, WaitPayEntrance} from '../components'

  export default{
    data(){
      return {}
    },
    components: {
      OrderTab,
      AllEntrance,
      WaitPayEntrance
    }
  }

</script>
