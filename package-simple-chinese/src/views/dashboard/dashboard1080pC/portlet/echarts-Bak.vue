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
      title:"超采区",
      legend:['水位(米)', '用水量(吨)'],
      yAxis:['超采区1', '超采区2', '超采区3', '超采区4', '超采区5', '超采区6'],
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
