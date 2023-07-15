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
        legend:['超採區面積', '可開採量'],
        xAxis:['超採區1', '超採區2', '超採區3', '超採區4', '超採區5', '超採區6', '超採區7', '超採區8', '超採區9', '超採區10'],
        colors:[$c.bll4,$c.aql4,$c.ipl3,$c.cbl3,],
        data:[
          [235, 210, 187, 212, 278, 220, 320, 302, 301, 334],
          [68, 121, 34, 56, 23, 120, 132, 101, 134, 90]
        ],
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
        let type;
        if(i==0){type='bar'}else{type='line'}
        processedData.push({
          name: legend[i],
          type: type,
          //stack: '02',
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
          areaStyle: {},
          data: data[i]
        })
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          //show:false,
          data: [],
          top:"5",
          right:60,
        },
        toolbox: {
          //y: 'top',
          //top:0,
          feature: {
            magicType: {
              type: ['line', 'bar']
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
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:2,pickType:"rdm" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
