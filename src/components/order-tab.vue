<template>
  <div class="tab">
    <router-link class="led" to="/AllEntrance" tag="ul">
      <p>全部</p>
      <router-link class="tab-progress" to="/AllEntrance" tag="li" active-class="show"></router-link>
    </router-link>
    <router-link class="led" to="/WaitPay" tag="ul">
      <p>待付款</p>
      <router-link class="tab-progress" to="/WaitPay" tag="li" active-class="show"></router-link>
    </router-link>
    <router-link class="led" to="/WaitPost" tag="ul">
      <p>待发货</p>
      <router-link class="tab-progress" to="WaitPost" tag="li" active-class="show"></router-link>
    </router-link>
    <router-link class="led" to="/WaitGet" tag="ul">
      <p>待收货</p>
      <router-link class="tab-progress" to="/WaitGet" tag="li" active-class="show"></router-link>
    </router-link>
    <router-link class="led" to="/WaitCommit" tag="ul">
      <p>待评价</p>
      <router-link class="tab-progress" to="/WaitCommit" tag="li" active-class="show"></router-link>
    </router-link>
  </div>
</template>

<script>

  import {AllEntrance} from '../components'
  export default{
    data(){
      return {

      }
    },
    components: {
      AllEntrance
    }
  }


</script>
