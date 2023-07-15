<template>
<div class="echarts-hasSelect">
  <el-select v-model="select.current" size="mini" :popper-append-to-body="false" filterable placeholder="请选择">
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
          { value: 'a', label: this.$t("dashboardD.optionB.op1") }, 
          { value: 'b', label: '特战队B' }, 
        ],
        current: 'a'
      },
      chartData:{
      legend:['实际成本', '预算成本'],
      xAxis:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      colors:[$c.bll4,$c.orl4,],
      data:[
        [220, 420, 302, 301, 334, 390, 330,300,240,235, 210, 187, 212, 278, ],
        [120, 135, 110,220,89,123, 215, 122, 96, 113, 113, 160, 322, 112, ],
      ],
    },
    chartOption:{
      update:false,
      title:{ text:"单位：万元", left:12, top:12, textStyle:{ color:$c.cbl3, fontSize:12, fontWeight:"normal" }, },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        left: '100',
        top: '10',
        textStyle: {
          //fontSize: 12,
          color: $c.cbl3
        }
      },
      
      grid: {
        left: '3%',
        right: '3%',
        bottom: '5%',
        top: "30%",
        containLabel: true
      },
      yAxis: {
        type: 'value',
        // name: '万元',
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
    }
  },
  watch:{
    "select.current"(val){
      let randomData=this.randomData({
        min:20,
        max:300,
        length:12,
        group:2
      })
      this.chartData.data=randomData
      this.chartOption.update=true
      this.processData();
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[],
          type="bar",
          yAxisIndex=0;
      legend.forEach((item,i)=>{
        if(i==1){type="line"}
        if(i>0){yAxisIndex=1}
        processedData.push({
          name: legend[i],
          type: type,
          //stack: '01',
          barWidth:20,
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
              color: $c.fade(colors[i],.1)
            }], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
          },
          // yAxisIndex:yAxisIndex,
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
