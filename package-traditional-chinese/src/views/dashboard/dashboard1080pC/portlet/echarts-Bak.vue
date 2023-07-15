<template>
<echartsInit :chartOption="chartOption" @chartClick="chartClick"></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
components: { },
mixins: [themeChart],
data() {
  return {
    chartData:{
      title:"超採區",
      legend:['水位(米)', '用水量(噸)'],
      yAxis:['超採區1', '超採區2', '超採區3', '超採區4', '超採區5', '超採區6'],
      colors:[$c.bll4,$c.pum3,$c.rel4,],
      data:[],
    },
    chartOption:{ }
    }
  },
  
  computed: {},
  methods: {
    chartClick(val){
      let chartData=this.$tState.chartData;
      chartData.title=this.chartData.title+"-"+val.seriesName+"-"+val.name
      chartData.params=val
    },
    processData(){
      
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:2,pickType:"rdm"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
