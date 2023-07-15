<template>
  <echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
components: { },
props:["colors","dataLength"],
mixins: [themeChart],
data() {
  return {
    chartData:{
      legend:[],
      xAxis:[],
      data:[ ],
    },
    chartOption:{}
    }
  },
  watch:{},
  computed: { },
  methods: {
    processData(){
      const {colors,dataLength,chartData,chartOption}=this
        // {legend,xAxis,data}=chartData
      const legend=[],xAxis=[],data=[]
      
      let dataR=this.randomData({
        min:2000,
        max:6000,
        length:colors.length,
        group:1
      })[0]

      if(colors.length>0){
        colors.forEach((item,i)=>{
          legend.push("Data"+i)
        })
      }

      let processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          value:dataR[i],
          name:legend[i],
          itemStyle:{
            color:colors[i]
          }
        })
      })
      chartOption.series[0].data=processedData;
      chartOption.legend.data=legend;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        resize:true,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          orient: 'horizontal',//vertical
          show:true,
          x: 'center',
          y:'bottom',
          textStyle: {
            color: getColor("staFC")
          },
          //width:"200px",
          data:[]
        },
        series: [{
          name:'数据类别',
          type:'pie',
          radius: ['50%', '80%'],
          center: ['50%', '42%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'outside',
          },
          itemStyle: {
            borderRadius: 10,
            borderColor:getColor("techBG"),
            borderWidth: 5
          },
          emphasis: {
            label:{
              show: false,
              fontSize: '20',
              color:$c.gyd5,
            }
          },
          labelLine: {
            show: false
          },
          data:[]
        }]
      }
      this.processData();
    },
  },
  mounted() {
    this.processOption();
  }
}
</script>



<style lang="less">
</style>
