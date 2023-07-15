<template>
<div class="echarts-hasSelect at1-left">
  <el-select v-model="select.current" size="mini" style="width:100px" :popper-append-to-body="false" filterable placeholder="选择井场">
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
          { value: 'a', label: "Site A" }, 
          { value: 'b', label: "Site B" }, 
        ],
        current: 'a'
      },
      chartData:{
        legend:['Budget cost', 'Actual cost'],
        xAxis:['Direct material', 'Internal Settlement', 'Other expenses', 'Labor cost', 'Depreciation', 'Revenue'],
        colors:[$c.cyl4,$c.inm4],
        data:[
          [235, 210, 187, 212, 278, 220],
          [93, 85, 22, 76, 13, 20,],
        ],
      },
      chartOption:{ }
    }
  },
  watch:{
    "select.current"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:500,
        length:15,
        group:2
      })
      this.chartData.data[0]=dr[0]
      this.chartData.data[1]=dr[1]
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[],
          type="line",
          yAxisIndex=0;
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: type,
          //stack: '01',
          // barWidth:15,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3,
          },
          z:5-i,
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
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          //icon: 'rect',
          orient: 'vertical',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 5,
          left: '180',
          top: '5',
        },
        
        grid: {
          left: '5%',
          right: '10%',
          bottom: '5%',
          top: "25%",
          containLabel: true
        },
        yAxis:{
          type: 'value',
          // min: 0,
          // max: 300,
          splitNumber: 3,
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
          boundaryGap: false,
          data: [],
          axisLabel: {
            align: 'center',
            interval:0,
            width:50,
            lineHeight:14,
            overflow:"break",
            // interval:0,
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
