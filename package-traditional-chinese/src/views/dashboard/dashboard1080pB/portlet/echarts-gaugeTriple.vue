<template>
<echartsInit :chartOption="chartOption" ></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
components: { },
mixins: [themeChart],
data() {
  return {
    chartData:{
      title:"任務完成情況",
      legend:['開發任務','採購任務','銷售任務'],
      colors:[$c.aql4, $c.cyl4,$c.rel5],
      colorsD:[$c.aql8,$c.cyl8,$c.rel9],
      data:[45,33,77],
      radius:["55%","55%","55%"],
      position:[
        ['17%', '55%'],
        ['50%', '55%'],
        ['83%', '55%'],
      ],
    },
    chartOption:{}
    }
  },
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:0,
        max:100,
        length:3,
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
      const {getColor}=this,{legend,colors,colorsD,data,radius,position}=this.chartData;
      let processedData=[],
          type="bar",
          yAxisIndex=0;
      legend.forEach((item,i)=>{
        processedData.push({
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            center: position[i],
            radius: radius[i],
            pointer: { show: false },
            title: { fontSize: 14 },
            itemStyle: {
              color: colors[i],
              shadowColor: colors[i],
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {}//borderWidth: 1, borderColor: 'red'
            },
            detail: {
              width: 50,
              height: 14,
              // fontSize: 24,
              //color: 'inherit',
              borderColor: 'inherit',
              borderRadius: 20,
              borderWidth: 0,
              formatter: function (value) {
                return '{value|' + value.toFixed(0) + '}{unit|%}';
              },
              rich: {
                value: { fontSize: 24, color:colors[i], fontWeight: 'bolder'},// color: '#999',
                unit: { fontSize: 12, color:$c.darken(colors[i],1),}
              }
            },
            axisLine: {
              lineStyle: {color: [[1, $c.darken(colors[i],4)]], width: 10 }
            },
            splitLine: { show: false, distance: 0, length: 10 },
            axisTick: { show: false },
            axisLabel: { show: false, distance: 50 },
            data:[
              {
                value: data[i],
                name: legend[i],
                title: { color:$c.lighten(colors[i],1), offsetCenter: ['0%', '30%'] },
                detail: { valueAnimation: true, offsetCenter: ['0', '-30%'] }
              }
            ],
          })
        
      })
      // this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:3,pickType:"seq"})
    }
  },
  mounted() {
    this.processOption();
  }
}
</script>
<style lang="less">
</style>
