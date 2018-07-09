<template>
    <el-tabs type="border-card">
        <el-tab-pane label="echarts入门示例"><echartdemo class="block"/></el-tab-pane>
        <el-tab-pane label="南丁格尔图"><nightingale class="block"/></el-tab-pane>
        <el-tab-pane label="嵌套环形图"><pieNest class="block"/></el-tab-pane>
        <el-tab-pane label="散点图"><scatter class="block"/></el-tab-pane>
        <el-tab-pane label="力引导布局图"><forceGraph class="block"/></el-tab-pane>
    </el-tabs>
</template>


<script>
import echartdemo from '@/components/echart-first'
import nightingale from '@/components/nightingale'
import pieNest from "@/components/pieNest";
import scatter from "@/components/scatter-aqi-color";
import forceGraph from "@/components/force-graph";
export default {
  components: {
    echartdemo,
    nightingale,
    pieNest,
    scatter,
    forceGraph
  }
}
</script>
