<template>
  <el-container>
  <el-header>Header</el-header>
  <el-main><tabs/></el-main>
  <el-footer>Footer</el-footer>
</el-container>

</template>

<script>
import tabs from '@/components/tabs'
export default {
  name: 'HelloWorld',
  components: {
    tabs,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
