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
        legend:['流量'],
        colors:[$c.bll6,$c.cyl2],
        yAxis:['流量计1', '流量计2', '流量计3','流量计4', '流量计5', '流量计6','流量计7', '流量计8', '流量计9','流量计10', '流量计11', '流量计12','流量计13', '流量计14', '流量计15','流量计16', '流量计17', '流量计18','流量计19', '流量计20', '流量计21','流量计22', '流量计23', '流量计24'],
        data:[0.99, 0.96, 0.85,0.84, 0.81, 0.78,0.76, 0.73, 0.7,0.69, 0.68, 0.65,0.62, 0.59, 0.52,0.50, 0.4, 0.32,0.30, 0.25, 0.22,0.18, 0.12, 0.05]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor}=this,
            {legend,yAxis,colors,data}=this.chartData
      this.chartOption.series.push(
        {
          //渐变流量计内容
          type: 'bar', 
          barWidth: '44%',
          // animationDuration:2000,
          itemStyle: {
            borderWidth: 0,
            color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, 
              colorStops: [
                { offset: 0, color: colors[0]}, 
                { offset: 1, color: colors[1]}
              ]
            }
          },
          label: { show: false, },
          data: data,
          z: 0
        },
        {
          //背景柱状图
          type: 'bar', 
          barWidth: '44%',
          barGap: '-100%',
          animation: false,
          itemStyle: {
            borderWidth: 0,
            color: 'rgba(0,202,255,0.2)'
          },
          data:  (new Array(data.length)).fill(1),
          z: 0
        }, 
        
        {
          //辅助分割图形
          type: 'pictorialBar',
          barWidth: '44%',
          symbol: 'rect',
          symbolRotate:"-30",
          symbolMargin: '100%',   //控制分割图形的大小
          symbolSize: [2, '100%'],
          symbolRepeat: true,
          animation: false,
          itemStyle: {
            color: '#000'
          },
          label: {
            color:  getColor("staFC"),
            show: false,
            position: ['101%', '20%'],
            fontSize: 14,
            fontWeight: 'normal',
            formatter: function(params) {
              return ' ' + (data[params.dataIndex] * 100) + '%';
            }
          },
          data: (new Array(data.length)).fill(1),
          z: 1
        }
      )
      this.chartOption.legend.data=legend;
      this.chartOption.yAxis.data=yAxis;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        // title:{ show:false, text:"", fontSize:16, fontWeight:"normal", textStyle:{ color:getColor("staFC"), }, },
        tooltip: {
          show:false,
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
        },
        legend: {
          show:false,
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
          right: '5%',
          bottom: '2%',
          top:"40",
          containLabel: true
        },
        yAxis: {
          type: 'category',
          //name: '距离海底深度',
          data: [],
          inverse: true,
          splitLine: {show: false,},
          axisLine: {show: false},
          axisLabel: {
            show: true,
            interval: 0,
            margin: 10,
            fontSize: 14,
            fontWeight: 'normal',
          },
          axisTick: {show: false},
        },
        xAxis: {
          min: 0,
          max: 1,
          axisLine: {show: false},
          splitLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false}
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:2,total:8,pickType:"rdm"})
    }
  },
  
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
