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
      yAxis:[],
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
      let dataR=[],legend=[],xAxis=[],yAxis=[],data=[]
      for(let i=0; i<dataLength*35;i++){
        let tempArry=[]
        for(let j=0; j<3;j++){
          if(j==0){
            tempArry.push(this.randomNumber(0,dataLength*5))
          }else if(j==1){
            tempArry.push(this.randomNumber(0,colors.length))
          }else if(j==2){
            tempArry.push(this.randomNumber(0,100))
          }
        }
        dataR.push(tempArry)
      }
      if(colors.length>0){
        for(let i=0; i<colors.length;i++){
          yAxis.push("y轴"+i)
        }
        for(let i=0; i<dataLength*5;i++){
          xAxis.push("X轴"+i)
        }
      }
      chartOption.legend.data=legend;
      chartOption.xAxis.data=xAxis;
      chartOption.yAxis.data=yAxis;
      chartOption.series[0].data=dataR;

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
          //show:false,
          data: [],
          top:"5",
          left:0,
        },
        visualMap: {
          top:0,
          min: 0,
          max: 100,
          calculable: true,
          inRange:{
            color:this.colors, //控制颜色渐变的范围
          },
          orient: 'horizontal',
          left:"center",
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: "18%",
          containLabel: true
        },
        yAxis: {
          type: 'category',
          data: [],
          splitArea: {
            show: true,
            areaStyle: {
              // color:$c.fade("#0000ff",.3)
            }
          },
        },
        xAxis: {
          type: 'category',
          data: [],
          splitArea: {
            show: true,
            areaStyle: {
              // color:$c.fade("#ff0000",.3)
            }
          },
          axisLabel: {
            align: 'center'
          }
        },
        series: [{
          type: 'heatmap',
          label: {
            show: false,
          },
          itemStyle:{
            // borderRadius: 3
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: []
        }]
      }
      this.processData();
    },
  },
  mounted() {
    const {getColor}=this
    this.processOption();
  }
}
</script>



<style lang="less">
</style>
