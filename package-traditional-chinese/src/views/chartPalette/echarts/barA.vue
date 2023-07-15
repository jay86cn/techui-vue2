<template>
  <echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
components: { },
props:["colors","dataLength"],
mixins: [themeChart],
data() {
  return {
    chartData:{
      legend:[],
      xAxis:[],
      data:[ ],
    },
    chartOption:{}
    }
  },
  watch:{},
  computed: { },
  methods: {
    processData(){
      const {colors,dataLength,chartData,chartOption}=this
        // {legend,xAxis,data}=chartData
      const legend=[],xAxis=[],data=[]
      let dataR=this.randomData({
        min:100,
        max:6000,
        length:dataLength,
        group:colors.length
      })
      if(colors.length>0){
        colors.forEach((item,i)=>{
          legend.push("数据"+i)
          data.push(dataR[i])
        })
        for(let i=0; i<dataLength;i++){
          xAxis.push("X轴"+i)
        }
      }

      let processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: 'bar',
          // stack: '01',
          // barWidth:15,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: colors[i],
            borderRadius: 3
          },
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: $c.fade(colors[i],.6)
            }, {
              offset: 0.8,
              color: $c.fade(colors[i],.1)
            }], false),
            shadowColor: $c.fade(colors[i],1),
            shadowBlur: 10
          },
          data: data[i]
        })
      })
      chartOption.legend.data=legend;
      chartOption.series=processedData;
      chartOption.xAxis.data=xAxis;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        resize:true,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          //show:false,
          data: [],
          top:"5",
          left:0,
        },
        toolbox: {
          //y: 'top',
          //top:0,
          feature: {
            magicType: {
              type: ['line', 'bar','stack']
            }
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: "15%",
          containLabel: true
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            align: 'right'
          }
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            align: 'center'
          }
        },
        series: []
      }
      this.processData();
    },
  },
  mounted() {
    this.processOption();
  }
}
</script>



<style lang="less">
</style>
