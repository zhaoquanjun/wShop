<template>
  <div>
    <topHead></topHead>
    <myOrder></myOrder>
    <tool></tool>
    <navTo></navTo>
  </div>

</template>

<script>

  import {TopHead, MyOrder, Tool,  NavTo} from '../components'

  export default{
    data(){
      return {}
    },
    components: {
      TopHead,
      MyOrder,
      Tool,
      NavTo
    }
  }


</script>
