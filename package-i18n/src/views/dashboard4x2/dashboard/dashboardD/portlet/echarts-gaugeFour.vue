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
        legend:['MeterA','MeterB','MeterC','MeterD'],
        colors:[$c.aql4,$c.orl4,$c.rel4],
        data:[60,70,30,80]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    getStyle(value){
      if (value <= 60) {//aq
        return {
          splitNumber: 3, //刻度数量
          min: 0,
          max: 60,
          startAngle: 225,
          endAngle: 64,
          color: [[1, this.chartData.colors[0]]]
        }
      } else if (value >= 80) {//red
        return {
          splitNumber: 1, //刻度数量
          min: 80,
          max: 100,
          startAngle: 9,
          endAngle: -45,
          color: [[1, this.chartData.colors[2]]]
        }
      } else {//or
        return {
          splitNumber: 1, //刻度数量
          min: 60,
          max: 80,
          startAngle: 64,
          endAngle: 9,
          color: [[1, this.chartData.colors[1]]]
        }
      }
    },
    getCenter(index){
      switch(index){
        case 0:
          return ['25%','30%']
          break;
        case 1:
          return ['75%','30%']
          break;
        case 2:
          return ['25%','75%']
          break;
        case 3:
          return ['75%','75%']
          break;
        
        
      }
      
    },
    processData(){
      const {getColor}=this
      let {legend,colors,data}=this.chartData,
          processedData=[]
      
      legend.forEach((item,i)=>{
        this.chartData.legend[i]=this.$t(`dashboard4x2D.p4.legend${i+1}`)
        processedData.push({
          name: this.$t(`dashboard4x2D.p4.legend${i+1}`),
          type: 'gauge',
          splitNumber: 5, //刻度数量
          min: 0,
          max: 100,
          radius: '40%', //图表尺寸
          center:this.getCenter(i),
          axisLine: { show: true, lineStyle: { width: 1, shadowBlur: 0, color: [ [1, getColor("techDecoB")] ] } },
          axisTick: { show: true, lineStyle: { color: getColor("techDecoB"), width: 1 }, length: 8, splitNumber: 5 },
          splitLine: { show: true, length: 12, lineStyle: { color: getColor("lineAX"), } },
          axisLabel: {
            distance: 2,
            color: "#7887ae",
            fontSize: "0",
            formatter: function(e) {
              switch (e + "") { case "0": return "0%"; default: return e; }
            }
          },
          title: { show: true, 
            //offsetCenter: [0, "10%"], 
            color: getColor("staFC"), 
            fontSize: 16, 
          },
          pointer: { show: false },
          detail: { show: false },
          data: [ { name: legend[i], value: data[i] } ]
      })
      processedData.push(
        {
          name: this.$t(`dashboard4x2D.p4.legend${i+1}`),
          type: 'gauge',
          splitNumber: this.getStyle(data[i]).splitNumber, //刻度数量
          min: this.getStyle(data[i]).min,
          max: this.getStyle(data[i]).max,
          startAngle: this.getStyle(data[i]).startAngle,
          endAngle: this.getStyle(data[i]).endAngle,
          radius: '40%', //图表尺寸
          center:this.getCenter(i),
          axisLine: {
            show: true,
            lineStyle: { width: 1, shadowBlur: 0, color: this.getStyle(data[i]).color }
          },
          axisTick: {
            show: true,
            lineStyle: { color: 'auto', width: 1 },
            length: 8,
            splitNumber: 5
          },
          splitLine: {
            show: true,
            length: 12,
            lineStyle: { color: 'auto', }
          },
          axisLabel: { show: false },
          pointer: { show: 1, length: '70%', width: 2 ,itemStyle: {color: getColor("staFCW")}},
          detail: {
            // borderColor: '#fff',
            // shadowColor: '#fff', //默认透明
            shadowBlur: 5,
            offsetCenter: [0, '50%'], // x, y，单位px
            color: getColor("staFC"),
            fontSize: 14,
            formatter: '{value}%'
          },
          data:[{name:"",value:data[i]}]
        }
      )
    })
    this.chartOption.series=processedData;
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
      chartData.colors=getPalette({ actual:[8,3,1],pickType:"cho",palette:"alt"})
    }
  },
  mounted() {
		this.processData();
  }
}
</script>

<style lang="less">

</style>
