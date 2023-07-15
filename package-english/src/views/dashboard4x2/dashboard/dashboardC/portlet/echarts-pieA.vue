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
        legend:['Product A', 'Product B', 'Product C', 'Product D','Product E'],
        colors:[$c.yel3,$c.cbl4,$c.aql4,$c.pul3,$c.rel3,],
        data:[2831.2314, 998.3421, 731.3451, 2341.3521, 1132.11,]
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          value:data[i],
          name:legend[i],
          itemStyle:{
            color:colors[i]
          }
        })
      })
      this.chartOption.series[0].data=processedData;
      this.chartOption.legend.data=legend;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{
        //   text:"pieA",
        //   right:0,
        //   bottom:0,
        //   textStyle:{
        //     color:$c.gyl3,
        //     fontSize:16,
        //     fontWeight:"normal"
        //   },
        // },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
        // orient: 'vertical',
          show:false,
          x: 'center',
          y:'center',
          width:"100px",
          data:[]
        },
        series: [
          {
            name:'数据类别',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['45%', '70%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: $c.fade($c.bll9,1),
              borderWidth: 2,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
            label: {
              fontSize: 14,
              color: getColor("staFC"),
              align: 'left',
              padding: 4,
              formatter: function(data){
                  return '{b|'+data.name+'}'+"\n"+'{hr|}'+"\n"+"{d|"+data.percent.toFixed(1)+"%"+"}"
                  //return data.name+"\n"+data.percent.toFixed(1)+"%"
              },//'{b|{b}}\n{hr|}\n{d|{d}%}',
              rich: {
                b: { fontSize: 16,fontWeight:'bold',color: getColor("staFCS"), align: 'left', lineHeight:30},
                hr: { borderColor: getColor("staFCW"), width: '100%', borderWidth: 1, height: 0 },
                d: { fontSize: 14, color: getColor("staFC"), align: 'left', lineHeight:30},
                // c: { fontSize: 14, color: getColor("staFC"), align: 'center', padding: 4 }
              }
            },
            labelLine: {
              show: true,
              length: 20,
              length2: 20,
              lineStyle: {
                  width: 1
              }
            },
            data:[]
          }
        ]
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:5,pickType:"seq",palette:"alt" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
