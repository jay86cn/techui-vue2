<template>
<div class="connection-wrap">
  <div class="connection-counter">
    <span class="desc">接入煤矿数量</span>
    <span class="num">4094</span>
  </div>
  <div class="echart-wrap">
    <echartsInit :chartOption="chartOption"></echartsInit>
  </div>
</div>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      chartData:{
        legend:['事故', '灾难'],
        colors:[$c.cyl4,$c.rel4],
        data:[3094,1000],
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor}=this
      let {legend,colors,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          name:item,
          type:'bar',
          barWidth:16,
          stack: 'a',
          label: {
            distance: 35,
            align: 'center',
            verticalAlign: 'middle',
            show: true,
            position: 'bottom',
            formatter: '{a|{a}}\n\n{c|{c}}',
            rich: {
              a: { color: getColor("staFCS") },
              c: { color: getColor("staFC"), fontSize: 22 }
            }
          },
          itemStyle: {
            color: colors[i],
            borderRadius: 10
          },
          data:[data[i]]
        })
      })
      // this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;
      // this.chartOption.xAxis.data=xAxis;
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        // title:{ show: false, text:'', textStyle:{ color:'#FFFFFF' }, left:'10px', top: '10' },
        grid: {
          top:0,
          left: '3%',
          right: '4%',
          bottom: '40%',
          containLabel: true
        },
        xAxis:{
          type :'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false,
          }
        },
        yAxis:{
          //type: 'category',
          data: [''],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
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
.connection-wrap{height: 100%;
  .connection-counter{height: 40%; text-align: center; padding:80px 0 0 0; 
    .desc{display:inline-block; font-size: 18px; .bgc(var(--button-bg)); .fc(var(--font-normal)); line-height: 30px; height: 30px; padding:0 20px; margin:0 10px 0 0; .bdr(5px); .ff("cn1");} 
    .num{display:inline-block; font-size: 24px; .bgc(var(--button-bg_act)); .fc(var(--font-strong)); line-height: 30px; height: 30px; padding:0 20px; vertical-align: bottom; .bdr(5px); .ff("en0");}
  }
  .echart-wrap{height: 60%;}
}

</style>
