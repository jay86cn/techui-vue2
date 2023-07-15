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
      legend:['山丘地區', '平原地區', '山前傾向', '河川激流'],
      xAxis:['行政區1', '行政區2', '行政區3', '行政區4', '行政區5', '行政區6', '行政區7', '行政區8', '行政區9', '行政區10', '行政區11', '行政區12'],
      colors:[$c.aql5,$c.cyl5,$c.bll5,$c.inl3,],
      data:[
        [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240],
        [168, 181, 134, 126, 134, 190, 230, 210,220,179,123, 120, 132, 101],
        [230, 210,220,179,123, 120, 132, 101, 168, 181, 134, 126, 134, 190],
        [190, 230, 210,220,179,123, 120, 132, 101,168, 181, 134, 126, 134],
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
            color: colors[i],
            borderRadius: 5
          },
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: $c.fade(colors[i],1)
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
          itemGap: 13,
          data: [],
          left: 'center',
          top: '35',
        },
        grid: {
          left: '5%',
          right: '8%',
          bottom: '10%',
          top: "38%",
          containLabel: true
        },
        yAxis: {
          type: 'value',
          splitNumber: 2,
        },
        xAxis: {
          type: 'category',
          //boundaryGap: false,
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
      chartData.colors=getPalette({ actual:4, palette:"alt" })
    }
  },
  mounted() {
    
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
