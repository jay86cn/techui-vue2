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
        legend:['预算分配','实际开销'],
        colors:[$c.bll5,$c.cyl5,],
        data:[
          [50, 14, 28, 31, 42, 21],
          [43, 10, 27, 35, 50, 19],
        ],
        indicator: [
          { name: '销售', max: 100,},
          { name: '管理', max: 100, },
          { name: '技术', max: 100, },
          { name: '客服', max: 100, },
          { name: '研发', max: 100, },
          { name: '市场', max: 100, }
        ],
      },
      chartOption:{ }
    }
  },
  computed: {},
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:70,
        max:100,
        length:6,
        group:2
      })
      this.chartData.data=dr
      this.processData();
      this.chartOption.update=true;
    }
  },
  methods: {
    processData(){
      let {legend,colors,data,indicator}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name: legend[i],
          type: "radar",
          symbol: "circle",
          color:colors[i],
          symbolSize: 10,
          areaStyle: {
            color: $c.fade(colors[i],.4)
          },
          // itemStyle: {
          //   color: $c.fade(colors[i],.9),
          //   bordercolor: $c.fade(colors[i],.3),
          //   borderWidth: 10,
          // },
          lineStyle: {
            color: $c.fade(colors[i],.9),
            width: 2
          },
          data: [data[i]]
        })
      })
      this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;
      this.chartOption.radar.indicator=indicator;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
        text:"异常特征分布1",
        show:false,
        left:0,
        top:0,
        textStyle:{
          color:$c.cbl5, fontSize:16, fontWeight:"normal"
        },
        },
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          show:true,
          right:0,
          data: []
        },
        radar: {
          center: ["50%", "53%"],
          radius: "78%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["transparent"]
            }
          },
          axisLabel: {
            show: false,
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            }
          },
          // shape: 'circle',
          axisName: {
            // formatter: '{a|{value}}{abg|}\n{hr|}\n{b|1234}',
            // backgroundColor: '#eee',
            // borderColor: '#aaa',
            fontSize:14,
            borderWidth: 1,
            borderRadius: 0,
            // rich: {
            //   a: { color: '#00b7ee', lineHeight: 25, padding: [0, 0, 0, 8], height: 25, backgroundColor: '#fff', borderRadius: 0 },
            //   hr: { borderColor: '#aaa', width: '100%', borderWidth: 0.1, align: 'left', height: 1 },
            //   b: { color: '#333', lineHeight: 25, padding: [0, 0, 0, 8], height: 25, backgroundColor: '#fff', width: '100%', align: 'left', borderRadius: 0 },
            //   per: { color: '#eee', backgroundColor: '#ffffff', borderWidth: 0.5, borderRadius: 0, borderColor: '#fff', }
            // }
          },
          indicator: []
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
    this.chartData.data=this.randomData({
      min:70,
      max:100,
      length:6,
      group:2
    })
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
