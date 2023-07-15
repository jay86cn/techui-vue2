<template>
<echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
components: { },
mixins: [themeChart],
  data() {
    return {
    chartData:{
      legend:['埋深'],
      colors:[$c.pul3,],
      data:[235, 210, 187, 212, 278, 220, 320, 302, 301, 334],
    },
    chartOption:{ }
    }
  },
  computed: {},
  props: ['barColor'],
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:200,
        length:10,
        group:1
      })
      this.chartData.data=dr[0]
      this.processData();
      this.chartOption.update=true;
    }
  },
  methods: {
    processData(){
      const {barColor}=this
      let {colors,xAxis,data}=this.chartData,
          processedData=[],
          color=barColor?barColor:colors[0]
      processedData.push({
        type: "line",
        symbolSize: 0,
        label: { show: false, },
        itemStyle:{
          color: $c.fade(color,.1),
          borderRadius: 3,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: $c.fade(color,.9)
          }, {
            offset: 0.8,
            color: $c.fade(color,.5)
          }], false),
          // shadowcolor: $c.fade(color,.3),
          // shadowBlur: 10
        },
        smooth: true,
        data: data
      })
      this.chartOption.series=processedData;
      this.chartOption.xAxis.data=xAxis;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
        yAxis:{
          type: 'value',
          axisLine: {show:false},
          splitLine: {show:false},
          axisLabel: {show:false}
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLine: {show:false},
          splitLine: {show:false},
          axisLabel: {show:false,}
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:1,pickType:"rdm" })
    }
  },
  mounted() {
    this.chartData.data=this.randomData({
        min:100,
        max:200,
        length:15,
        group:1
      })[0]
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
