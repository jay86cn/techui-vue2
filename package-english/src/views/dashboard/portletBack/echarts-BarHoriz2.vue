<template>
<div class="echarts-hasSelect">
  <el-select v-model="select.current" size="mini" style="width:110px" filterable placeholder="选择项目部">
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
export default {
  components: {},
  data() {
    return {
      select:{
        options: [
          { value: 'a', label: "Team A" }, 
          { value: 'b', label: '特战队B' }, 
        ],
        current: 'a'
      },
      chartData:{
      legend:['已审核', '未审核'],
      yAxis:['小队领导审核', '大队组室审核', '大队领导审核'],
      colors:[$c.inr5,$c.pul3],
      data:[
        [320, 302, 341,],
        [220, 332, 201, ],
      ],
    },
    chartOption:{
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
          align: 'right',
          width:50,
          lineHeight:14,
          overflow:"breakAll",
        }
      }
    }
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
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
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
    }
  },
  mounted() {
		this.processData();
  }
}
</script>

<style lang="less">

</style>
