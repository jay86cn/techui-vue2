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
      legend:['Contract Cost','Contract Profit', 'Gross profit'],
      xAxis:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],//
      colors:[$c.aql4,$c.cbl4,$c.cbl4,],
      data:[
        [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240],
        [35, 21, 18, 21, 27, 22, 32, 30, 30, 33, 39, 33,30,24],
        [3, 5, 22, 6, 13, 20, 35, 10,20,9,13, 10, 32, 1, ],
      ],
    },
    chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[],
          type="bar",
          stack="bar",
          yAxisIndex=0;
      xAxis.forEach((item,i)=>{
        xAxis[i]=this.$t(`dashboardE.t2.xAxi`)+(i+1)
      })
      legend.forEach((item,i)=>{
        if(i>1){type="line";yAxisIndex=1;stack="line"}
        this.chartData.legend[i]=this.$t(`dashboardE.t2.legend${i+1}`)
        processedData.push({
          name: this.$t(`dashboardE.t2.legend${i+1}`),
          type: type,
          stack: stack,
          barWidth:30,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3
          },
          z:i,
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: $c.fade(colors[i],.9)
            }, {
              offset: 0.8,
              color: $c.fade(colors[i],.3)
            }], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
          },
          yAxisIndex:yAxisIndex,
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // orient: 'vertical',
          // itemWidth: 14,
          // itemHeight: 5,
          // itemGap: 5,
          left: 'center',
          top: '20',
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: "15%",
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            name: '万元',
            min: 0,
            max: 400,
            //splitNumber: 6,
            position: 'left',
            splitLine: {
              show:true,
            },
            axisLabel: {
              formatter: '{value}',
              align: 'right'
            }
          },
          {
            type: 'value',
            name: '%',
            position: 'right',
            splitLine:{ 
              show:false,
            },
            axisLabel: {
              formatter: '{value}',
            }
          },
        ],
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            align: 'center',
            interval:0,
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
      chartData.colors=getPalette({ actual:3,jump:3,total:15,pickType:"seq"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
