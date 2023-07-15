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
        legend:['建築業','工業'],
        colors:[$c.bll5,$c.inl3,],
        data:[625,352]
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
        // title:{ text:"pieA", right:0, bottom:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
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
            center: ['50%', '55%'],
            radius: ['40%', '70%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: getColor("techBG"),
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
                  return data.name+"\n"+data.percent.toFixed(1)+"%"
              },//'{b|{b}}\n{hr|}\n{d|{d}%}',
              // rich: {
              //   b: { fontSize: 16, color: $c.cyl5, align: 'left', padding: 4 },
              //   hr: { borderColor: '#12EABE', width: '100%', borderWidth: 1, height: 0 },
              //   d: { fontSize: 14, color: getColor("staFCW"), align: 'left', padding: 4 },
              //   c: { fontSize: 14, color: getColor("staFC"), align: 'center', padding: 4 }
                // }
            },
            labelLine: {
              show: true,
              length: 10,
              length2: 20,
              lineStyle: { width: 1 }
            },
            data:[]
          }
        ]
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
