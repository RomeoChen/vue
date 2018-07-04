<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value"></el-slider>
  </div>
</template>
    
<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>

<style>
  .block {
    padding: 30px 24px;
    border: 1px solid #eff2f6;
  }
  .demonstration {
    line-height: 40px;
  }
  .el-slider {
    width: 70%;
    float: right;
    margin-right: 20px; 
  }
</style>
