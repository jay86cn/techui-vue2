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
        legend:['数据1', '数据2', '数据3'],
        xAxis:[],
        colors:[$c.aql3,$c.bll6,$c.bll3,],
        data:[],
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors}=this.chartData,
          xAxis=[],
          data=[],
          processedData=[]
      
      data.push([],[],[])
      for (var i = 1; i < 24; i++) {
          xAxis.push('' + i);
          data[0].push(parseInt((Math.sin(i / 5) * (i / 100) + i / 100) * 150));
          data[1].push(parseInt((Math.cos(i / 5) * (i / 100) + i / 100) * 150));
          data[2].push(parseInt((Math.cos(i / 3) * (i / 100) + i / 100) * 150));
      }
      
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: 'line',
          //stack: '01',
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
          areaStyle: i==0?{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: $c.fade(colors[i],.9)
            }, {
              offset: 0.8,
              color: $c.fade(colors[i],.3)
            }], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
          }:null,
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
          //icon: 'rect',
          // itemWidth: 14,
          // itemHeight: 5,
          // itemGap: 13,
          data: [],
          right: '5%',
          top: '20px',
        },
        grid: { left: '5%', right: '5%', bottom: '5%', top: "15%", containLabel: true },
        yAxis: {
          type: 'value',
          splitNumber: 6,
          axisLabel: { align: 'right' }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLabel: { align: 'center' }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:3,pickType:"rdm"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
