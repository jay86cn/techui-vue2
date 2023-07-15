<template>
<div class="chart-linebar-hasTabs-dashboard4x2-A">
  <div class="card-header-tabs">
    <div class="button-wrap" @click="tabClick(index)" v-for="(item,index) in chartData" >
      <techButtonB1 :config="buttonConfig" :class="index==current?'active':''">{{$t(`dashboard4x2A.p7.tab${index+1}`)}}</techButtonB1>
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
          name:"Supervision",
          legend:['Law Enforcement', 'Hidden danger', 'Penalty Amount'],
          xAxis:['Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data6', 'Data7', 'Data8', 'Data9', 'Data10'],
          colors:[$c.bll4,$c.aql4,$c.orl3,$c.cbl3],
          data:[
            [235, 210, 187, 212, 278, 220, 320, 302, 301, 334],
            [68, 121, 34, 56, 23, 120, 132, 101, 134, 90],
            [68, 23, 120, 132, 101, 134, 90, 121, 34, 56]
          ],
        },
        {
          name:"Law Enforcement",
          legend:['Law Enforcement', 'Hidden danger', 'Penalty Amount'],
          xAxis:['Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data6', 'Data7', 'Data8', 'Data9', 'Data10'],
          colors:[$c.bll4,$c.aql4,$c.orl3,$c.cbl3],
          data:[
            [220, 320, 302, 301, 334,235, 210, 187, 212, 278],
            [120, 132, 101, 134, 90,68, 121, 34, 56, 23],
            [68, 121, 34, 120, 132, 101, 134, 56, 23, 90],
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
      xAxis.forEach((item,i)=>{
        this.chartData[this.current].xAxis[i]=this.$t(`dashboard4x2A.p7.xAxis`)+(i+1)
      })
      legend.forEach((item,i)=>{
        let type;
        if(i<2){type='bar'}else{type='line'}
        this.chartData[this.current].legend[i]=this.$t(`dashboard4x2A.p7.legend${i+1}`)
        processedData.push({
          name: this.$t(`dashboard4x2A.p7.legend${i+1}`),
          type: type,
          //stack: '02',
          barWidth:20,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 5
          },
          z:i,
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: $c.fade(colors[i],.9) }, 
              { offset: 0.8, color: $c.fade(colors[i],.2) }
            ], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
          },
          data: data[i]
        })
      })
      this.chartOption.series=processedData;
      this.chartOption.xAxis.data=xAxis;
      this.chartOption.legend.data=legend;

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
          show:true,
          data: [],
          top:15,
          right:20,
        },
        grid: {
          left: '4%',
          right: '5%',
          bottom: '10%',
          top: "30%",
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            name: '(1)',
            min: 0,
            max: 300,
            splitNumber: 3,
            position: 'left',
            splitLine:{show:false},
            axisLabel: {
              formatter: '{value}',
            }
          },
          {
            type: 'value',
            name: '(3)',
            min: 0,
            max: 2000,
            splitNumber: 3,
            position: 'right',
            offset: 80,
            axisLabel: {
              formatter: '{value}',
            }
          },
          {
            type: 'value',
            name: '(2)',
            min: 0,
            max: 30000,
            splitNumber: 3,
            position: 'right',
            splitLine:{show:false},
            axisLine: {
              show:false,
            },
            splitLine:{ 
              show:false,
            },
            axisLabel: {
              formatter: '{value}',
            }
          }
        ],
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
      chartData[0].colors=chartData[1].colors=getPalette({ actual:4,total:12,pickType:"rdm",palette:"alt"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">
.chart-linebar-hasTabs-dashboard4x2-A{height: 100%;
  .card-header-tabs{position: absolute; text-align: right; top:0; left:0; padding:0 20px; z-index: 10;
    .button-wrap{display:inline-block; margin:0 3px;
      .techButtonB1{border-top:none;}
    }
  }
}

</style>
