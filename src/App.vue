<template>
  <div id="app">
    <el-header>
      <h1 class="nav-h1" id="navh1">romeo's web</h1>
      <el-menu router :default-active="$route.path" class="el-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">home</el-menu-item>
        <el-menu-item index="/tabs">element-ui</el-menu-item>
        <el-menu-item index="/echarts">echarts</el-menu-item>
      </el-menu>
    </el-header>
    <div class="main-content">
      <router-view/>
    </div>
    <el-footer>
          <span>@2018 Romeo</span>
          <ul class="footer-ul">
            <li>Contact us</li>
            <li>Address</li>
          </ul>
    </el-footer>
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
}

.el-header {
  position: fixed !important;
  height: 80px !important;
  line-height: 80px;
  z-index: 3;
  border: 1px solid #e6e6e6;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  text-align: center;
}

.nav-h1 {
  margin: 0;
  margin-left: 10px;
  float: left;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

.el-menu {
    position: absolute;
    right: 10px;
    top: 10px;
    border: 0px;
    margin: auto;
    text-align: center;
}

.el-menu-item:hover {
    background-color: rgb(204, 204, 204) !important;
}

.el-menu-item a {
  text-decoration: none!important;
}

.main-content {
  margin-top: 80px;
  z-index: 1;
}

.el-footer {
  color: #fff;
  background-color: #4d4d48;
  padding: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.footer-ul {
  margin: 0;
  padding-left: 0;
}

.footer-ul li {
  list-style-type: none;
  display: inline-block;
  margin: 0 10px;
}
</style>
