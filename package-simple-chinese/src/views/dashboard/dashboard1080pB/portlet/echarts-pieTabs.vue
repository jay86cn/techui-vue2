<template>
<div class="chart-hasTabs-ScreenB">
  <div class="unit">单位:亿吨</div>
  <div class="card-header-tabs">
    <div class="button-wrap" @click="tabClick(index)" v-for="(item,index) in chartData" >
      <techButtonB1 :config="buttonConfig" :class="index==current?'active':''">{{item.name}}</techButtonB1>
    </div>
  </div>
  <div class="total-digital">
    <span class="desc">{{chartData[current].name}}</span>
    <DigitalTransform  class="counter" :value="total" :interval="globalConfig.animation?1000:0" :dislocation="false" ></DigitalTransform>
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
      total:0,
      buttonConfig:{
        height:30,
        decoration:false
      },
      chartData:[
        {
          name:"盈利总额",
          legend:['软件','硬件','服务','安全','广告'],
          colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],
          data:[625,352,123,83,129]
        },
        {
          name:"支出总额",
          legend:['人力','商务','后勤','差旅','奖金','办公用品'],
          colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],
          data:[15,72,43,13,20,30]
        }
      ],
      chartOption:{ }
    }
  },
  computed: {},
  props: ['tabActive'],
  watch:{
    tabActive(val){
      let tempData=this.randomData({
        min:1,
        max:999,
        length:5,
        group:2
      })
      this.chartData[0].data=tempData[0];
      this.chartData[1].data=tempData[1];
      this.processData();
      this.chartOption.update=true;
    }
  },
  methods: {
    
    tabClick(index){
      this.current=index
      this.processData();
      this.chartOption.update=true;
    },
    processData(){
      let {legend,colors,data}=this.chartData[this.current],
          processedData=[],
          total=0;
      legend.forEach((item,i)=>{
        processedData.push({
          value:data[i],
          name:legend[i],
          itemStyle:{
            color:colors[i]
          }
        })
        total+=data[i];
      })
      this.total=total;
      this.chartOption.series[0].data=processedData;
      this.chartOption.legend.data=legend;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        title:{
          show:false,
          text:"总量\n1231",
          x:'center',
          top:'45%',
          left:"center",
          textStyle:{
            fontSize:18,
            fontWeight:"bold",
            lineHeight:30
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',//horizontal
          show:true,
          itemWidth: 14,
          itemGap: 5,
          right: '30',
          top:'30%',
          data:[],
          formatter:(name)=>{
            let target,
                data=this.chartData[this.current].data,
                legend=this.chartData[this.current].legend;
            for(let i=0;i<data.length;i++){
              if(legend[i]==name){
                target=data[i]
              }
            }
            
            return "{a|"+name+"}"+" "+"{b|"+target+"}"
          },
          textStyle:{
            rich:{
              a:{
                fontSize:14,
                color:getColor("staFC"),
                padding:10
              },
              b:{
                fontSize:16,
                color:getColor("staFCW")
              }
            }
          }
        },
        series: [
          {
            name:'数据类别',
            type:'pie',
            radius: ['45%', '70%'],
            center: ['30%', '55%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'outside',
            },
            itemStyle: {
                borderRadius: 10,
                borderColor: getColor("techBG"),
                borderWidth: 5
            },
            emphasis: {
              label:{
                show: false,
                fontSize: '20',
                color:$c.gyd5,
              }
            },
            labelLine: {
              show: false
            },
            data:[]
          }
        ]
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this//palette:[$c.rel5,$c.yel2,$c.grl3,$c.cyl5,$c.bll5]
      chartData[0].colors=chartData[1].colors=getPalette({total:15, actual:5, palette:"alt" })
      // this.viewColor(this.chartData[0].colors)
    }
  },
  mounted() {
    // this.viewColor(this.chartData[0].colors)
		this.processOption();
  }
}
</script>

<style lang="less">
.chart-hasTabs-ScreenB{height: 100%;
  .card-header-tabs{position: absolute;  top:0; left:50%; .fixc("x"); padding:0 20px; z-index: 10; white-space: nowrap; 
    .button-wrap{display:inline-block; margin:0 3px; }
  }
  .total-digital{.fc(var(--font-normal)); text-align: center; width: 100px; height: 100px; .poa; top:44%; left:18%; 
    .desc{display:block; .ff("cn1"); font-size: 18px; margin:0 0 10px 0;}
    .counter{display:block; font-size: 32px; line-height: 32px; font-weight: bold; .ff("en0");}
  }
  .unit{.poa; right:10px;top:5px;.fc(var(--font-weak));}
}


</style>
