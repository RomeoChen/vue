<template>
  <div id="app">
    <el-header>Header</el-header>
    <div class="main-content">
      <router-view/>
    </div>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
}
.main-content {
  margin-top: 60px;
}
</style>
