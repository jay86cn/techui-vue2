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
        legend:['Temperature','Humidity'],
        unit:['℃','%'],
        position: [['27%', '55%'],['73%', '55%']],
        range: [[-40, 100],[0, 100]],
        colors:['#f3390d','#30da74','#119eff'],
        colorStop:[
          [.4,.5,1],
          [.3,.8,1],
        ],
        splitNum: [10,10],
        data:[60,70]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor,chartData}=this,
            {colorStop,colors,legend,data,position,range,unit,splitNum}=chartData
      let highlight =  getColor("techDecoB"),
      processedData=[]
      
      legend.forEach((item,i)=>{
        processedData.push({
          type: 'gauge',
          center: position[i],
          radius: '75%', // 1行2个
          splitNumber: splitNum[i],
          min: range[i][0],
          max: range[i][1],
          startAngle: 225,
          endAngle: -45,
          axisLine: { show: true, lineStyle: { width: 2, shadowBlur: 0, color: [ [1, highlight] ] } },
          axisTick: { show: true, lineStyle: { color: highlight, width: 1 }, length: -5, splitNumber: 10 },
          splitLine: { show: true, length: -10, lineStyle: { color: highlight, } },
          axisLabel: { distance: -18, color: highlight, fontSize: '10', },
          pointer: { show: 0 },
          detail: { show: 0 }
        },{
          name: legend[i],
          type: 'gauge',
          center: position[i],
          splitNumber: splitNum[i],
          min: range[i][0],
          max: range[i][1],
          radius: '65%',
          axisLine: { show: false, lineStyle: { color:[[colorStop[i][0], colors[2]], [colorStop[i][1],colors[1]], [colorStop[i][2], colors[0]] ], shadowColor: "#ccc", shadowBlur: 25, width: 0 } },
          axisLabel: { show: false },
          axisTick: { length: 20, lineStyle: { color: 'auto', width: 2 } },
          splitLine: { show: false, length: 20, lineStyle: { color: 'auto' } },
          title: { fontWeight: 'bolder', fontSize: 20, fontStyle: 'italic' },
          detail: {
            show: true,
            offsetCenter: [0, '100%'],
            fontSize: 25, 
            color: getColor("staFC"),
            formatter: [ '{value} ' + (unit[i] || ''), '{name|' + legend[i] + '}' ].join('\n'),
            rich: { name: { fontSize: 16, lineHeight: 30, color: getColor("staFCW") } }
          },
          data: [{ value: data[i] }],
          pointer: { width: 5 }
        },{
          name: legend[i],
          type: 'gauge',
          center: position[i],
          radius: '60%',
          startAngle: 225,
          endAngle: -45,
          min: range[i][0],
          max: range[i][1],
          axisLine: { show: true, lineStyle: { width: 20, color: [ [1, $c.fade(getColor("techDecoA"),0)] ] } },
          axisTick: { show: 0, },
          splitLine: { show: 0, },
          axisLabel: { show: 0 },
          pointer: { show: true, length: '90%', width: 3,itemStyle: {color: getColor("staFCW")}},
          // itemStyle: { color: getColor("staFCW"), borderColor: getColor("staFCW"), borderWidth: 1 },
          detail: {
            show: false,
            offsetCenter: [0, '100%'],
            fontSize: 20, 
            color: getColor("staFC"),
            formatter: [ '{value} ' + (unit[i] || ''), '{name|' + legend[i] + '}' ].join('\n'),
            rich: { name: { fontSize: 14, lineHeight: 30, color: getColor("staFCW") } }
          },
          data: [{ value: data[i] }]
        })
    })
    this.chartOption.series=processedData;
      //this.chartOption.series[1].data[0].value=this.chartData.data;
  },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
          show:false,
          text:"",
          left:'62%',
          top:'55%',
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [],
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:[1,4,7],pickType:"cho",palette:"alt"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
