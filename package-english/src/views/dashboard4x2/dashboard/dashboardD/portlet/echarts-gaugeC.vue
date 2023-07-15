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
        name: "Alarm Noise Reduction",
        value: 45,
        colors:['#5c53de','#18c8ff'],
        pos: ['50%', '50%'],
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor,chartData}=this,
            {colors}=chartData
      let data=chartData;
      this.chartOption.series.push({
        name: 'Alarm noise reduction ratio',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [data],
        radius: '145%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        axisLine: {
          lineStyle: {
            width: 30, 
            offset: 0,
            color: [
              [ data.value/100, new echarts.graphic.LinearGradient(0, 0, 1, 0, [ 
                { offset: 0, color: colors[0] }, 
                { offset: 1, color: colors[1] } 
              ])],
              [ 1, $c.hsll(colors[1],.15)]
            ]
          }
        },
        axisLabel:{show: false},
        axisTick:{lineStyle: {color: getColor("techDecoB")}},
        splitLine:{ length:20,lineStyle: {width:1,color: getColor("lineAX")}},
        pointer:{show: false, length: '80%' , width: 5 },
        itemStyle:{ color: $c.bll8 },
        title: { show: true, offsetCenter: [0, '-10%'], color: getColor("staFC"), fontSize: 18, },
        detail: {
          show: true,
          offsetCenter: [0, '-40%'],
          color: getColor("staFC"),
          formatter: function(params) { return params+"%" },
          fontSize: 25 
        }
      })
      
      //this.chartOption.series[1].data[0].value=this.chartData.data;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
          show:false,
          text:"",
          left:'62%',
          top:'55%',
          textStyle:{ color:getColor("staFC"), fontSize:14, fontWeight:"bold" },
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [],
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
