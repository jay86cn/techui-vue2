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
      legend:['水位'],
      xAxis:['行政区1', '行政区2', '行政区3', '行政区4', '行政区5', '行政区6', '行政区7', '行政区8', '行政区9', '行政区10', '行政区11', '行政区12'],
      colors:[$c.orl4,$c.aql3,],
      data:[
        [168, 181, 134, 126, 134, 190, 230, 210,220,179,123, 120, 132, 101, ],
      ],
    },
    chartOption:{ }
    }
  },
  computed: {},
  props: ['tabActive'],
  watch:{
    tabActive(val){
      let processData=[];
      let tempData=this.randomData({
        min:1,
        max:999,
        length:14,
        group:1
      })[0]
      tempData.forEach(item=>{
        processData.push(item);
      })
      this.chartData.data[0]=processData;
      this.processData();
      this.chartOption.update=true;
    }
  },
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[]
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
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: $c.fade(colors[i],.9)
            }, {
              offset: 0.8,
              color: $c.fade(colors[i],.1)
            }], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
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
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show:false,
          orient: 'vertical',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 5,
          right: '10',
          top: '10',
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
      chartData.colors=getPalette({ actual:1,pickType:"rdm" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
