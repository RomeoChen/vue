<template>
  <div>
    <div class="container title-container">
      <h1>Hi everyone</h1>
      <h4>This is amazing!</h4>
      <el-button type="primary" round>enter new world</el-button>
    </div>
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="6">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-button icon="el-icon-search" circle></el-button>
              </el-col>
              <el-col :span="6">
                <el-button icon="el-icon-mobile-phone"/>
              </el-col>
            </el-row>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-button icon="el-icon-circle-plus-outline" circle></el-button>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-goods"/>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-button icon="el-icon-time" circle></el-button>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-picture-outline"/>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-button icon="el-icon-location-outline" circle></el-button>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-star-off"/>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <h2>Cards</h2>
      <el-row>
        <el-col :xs="24" :sm="12">
        </el-col>
        <el-col :xs="24" :sm="12">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style>
.container {
  padding: 20px 0;
}

.title-container {
  color: white;
  background: linear-gradient(10deg,red,blue);
  text-align: center;
}

.container h1 {
  line-height: 1.6;
}

.container h2 {
  margin-left: 20px;
}

.container h4 {
  line-height: 2;
}

/* 按钮的阴影 */
.el-button {
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  background-color: transparent;
  border: 1px solid white;
}

/* 常规文字颜色 */
.gray {
  color: #606266;
}

/* 上下隔10px */
.el-row {
  padding: 10px 0;
}
</style>
