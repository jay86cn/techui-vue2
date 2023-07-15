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
      legend:['埋深'],
      xAxis:['監測站1', '監測站2', '監測站3', '監測站4', '監測站5', '監測站6', '監測站7', '監測站8', '監測站9', '監測站10'],
      colors:[$c.pul3,],
      data:[
        [-235, -210, -187, -212, -278, -220, -320, -302, -301, -334],
      ],
    },
    chartOption:{ }
    }
  },
  computed: {},
  props: ['tabActive'],
  watch:{
    tabActive(val){
      let processData=[];
      let tempData=this.randomData({
        min:1,
        max:999,
        length:10,
        group:1
      })[0]
      tempData.forEach(item=>{
        processData.push(-item);
      })
      this.chartData.data[0]=processData;
      this.processData();
      this.chartOption.update=true;
    }
  },
  methods: {
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
          show:false,
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
          splitNumber: 3,
          position: 'left',
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
            //interval:0,
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
      chartData.colors=getPalette({ actual:1,pickType:"rdm" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
