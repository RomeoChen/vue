<template>
    <div id="nightingale" style="width:500px;height:500px;"></div>
</template>

<script>
export default {
  mounted(){
    let echarts = require('echarts/lib/echarts')// 引入基本模板，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块(可以按需引入的模块列表见见本博客底部)
    // 例如：引入柱状图
    // require('echarts/lib/chart/bar');
    let myChart=echarts.init(document.getElementById('nightingale'));
    myChart.setOption({
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'},
            ],
            // 南丁格尔图通过半径表示数据大小
            roseType: 'angel',
            itemStyle: {
                shadowBlur: 200,// 阴影大小
                shadowOffsetX: 0,// 阴影水平方向上的偏移
                shadowOffsetY: 0,//阴影垂直方向上的便宜
                shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影颜色：半透明
                // emphasis是鼠标hover时候的高亮样式，即悬停时出现阴影
                // emphasis: {
                //     shadowBlur: 200,
                //     shadowColor: 'rgba(0,0,0,0.5)',
                // },
                color: '#c23531',
            },
        }],
        backgroundColor: '#2c343c',
        // 文本样式
        textStyle: {
            color: 'rgba(255,255,255,0.3)'
        },
        // labelLine: 视觉引导线样式
        labelLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        // visualMap: 将数值大小映射到明暗度
        visualMap: {
            // 不显示 visualMap 组件，只用于明暗度的映射
            show: false,
            // 映射的最小值为80
            min: 80,
            // 映射的最大值为700
            max: 700,
            inRange: {
                // 明暗度的范围是 0 到 1
                colorLightness: [0, 1],
            }
        },
    })
  },
}

</script>


<style>
</style>
