<template>
<div class="echarts-hasSelect">
  <el-select v-model="select.current" size="mini" style="width:110px" :popper-append-to-body="false" filterable placeholder="选择项目部">
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
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      select:{
        options: [
          { value: 'a', label: this.$t("dashboardD.optionC.op1") }, 
          { value: 'b', label: this.$t("dashboardD.optionC.op2") }, 
        ],
        current: 'a'
      },
      chartData:{
        legend:['Budget cost', 'Actual cost'],
        yAxis:['ToBeReported', 'Circulation', 'Reported'],
        colors:[$c.cbm6,$c.cym3],
        data:[
          [320, 302, 341,],
          [220, 332, 201, ],
        ],
      },
      chartOption:{ }
    }
  },
  watch:{
    "select.current"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:400,
        length:6,
        group:2
      })
      this.chartData.data[0]=dr[0]
      this.chartData.data[1]=dr[1]
      this.chartOption.update=true;
      this.processData();
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,yAxis,data}=this.chartData,
          processedData=[];
      yAxis.forEach((item,i)=>{
        this.chartData.yAxis[i]=this.$t(`dashboardD.c2.yAxi${i+1}`)
      })
      legend.forEach((item,i)=>{
       this.chartData.legend[i]=this.$t(`dashboardD.c2.legend${i+1}`)
        processedData.push({
          name: this.$t(`dashboardD.c2.legend${i+1}`),
          type: 'bar',
          barWidth:10,
          // stack: 'Total',
          // label: { show: true },
          emphasis: {
            focus: 'series'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3
          },
          data: data[i]
        })
      })
      this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;
      this.chartOption.yAxis.data=yAxis;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
        },
        legend: {
          //icon: 'rect',
          orient: 'vertical',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 5,
          left: '10',
          top: '10',
        },
        grid: {
          left: '5%',
          right: '10%',
          bottom: '8%',
          top: "20%",
          containLabel: true
        },
        xAxis: { 
          type: 'value',
          axisLabel: {
            align: 'center',
            interval:0,
            // rotate:45,
            // margin:20,
            // textStyle : { color :$c.blm3, align : 'center',fontSize :12 },
          }
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          data: [],
          axisLine: {
            show:false,
          },
          splitLine: {
            show:false,
          },
          axisLabel: {
            formatter: '{value}',
            align: 'right'
          }
        }
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:2,pickType:"rdm" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
