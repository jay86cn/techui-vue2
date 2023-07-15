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
        legend:['數據1','數據2','數據3'],
        xAxis:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        colors:[$c.cyl4,$c.rel4,$c.aql3,],
        data:[
          [100, 200, 400, 500, 400, 200, 100, 100, 200, 400, 200,100],
          [100, 200, 300, 400, 300, 200, 50, 50, 100, 200, 100,50],
          [ 200, 300, 400, 300, 200, 50, 50, 100, 100, 100,50,50]
        ]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: 'line',
          stack: '01',
          barWidth:15,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 5
          },
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: $c.fade(colors[i],1)
            }, {
              offset: 0.8,
              color: $c.fade(colors[i],.3)
            }], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
          },
          itemStyle:{
            color:colors[i]
          },
          data: data[i]
        })
      })
      this.chartOption.legend.data=legend;
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // icon: 'rect',
          // itemWidth: 14,
          // itemHeight: 5,
          // itemGap: 13,
          data: [],
          right: '5%',
          top: '20',
        },
        grid: {
          left:'3%',
          right:'3%',
          bottom:'8%',
          top:"60",
          containLabel: true
        },
        yAxis:{
          type: 'value',
          splitNumber: 6,
          splitLine: {
            show:true,
          },
          axisLabel: {
            align: 'right'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLabel: {
            align: 'center'
          }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:3,pickType:"seq",palette:"alt" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
