<template>
    <el-tabs type="border-card">
        <el-tab-pane label="级联选择器"><cascader/></el-tab-pane>
        <el-tab-pane label="滑块"><slider/></el-tab-pane>
        <el-tab-pane label="上传"><upload class="block"/></el-tab-pane>
        <el-tab-pane label="树形控件"><tree/></el-tab-pane>
        <el-tab-pane label="卡片"><card/></el-tab-pane>
        <el-tab-pane label="消息提示"><message class="block"/></el-tab-pane>
        <el-tab-pane label="折叠面板"><collapse/></el-tab-pane>
        <el-tab-pane label="步骤条"><steps/></el-tab-pane>
        <el-tab-pane label="面包屑"><breadcrumb/></el-tab-pane>
        <el-tab-pane label="echarts入门示例"><echart class="block"/></el-tab-pane>
    </el-tabs>
</template>


<script>
import cascader from '@/components/cascader'; 
import slider from '@/components/slider'
import upload from '@/components/upload'
import tabs from '@/components/tabs'
import breadcrumb from '@/components/breadcrumb'
import card from '@/components/card'
import tree from '@/components/tree'
import message from '@/components/message'
import steps from '@/components/steps'
import collapse from '@/components/collapse'
import echart from '@/components/echart-first'
export default {
  name: 'HelloWorld',
  components: {
    cascader, 
    slider,
    upload,
    tabs,
    breadcrumb,
    card,
    tree,
    message,
    steps,
    collapse,
    echart,
  }
}
</script>

<style>
.steps {
    text-align: left;
}

.echart {
    margin: auto;
}
</style>
