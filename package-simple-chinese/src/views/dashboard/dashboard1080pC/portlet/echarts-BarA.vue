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
      title:"超采区关系",
      legend:['可开采量', '超采区面积'],
      xAxis:['超采区1', '超采区2', '超采区3', '超采区4', '超采区5', '超采区6'],
      colors:[$c.aql4,$c.cyl4,$c.rel4],
      data:[
        [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240,345],
        [93, 85, 22, 76, 13, 20, 35, 10,20,9,13, 10, 32, 15,88 ],
      ],
    },
    chartOption:{}
    }
  },
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:500,
        length:15,
        group:2
      })
      this.chartData.data[0]=dr[0]
      this.chartData.data[1]=dr[1]
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {},
  methods: {
    chartClick(val){
      let chartData=this.$tState.chartData;
      chartData.title=this.chartData.title+"-"+val.seriesName+"-"+val.name
      chartData.params=val
    },
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[],
          type="bar",
          yAxisIndex=0;
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: type,
          //stack: '01',
          barWidth:15,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3,
          },
          z:5-i,
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
          yAxisIndex:yAxisIndex,
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
          //icon: 'rect',
          orient: 'vertical',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 5,
          right: '10',
          top: '10',
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '8%',
          top: "25%",
          containLabel: true
        },
        yAxis:{
          type: 'value',
          // min: 0,
          // max: 300,
          //splitNumber: 6,
          position: 'left',
          splitLine: {
            show:true,
          },
          axisLabel: {
            formatter: '{value}',
            align: 'right'
          }
        }, 
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            align: 'center',
            interval:0,
            // rotate:45,
            // margin:20,
            // textStyle : { color :$c.blm3, align : 'center',fontSize :12 },
          }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:2,pickType:"rdm"})
    }
  },
  mounted() {
    this.processOption();
  }
}
</script>
<style lang="less">
</style>
