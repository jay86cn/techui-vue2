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
      legend:['水位情況', '用水量'],
      xAxis:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      colors:[$c.bll4,$c.orl4,],
      data:[
        [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240],
        [3, 5, 22, 6, 13, 20, 35, 10,20,9,13, 10, 32, 1, ],
      ],
    },
    chartOption:{ }
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
          barWidth:10,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3
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
          yAxisIndex:yAxisIndex,
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
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 5,
          left: 'center',
          top: '35',
        },
        grid: {
          left: '8%',
          right: '5%',
          bottom: '8%',
          top: "35%",
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            name: '米',
            min: 0,
            max: 400,
            //splitNumber: 6,
            position: 'left',
            axisLabel: {
              formatter: '{value}',
              align: 'right'
            }
          },
          {
            type: 'value',
            name: '万吨',
            position: 'right',
            axisLabel: {
              formatter: '{value}',
            }
          },
        ],
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
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:[7,2], pickType:"cho", palette:"alt" })
    }
  },
  mounted() {
    
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
