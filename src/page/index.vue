<template>
  <div class="view">
    <banner></banner>
    <entrance></entrance>
    <classify></classify>
    <fruit></fruit>
    <meat></meat>
    <corn></corn>
    <navTo></navTo>
  </div>
</template>

<script>
  import {Banner, Entrance, Classify, Fruit, Meat, Corn, NavTo} from '../components'


  export default{
    data(){
      return {}
    },
    components: {
      Banner,
      Entrance,
      Classify,
      Fruit,
      Meat,
      Corn,
      NavTo,

    }
  }
</script>
