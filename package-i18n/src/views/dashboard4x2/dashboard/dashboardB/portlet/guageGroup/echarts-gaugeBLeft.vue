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
        colors:[$c.cyl5,$c.bll5],
        data:45,
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      this.chartOption.series[1].data[0].value=this.chartData.data;
    },
    processOption(){
      const {getColor,chartData}=this,
            {colors}=chartData
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
          text:this.$t(`dashboard4x2B.p2.item1`),
          left:'62%',
          top:'55%',
          textStyle:{ color:colors[0], fontSize:14, fontWeight:"bold" },
        },
        series: [
          {
            name: "",
            type: "gauge",
            center: ["60%", "50%"],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 315,
            endAngle: 45,
            axisLine: {
              show: true,
              lineStyle: { width: 1, color: [ [1, "transparent"] ], },
            },
            axisLabel: { show: true, color: getColor("staFC"), fontSize: 12, distance: -20, },
            axisTick: { show: true, splitNumber: 5, length: -10, lineStyle: { color: getColor("lineAX"), width: 1, }, },
            splitLine: { show: true, length: -15, lineStyle: { color: getColor("lineSP"), width: 1 }, },
          },
          {
            type: "gauge",
            radius: '60%',
            center: ["60%", "50%"],
            splitNumber: 0, //刻度数量
            startAngle: 315,
            endAngle:45 ,
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                color: [
                    [ 1, new echarts.graphic.LinearGradient( 0, 0, 1, 0, [{ offset: 0, color: colors[0], }, { offset: 1, color:  colors[1], } ] ) ],
                ],
              },
            },
            //分隔线样式。
            splitLine: { show: false, },
            axisLabel: { show: false, },
            axisTick: { show: false, },
            pointer: { show: true, length: "80%", width: "2%", itemStyle: {color:colors[0]}},
            // title: { show: true, offsetCenter: [0, "60%"], fontWeight: "bold", color: "red", fontSize: 30, },
            //仪表盘详情，用于显示数据。
            detail: { show: true, offsetCenter: ['40%', "0%"], fontSize: 40, color: colors[0]},
            data: [{value:0,}],
          }
        ],
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({actual:[4,8], pickType:"cho" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
