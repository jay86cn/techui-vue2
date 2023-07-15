<template>
<echartsInit :chartOption="chartOption" @chartClick="chartClick"></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
components: { },
mixins: [themeChart],
data() {
  return {
    chartData:{
      title:"Administrative area water",
      legend:['Industry', 'Agriculture'],
      xAxis:['District1', 'District2', 'District3', 'District4', 'District5', 'District6', 'District7', 'District8', 'District9', 'District10', 'District11', 'District12'],
      colors:[$c.bll4,$c.aql4,$c.aql3,],
      data:[
        [ 301, 334, 390, 330,300,240,235, 210, 187, 212, 278, 220, 320, 302,],
        [ 230, 210,220,179,123, 120, 132, 101,168, 181, 134, 126, 134, 190, ],
      ],
    },
    chartOption:{ }
    }
  },
  computed: {},
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:0,
        max:100,
        length:14,
        group:2
      })
      this.chartData.data[0]=dr[0]
      this.chartData.data[1]=dr[1]
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
      chartData.colors=getPalette({ actual:2,pickType:"rdm" })
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
