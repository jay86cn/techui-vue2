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
        legend:['Speed'],
        yAxis:["Gate1","Gate2","Gate3","Gate4","Gate5","Gate6","Gate7","Gate8","Gate9","Gate10","Gate11","Gate12","Gate13","Gate14","Gate15","Gate16","Gate17","Gate18","Gate19","Gate20","Gate21","Gate22","Gate23" ],
        colors:['#B5DAFF','#9DCEFF','#8AC5FF','#7BBDFF','#5EAEFF','#48A4FF','#48A4FF','#48A4FF','#48A4FF','#48A4FF','#3399FF','#2894FF','#158AFF','#0071E1','#0069D2','#0058B0','#0058B0','#0052A4','#00509F','#004E9B','#004386','#003F7D','#003973'],
        data:[0.2, 0.4, 0.4, 0.8, 1, 0.6, 0.5, 0.35, 0.2, 0.4, 0.4, 0.8, 1, 0.6, 0.5, 0.35, 0.2, 0.4, 0.4, 0.8, 1, 0.2, 0.5]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,yAxis,data}=this.chartData
      this.chartOption.series.push(
        {
          name: '流速',
          type: 'bar',
          barWidth: '15',
          itemStyle: {
            //柱体的颜色
            //右，下，左，上（0，1，0，0）
            color: function(params) {
              // var colorItem = colors[params.dataIndex];
              return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                { offset: 0, color: colors[params.dataIndex] }, 
                { offset: 1, color: colors[params.dataIndex] }
              ],false);
            }
          },
          data: data
        }
      )
      yAxis.forEach((item,i)=>{
        this.chartData.yAxis[i]=this.$t(`dashboard4x2D.p1.yAxis`)+(i+1)
      })
      this.chartOption.legend.data=legend;
      this.chartOption.yAxis.data=yAxis;
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
          inverse: true,
          nameTextStyle: {
            padding: [0, 0, 10, 0] // 四个数字分别为上右下左与原位置距离
          },
          data: [],
          axisLabel : { align : 'right' }
        },
        xAxis: {
          type: 'value',
          position: 'top',
          boundaryGap: [0, 0.01],
          axisLabel : { align : 'center' }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({actual:23,total:50})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
