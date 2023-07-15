<template>
<echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
const symbol = {
0:'path://M88,176H360c4.42,0,8-3.58,8-8v-32c0-4.42-3.58-8-8-8h-8c.01-45.02-26.93-85.67-68.4-103.2l-27.6,55.2V16c0-8.84-7.16-16-16-16h-32c-8.84,0-16,7.16-16,16V80l-27.6-55.2c-41.47,17.53-68.41,58.18-68.4,103.2h-8c-4.42,0-8,3.58-8,8v32c0,4.42,3.58,8,8,8Zm225.6,176h-16.7c-46.26,21.33-99.54,21.33-145.8,0h-16.7C60.17,352,0,412.17,0,486.4H0c0,14.14,11.46,25.6,25.6,25.6H422.4c14.14,0,25.6-11.46,25.6-25.6h0c0-74.23-60.17-134.4-134.4-134.4h0Zm-89.6-32c65.22,0,118.44-48.94,126.39-112H97.61c7.95,63.06,61.17,112,126.39,112Z',
};
import themeChart from "@/mixins/themeChart"
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      chartData:{
        yAxis:["城區A", "城區B", "城區C", "城區D", "城區E"],
        colors: ['#00e79e', '#00e7ce', '#00dceb', '#00b2f7', '#197fe6'],
        colorsD:['rgb(0,102,70)', 'rgb(0,102,91)', 'rgb(0,95,102)', 'rgb(0,74,102)', 'rgb(10,51,92)'],
        data:[60,85,105,130,185]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor}=this
      
      let {legend,yAxis,data,colors,colorsD}=this.chartData,
          processedData1={
            tooltip: { show: false },
            z: 4,
            type: "pictorialBar",
            symbolSize: ['20', '25'],
            symbolRepeat: "fixed",
            symbolMargin:12,
            itemStyle:{
              color: (item)=>{
                return $c.fade(colorsD[item.dataIndex],.8)
              },
            },
            data: []
          },
          processedData2={
            z: 6,
            type: "pictorialBar",
            symbolSize: ['20', '25'],
            animation: true,
            symbolRepeat: "fixed",
            symbolMargin:12,
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            itemStyle:{
              color: (item)=>{
                return $c.fade(colors[item.dataIndex],.8)
              },
            },
            data: [],
            label: { show: true, color: getColor("staFC"), fontSize: 14, position: "right", offset: [20, 0] },
          }
      data.forEach((item,i)=>{
        processedData1.data.push(
          { value: 100, symbol: symbol[0], },
        )
        processedData2.data.push(
          { value: item, symbol: symbol[0], },
        )
      })
      this.chartOption.series[0]=processedData1;
      this.chartOption.series[1]=processedData2;
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
          left: "3%",
          top: "5%",
          bottom: "3%",
          right: "15%",
          containLabel: true
        },
        xAxis: {
          splitLine: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false }
        },
        yAxis: {
          type: "category",
          inverse: false,
          data: [],
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false, lineStyle: { type: "dashed" } },
          axisLabel: { margin: 35, fontSize: 14, }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:5,pickType:"seq" })
      chartData.colorsD=[]
      chartData.colors.forEach((co,i)=>{
        chartData.colorsD.push($c.hsll(co,.15))
      })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
