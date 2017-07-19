<template>
  <div class="backToTop">
    <img :src="imgP" alt="">
  </div>
</template>
<script>

  export default{
      data(){
          return {
              imgP:require('../assets/home/point.png')
          }
      }

  }
</script>
