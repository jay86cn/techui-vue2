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
        legend:['Data1','Data2'],
        colors:[$c.bll5,$c.cyl5,],
        data:[
          {
            arry1:[323, 129, 143, 221, 50, 361, 130, 344, 346, 304, 247, 238, 190, 38, 334],
            arry2:[80.8, 81.9, 81.1, 82.8, 66.8, 83.5, 71.4, 80.7, 80.6, 81.6, 77.3, 73.13, 76.5, 81.4, 79.1],
            arry3:[752, 23, 643, 5631, 532, 2235, 2351, 631, 731, 852, 1296, 724, 642, 637, 631],
            arry4:['Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'],
          },
          {
            arry1:[344, 346, 304, 247, 238, 190, 38, 334,323, 129, 143, 221, 50, 361, 130],
            arry2:[83.5, 71.4, 80.7, 80.6, 81.6, 77.3, 73.13, 76.5, 81.4, 79.1,80.8, 81.9, 81.1, 82.8, 66.8],
            arry3:[731, 852, 1296, 724, 642, 637, 631,752, 23, 643, 5631, 532, 2235, 2351, 631],
            arry4:['North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States','Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan'],
          },
        ],
        
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,data}=this.chartData,
          processedData=[],
          seriesData=[]
      data.forEach((item,i)=>{
        processedData.push([]);
        data[i].arry1.forEach((item2,j)=>{
          processedData[i].push([])
          processedData[i][j].push(item2)
          processedData[i][j].push(data[i].arry2[j])
          processedData[i][j].push(data[i].arry3[j])
          processedData[i][j].push(data[i].arry4[j])
          processedData[i][j].push(legend[i])
        })
      })

      processedData.forEach((item,i)=>{
        seriesData.push({
          name: legend[i],
          data: item,
          type: 'scatter',
          symbolSize: function (data) {
              return Math.sqrt(data[2]) / 3;
          },
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]+" "+param.data[1];
              },
              color:"#fff",
              position: 'bottom'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: $c.bll9,
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{ offset: 0, color:colors[i]}, { offset: 1, color:  $c.hsll(colors[i],.3)  }])
          }
        })
      })
      this.chartOption.series=seriesData;
      this.chartOption.legend.data=legend;
      
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
          show:false,
          text:"散点分布图",
          textStyle:{
            fontSize:16, fontWeight:"normal",
          },
          left:0,
          top:0
        },
        legend: {
          show:true,
          data: [],
          top:"30",
          left:'center',
        },
        grid:{
          top:60,
          bottom:30,
          right:20
        },
        xAxis: {
          boundaryGap: false,
          axisLabel : {
            align : 'right'
          }
            
        },
        yAxis: {
          axisLabel : {
            align : 'right'
          },
          scale: true
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
