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
        legend:['数据1','数据2','数据3'],
        xAxis:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        colors:[$c.cyl4,$c.rel4,$c.aql3],
        data:[
          [100, 200, 400, 500, 400, 200, 100, 100, 200, 400, 200,100],
          [100, 200, 100, 200, 300, 450, 400, 300, 200, 100, 200,50],
          [ 200, 300, 200, 150, 100, 50, 50, 100, 100, 100,50,50]
        ]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      // this.chartData.colors=this.colorPicker({
      //   name:"bl",
      //   saturate:"l",
      //   start:2,
      //   jump:2,
      //   total:3,
      //   //fade:.6,
      //   hueVibr:true,
      //   reverse:true
      // })
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        let sortedData = data[i].sort().reverse();
        let maxIndex = data[i].findIndex(function(o) {
          return o == sortedData[0];
        });
        let minIndex = data[i].findIndex(function(o) {
          return o == sortedData[sortedData.length - 1];
        });
        processedData.push({
          name: legend[i],
          type: 'line',
          smooth: true,
          showSymbol: false,
          markPoint: {
            data: [
              { name: '月最高', value: sortedData[0], xAxis:maxIndex, yAxis: sortedData[0] }, 
              { name: '月最低', value: sortedData[sortedData.length-1], xAxis:minIndex, yAxis: sortedData[sortedData.length-1] }
            ]
          },
          itemStyle: { color: $c.fade(colors[i],.9), borderColor: '#f1f1f1', borderWidth: 1 },
          lineStyle: {
            width: 4,
            color:colors[i],
            // color: {
            //   type: 'linear',
            //   colorStops: [
            //     { offset: 0, color: colors[i] },
            //     { offset: 1, color: $c.fade(colors[i],.1) }
            //   ],
            //   globalCoord: false // 缺省为 false
            // },
            shadowColor: 'rgba(249,165,137, 0.5)',
            shadowBlur: 30,
            shadowOffsetY: 5
          },
          areaStyle: {
              //区域填充样式
            color: new echarts.graphic.LinearGradient( 0, 0, 0, 1,[
                { offset: 0, color: $c.fade(colors[i],.9) }, 
                { offset: 0.6, color: $c.fade(colors[i],.1) }, 
                { offset: 0.8, color: $c.fade(colors[i],.1) }
              ],false
            ),
            shadowColor: "rgba(58,182,224, 0.1)",
            shadowBlur: 6
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // icon: 'rect',
          // itemWidth: 14,
          // itemHeight: 5,
          // itemGap: 13,
          data: [],
          right: '5%',
          top: '20',
        },
        grid: {
          left:'3%',
          right:'3%',
          bottom:'8%',
          top:"60",
          containLabel: true
        },
        dataZoom: [{ type: 'inside', start: 0, end:100 }],
        yAxis:{
          type: 'value',
          splitNumber: 6,
          splitLine: { show:true,},
          axisLabel: { align: 'right' }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLabel: {align: 'center' }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:3,total:7,pickType:"seq",palette:"alt" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
