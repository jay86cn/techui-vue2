<template>
<echartsInit :chartOption="chartOption" @chartClick="chartClick"></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"

import symbols from "./svg"

export default {
components: { },
mixins: [themeChart],
data() {
  return {
    chartData:{
      xAxis: ['软件', '硬件', '服务', '安全', '广告', '专利', '许可', '投资'],
      colors:[$c.bll4,$c.aql4,$c.aql3,],
      data: [23, 40, 15, 12, 9, 7, 12, 5],
      symbolSize:[
         [20, 20],
         [18, 20],
         [18, 20],
         [18, 20],
         [20, 14],
         [16, 20],
         [20, 20],
         [20, 20],
      ]
    },
    chartOption:{ }
    }
  },
  computed: {},
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:5,
        max:50,
        length:8,
        group:1
      })
      this.chartData.data=dr[0]
      this.processData();
      this.chartOption.update=true;
    }
  },
  methods: {
    chartClick(val){
      let chartData=this.$tState.chartData;
      chartData.title=this.chartData.title+"-"+val.seriesName+"-"+val.name
      chartData.params=val
    },
    processData(){
      let {colors,xAxis,data,symbolSize}=this.chartData,
          processedData=[],subData=[]
      
      data.forEach((item,i)=>{
        subData.push({
          value: data[i],
          symbol: symbols['svg'+i],
          symbolSize:symbolSize[i]
        })
      })
      processedData.push({
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          opacity: 0.5
        },
        emphasis: {
          itemStyle: {
            opacity: 1
          }
        },
        data: data,
        z: 10
      },
      {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
        data: subData
      })
      this.chartOption.series=processedData;
      this.chartOption.xAxis.data=xAxis;

    },
    processOption(){
      const {getColor}=this,{colors}=this.chartData
      this.chartOption={
        update:false,
        title:{ text:"单位:万元", right:0, top:0, textStyle:{ color:getColor("staFCW"), fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
          }
        },
        grid: {
          left: '5%',
          right: '8%',
          bottom: '8%',
          top: "25%",
          containLabel: true
        },
        yAxis: {
          type: 'value',
          splitNumber: 3,
          splitLine: {
            show:true,
          },
          axisLabel: {
            show:false
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: [],
          axisTick: { show: false },
          axisLine: { show:false, },
          splitLine: { show:false, },
          axisLabel: {
            align: 'center'
          }
        },
        color:colors,
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:2})
    }
  },
  mounted() {
    // this.viewColor(this.chartData.colors)
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
