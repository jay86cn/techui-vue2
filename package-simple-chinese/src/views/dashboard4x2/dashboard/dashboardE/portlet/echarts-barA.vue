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
        legend:['业务1','业务2'],
        xAxis:[],
        colors:[$c.cbl4,$c.bll5],
       data:[]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors}=this.chartData,
          xAxis=[],
          data=[],
          processedData=[]
      data.push([],[])
      for (var i = 0; i < 100; i++) {
        xAxis.push('' + i);
        data[0].push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
        data[1].push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
      }
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
            color: $c.fade(colors[i],.9),
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
        // title:{ show:false, text:"", fontSize:16, fontWeight:"normal", textStyle:{ color:$c.cbl5, }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
        },
        legend: {
          //show:false,
          icon: 'rect',
          data: [],
          right:20,
          top: 10,
        },
        toolbox: {
          left:20,
          top:10,
          show:true,
          feature: {
            magicType: { type: ['line', 'bar','stack'] }
          },
          showTitle:false,
          itemSize:20,
          iconStyle:{color:getColor("staFC"), borderColor:getColor("staFCW")},
          emphasis:{
            iconStyle:{color:getColor("staFC"), borderColor:getColor("staFCW")},
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
