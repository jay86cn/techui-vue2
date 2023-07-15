<template>
<echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      chartData:{
      legend:['轻度', '严重1'],
      xAxis:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      colors:[$c.cyl4,$c.rel4,$c.aql3,],
      data:[
        [320, 302, 301, 334, 390, 330,300,240,235, 210, 187, 212, 278, 220, ],
        [168, 181, 134, 126,220,179,123, 134, 190, 230, 210, 120, 132, 101, ],
      ],
    },
    chartOption:{
      update:false,
      // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        orient: 'vertical',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 5,
        right: '10',
        top: '10',
      },
      
      grid: {
        left: '5%',
        right: '8%',
        bottom: '8%',
        top: "25%",
        containLabel: true
      },
      yAxis: {
        type: 'value',
        splitNumber: 3,
        splitLine: {
          show:true,
        },
        axisLabel: {
          align: 'right'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLabel: {
          align: 'center'
        }
      },
      series: []
    }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: 'line',
          //stack: '01',
          barWidth:15,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 5
          },
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

    }
  },
  mounted() {
		this.processData();
  }
}
</script>

<style lang="less">

</style>
