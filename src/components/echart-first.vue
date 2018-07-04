<template>
    <div id="myChart" style="width:500px;height:500px;"></div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    let echarts = require('echarts/lib/echarts')// 引入基本模板，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块(可以按需引入的模块列表见见本博客底部)
    // 例如：引入柱状图
    // require('echarts/lib/chart/bar');
    let myChart=echarts.init(document.getElementById('myChart'));
    myChart.setOption({
        title: {
        text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    })
  },
}

</script>


<style>
</style>
