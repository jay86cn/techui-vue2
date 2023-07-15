<template>
<div class="chart-linebar-hasTabs">
  <div class="card-header-tabs">
    <div class="button-wrap" @click="tabClick(index)" v-for="(item,index) in chartData" >
      <techButtonB1 :config="buttonConfig" :class="index==current?'active':''">{{item.name}}</techButtonB1>
    </div>
  </div>
  <echartsInit :chartOption="chartOption"></echartsInit>
</div>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      current:0,
      buttonConfig:{
        height:30,
        decoration:false
      },
      chartData:[
        {
          name:"監測站埋深分析",
          type:"bar",
          legend:['埋深'],
          xAxis:['監測站1', '監測站2', '監測站3', '監測站4', '監測站5', '監測站6', '監測站7', '監測站8', '監測站9', '監測站10'],
          colors:[$c.aql4],
          data:[
            [-235, -210, -187, -212, -278, -220, -320, -302, -301, -334],
          ],
        },
        {
          name:"監測站水位分析",
          type:"line",
          legend:['水位'],
          xAxis:['監測站xx', '監測站2', '監測站3', '監測站4', '監測站5', '監測站6', '監測站7', '監測站8', '監測站9', '監測站10'],
          colors:[$c.cyl3],
          data:[
            [68, 121, 34, 56, 23, 120, 132, 101, 134, 90],
          ],
        },
        
      ],
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    tabClick(index){
      this.current=index
      this.processData();
      this.chartOption.update=true;
    },
    processData(){
      let {legend,colors,xAxis,data}=this.chartData[this.current],
          processedData=[]
      legend.forEach((item,i)=>{
        let type;
        if(this.current==0){type='bar'}else{type='line'}
        processedData.push({
          name: legend[i],
          type: type,
          //stack: '02',
          barWidth:15,
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
          data: data[i]
        })
      })
      
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
          show:false,
          data: [],
          top:15,
          right:20,
          
        },
        grid: {
          left: '4%',
          right: '5%',
          bottom: '10%',
          top: "20%",
          containLabel: true
        },
        yAxis:{
          type: 'value',
          //name: '执法矿次',
          splitNumber: 3,
          position: 'left',
          splitLine:{show:false},
          axisLine: {
            show:false,
          },
          splitLine: {
            show:true,
          },
          axisLabel: {
            formatter: '{value}',
            align: 'right'
          }
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            align: 'center',
          }
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData[0].colors=chartData[1].colors=getPalette({ actual:1,pickType:"rdm" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">
.chart-linebar-hasTabs{height: 100%;
  .card-header-tabs{position: absolute; text-align: center; top:1px; left:0%; right:0%; padding:0; z-index: 10; 
    .button-wrap{display:inline-block; margin:0 3px;
      .techButtonB1{border-top:none;}
    }
  }
}

</style>
