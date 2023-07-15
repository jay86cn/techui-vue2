<template>
<div class="echarts-hasSelect">
  <el-select v-model="select.current" size="mini" :popper-append-to-body="false" style="width:100px" filterable placeholder="选择井场">
    <el-option
      v-for="item in select.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <echartsInit :chartOption="chartOption"></echartsInit>
</div>
</template>
<script>
import themeChart from "@/mixins/themeChart"
const symbol = {
  0:'path://M288,358.3c13.98-8.09,17.53-30.04,28.88-41.39s33.3-14.88,41.39-28.87c7.98-13.79,.17-34.54,4.37-50.29,4.06-15.25,20.46-29.25,20.46-45.75s-17.27-30.52-21.34-45.73c-4.21-15.75,3.61-36.5-4.36-50.29-8.09-13.98-30.03-17.52-41.38-28.87-11.35-11.35-14.89-33.3-28.87-41.39-13.79-7.98-34.54-.16-50.29-4.38-14.36-4.08-28.36-21.35-44.86-21.35s-30.5,17.27-45.7,21.34c-15.8,4.2-36.5-3.61-50.32,4.36-13.98,8.09-17.52,30.04-28.87,41.38-11.34,11.35-33.3,14.89-41.39,28.87-7.98,13.75-.16,34.55-4.37,50.25-4.08,15.3-21.35,29.3-21.35,45.8s17.27,30.52,21.34,45.73c4.21,15.75-3.61,36.5,4.36,50.29,8.1,13.98,30.04,17.48,41.38,28.88,11.35,11.35,14.89,33.3,28.88,41.4,13.79,7.98,34.53,.16,50.28,4.37,15.26,4.03,29.26,21.33,45.76,21.33s30.52-17.27,45.74-21.34c15.76-4.16,36.46,3.64,50.26-4.36ZM112,192c0-44.27,35.81-80,80-80s80,35.73,80,80-35.81,80-80,80-80-35.8-80-80ZM1.72,433.2c-3.25,8.19-1.78,17.48,3.87,24.25,5.66,6.75,14.53,9.9,23.12,8.15l45.19-9.04,21.43,42.27c4.13,8.17,12.27,13.17,21.37,13.17,.34,0,.66-.01,1.01-.03,9.5-.38,17.65-6.08,21.24-14.88l33.58-82.08c-53.71-4.64-102-28.12-138.2-63.95L1.72,433.2Zm347.88-82.1c-36.15,35.83-84.45,59.31-138.2,63.95l33.58,82.08c3.59,8.8,11.74,14.5,21.24,14.88,.38-.91-.12-.01,1.08-.01,9.09,0,17.23-4.97,21.35-13.14l21.43-42.28,45.19,9.04c8.59,1.75,17.47-1.4,23.12-8.15,5.66-6.77,7.12-16.06,3.88-24.25l-32.66-82.12Z',
  };
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      select:{
        options: [
          { value: 'a', label: "Site A" }, 
          { value: 'b', label: "Site B" }, 
        ],
        current: 'a'
      },
      chartData:{
        legend:['budget cost'],
        yAxis:["TeamA", "TeamB", "TeamC", "TeamD", "TeamE"],
        colors:[$c.cbl3,$c.inl2,$c.grm3,$c.vim3,$c.oyl3],
        colorsD:[$c.cbl7,$c.inr6,$c.grr8,$c.vir7,$c.oyr8],
        data: [93, 85, 22, 76, 13],
      },
      chartOption:{ }
    }
  },
  watch:{
    "select.current"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:300,
        length:5,
        group:1
      })
      this.chartData.data=dr[0]
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,colorsD,yAxis,data}=this.chartData,
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
        label: { show: true, color: '#18fcff', fontSize: 14, position: "right", offset: [20, 0] },
        
      };
      data.forEach((item,i)=>{
        processedData1.data.push(
          { value: 100, symbol: symbol[0], },
        )
        processedData2.data.push(
          { value: item, symbol: symbol[0], },
        )
      })
      // this.chartOption.legend.data=legend;
      this.chartOption.series[0]=processedData1;
      this.chartOption.series[1]=processedData2;
      this.chartOption.yAxis.data=yAxis;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        grid: {
          left: "5%",
          top: "20%",
          bottom: "5%",
          right: "20%",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          splitLine: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false }
        },
        yAxis:{
          type: "category",
          inverse: true,
          data: [],
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false, lineStyle: { type: "dashed", color:getColor("lineSP") } },
          axisLabel: { margin: 20, color:getColor("staFC"), fontSize: 14, }
        },
        series: [ ]
      }
      this.processData();
    },
    chartTheme(){
      const {getColor,chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:5,pickType:"seq" })
      chartData.colorsD=[]
      chartData.colors.forEach((co,i)=>{
        chartData.colorsD.push($c.hsll(co,.1))
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
