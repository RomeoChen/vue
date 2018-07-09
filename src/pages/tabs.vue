<template>
  <div>
    <div id="todos" class="todos-box">
      <h1>{{ title }}</h1>
      <ul class="todos-ul">
        <li v-for = "(todo, index) in todos" :id="index"
          :class="{'checked': todo.done}">
          <label>{{ index + 1 }}.{{ todo.value }}</label>
        </li>
      </ul>
    </div>
    <el-tabs type="border-card" class="elements">
        <el-tab-pane label="级联选择器"><cascader/></el-tab-pane>
        <el-tab-pane label="滑块"><slider/></el-tab-pane>
        <el-tab-pane label="上传"><upload class="block"/></el-tab-pane>
        <el-tab-pane label="树形控件"><tree/></el-tab-pane>
        <el-tab-pane label="卡片"><card/></el-tab-pane>
        <el-tab-pane label="消息提示"><message class="block"/></el-tab-pane>
        <el-tab-pane label="折叠面板"><collapse/></el-tab-pane>
        <el-tab-pane label="步骤条"><steps/></el-tab-pane>
        <el-tab-pane label="面包屑"><breadcrumb/></el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import cascader from '@/components/cascader'
import slider from '@/components/slider'
import upload from '@/components/upload'
import breadcrumb from '@/components/breadcrumb'
import card from '@/components/card'
import tree from '@/components/tree'
import message from '@/components/message'
import steps from '@/components/steps'
import collapse from '@/components/collapse'
import echart from '@/components/echart-first'
import nightingale from '@/components/nightingale'
export default {
  name: 'tabs',
  data () {
    return {
      title: 'vue-todos',
      todos: [
        {value: '阅读一本关于vue的书', done: false},
        {value: '补充示例代码', done: true},
        {value: '写日报', done: false}
      ]
    }
  },
  components: {
    cascader,
    slider,
    upload,
    breadcrumb,
    card,
    tree,
    message,
    steps,
    collapse,
    echart,
    nightingale,
  }
}
</script>

<style>
.elements{
  text-align: center;
}

.todos-box {
  background: linear-gradient(50deg,#E6A23C,#F56C6C);
  color: white;
}

.todos-box h1 {
  text-align: center;
  padding: 30px 0 0 0;
  font-size: 2em;
  font-weight: 100;
  /* color: white */
}

.todos-ul {
  margin: 0 100px;
  border: 1px solid grey;
  font-size: 1.5em;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  padding: 20px;
  list-style: none;
}

.todos-ul li {
  padding: 10px;
}

.steps {
    text-align: left;
}

.echart {
    margin: auto;
}
</style>
