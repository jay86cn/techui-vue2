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
        legend:['Budget Allocation','Actual Cost'],
        colors:[$c.bll5,$c.cyl5,],
        data:[
          [5000, 14000, 28000, 31000, 42000, 21000],
          [4300, 10000, 27000, 35000, 50000, 19000],
        ],
        indicator: [
          { name: 'Sales', max: 6500,},
          { name: 'Management', max: 16000, },
          { name: 'Technology', max: 30000, },
          { name: 'Customer Service', max: 38000, },
          { name: 'R&D', max: 52000, },
          { name: 'market', max: 25000, }
        ],
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,data,indicator}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: "radar",
          symbol: "circle",
          color:colors[i],
          symbolSize: 10,
          areaStyle: {
            color: $c.fade(colors[i],.4)
          },
          // itemStyle: {
          //   color: $c.fade(colors[i],.9),
          //   bordercolor: $c.fade(colors[i],.3),
          //   borderWidth: 10,
          // },
          lineStyle: {
            color: $c.fade(colors[i],.9),
            width: 2
          },
          data: [data[i]]
        })
      })
      this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;
      this.chartOption.radar.indicator=indicator;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
          show:false,
        },
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          show:true,
          top:25,
          data: []
        },
        radar: {
          center: ["50%", "53%"],
          radius: "60%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["transparent"]
            }
          },
          axisLabel: {
            show: false,
            fontSize: 12,
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            }
          },
          // shape: 'circle',
          axisName: {
            fontSize:14,
            borderWidth: 1,
            borderRadius: 0,
          },
          indicator: []
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
