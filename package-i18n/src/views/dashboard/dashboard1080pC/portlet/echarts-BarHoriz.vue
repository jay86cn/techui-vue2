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
      title:"overexploitation area",
      legend:['Level (meter)', 'Consumption (tons)'],
      yAxis:['Area1', 'Area2', 'Area3', 'Area4', 'Area5', 'Area6'],
      colors:[$c.bll4,$c.pum3,$c.rel4,],
      data:[
        [320, 302, 341, 374, 390, 450],
        [-120, -132, -101, -134, -190, -230],
      ],
    },
    chartOption:{ }
    }
  },
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:-400,
        max:400,
        length:6,
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
      let {legend,colors,yAxis,data}=this.chartData,
          processedData=[];
      yAxis.forEach((item,i)=>{
        this.chartData.yAxis[i]=this.$t(`dashboardC.l2.yAxis`)+(i+1)
      })
      legend.forEach((item,i)=>{
        this.chartData.legend[i]=this.$t(`dashboardC.l2.legend${i+1}`)
        processedData.push({
          name: this.$t(`dashboardC.l2.legend${i+1}`),//legend[i],
          type: 'bar',
          barWidth:10,
          stack: 'Total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3
          },
          data: data[i]
        })
      })
      this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;
      this.chartOption.yAxis.data=yAxis;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
        },
        legend: {
          //icon: 'rect',
          // orient: 'vertical',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 5,
          left: 'center',
          top: '30',
          textStyle: {
            //fontSize: 12,
            color: getColor("staFCW"),
          }
        },
        grid: {
          left: '5%',
          right: '10%',
          bottom: '8%',
          top: "25%",
          containLabel: true
        },
        xAxis: { 
          type: 'value',
          axisLabel: {
            align: 'center',
            interval:0,
            // rotate:45,
            // margin:20,
            // textStyle : { color :$c.blm3, align : 'center',fontSize :12 },
          }
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          data: [],
          axisLine: {
            show:true,
          },
          splitLine: {
            show:false,
          },
          axisLabel: {
            formatter: '{value}',
            align: 'right'
          }
        }
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
