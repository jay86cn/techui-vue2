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
        legend:['數據1','數據2','數據3'],
        xAxis:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        colors:[$c.cbhl4,$c.cbhl5,$c.cbhl6],
       data:[
          [100, 200, 400, 500, 400, 200, 100, 100, 200, 400, 200,100],
          [100, 200, 300, 400, 300, 200, 50, 50, 100, 200, 100,50],
          [200, 300, 400, 300, 200, 50, 50, 100, 100, 100,50,50]
        ]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      this.chartData.data=this.randomData({
        min:50,
        max:200,
        length:12,
        group:3,
      })
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: 'bar',
          //stack: '01',
          //barWidth:25,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],1),
            borderRadius: 5
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
        title:{
          show:false,
          text:"",
          fontSize:16,
          fontWeight:"normal",
          textStyle:{
              color:$c.cbl5,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
        },
        legend: {
          //show:false,
          icon: 'rect',
          data: [],
          right: '5%',
          top: '20',
        },
        toolbox: {
          //y: 'top',
          //top:0,
          show:false,
          feature: {
            magicType: { type: ['line', 'bar'] }
          }
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '8%',
          top:"60",
          containLabel: true
        },
        yAxis: {
          type: 'value',
          axisLabel : { align : 'right' }
        },
        xAxis: {
          type: 'category',
          data: [],
          splitLine: { show: false },
          axisLabel : { align : 'center' }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:3,jump:2,pickType:"seq",})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
