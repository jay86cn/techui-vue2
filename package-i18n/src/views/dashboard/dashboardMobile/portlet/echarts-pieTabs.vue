<template>
<div class="chart-hasTabs mobile-pie-tabs">
  <div class="unit">{{$t(`dashboardC.r1.unit`)}}</div>
  <div class="card-header-tabs">
    <div class="button-wrap" @click="tabClick(index)" v-for="(item,index) in chartData" >
      <techButtonB1 :config="buttonConfig" :class="index==current?'active':''">{{$t(`dashboardC.r1.item${index+1}`)}}</techButtonB1>
    </div>
  </div>
  <div class="total-digital">
    <span class="desc">{{$t(`dashboardC.r1.item${current+1}`)}}</span>
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
      title:"Year Consum",
      total:0,
      buttonConfig:{
        height:30,
        decoration:false
      },
      chartData:[
        {
          name:"Year Consum",
          legend:['Industrial','Agricultural','Domestic','circulating','Other'],
          colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],
          data:[625,352,123,83,129]
        },
        {
          name:"Daily Consum",
          legend:['Industrial','Agricultural','Domestic','circulating','Other'],
          colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],
          data:[15,72,43,13,20]
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
      const {current}=this,
            {legend,colors,data}=this.chartData[current]
      let processedData=[],
          total=0;
      legend.forEach((item,i)=>{
        this.chartData[current].legend[i]=this.$t(`dashboardC.r1.item${current+1}_${i+1}`)
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
            color:getColor("staFC"),
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
          right: '30',
          top:'25%',
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
      const {chartData,getPalette,oriColors}=this
      chartData[0].colors=chartData[1].colors=getPalette({total:15, actual:5, palette:"alt" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">
.mobile-pie-tabs{height: 100%;
  .card-header-tabs{position: absolute;  top:0; left:50%; .fixc("x"); padding:0 20px; z-index: 10; white-space: nowrap; 
    .button-wrap{display:inline-block; margin:0 3px;
      .techButtonB1{border-top:none;}
    }
  }
  .unit{.poa; right:20px;top:10px;.fc(var(--font-weak));}
  .total-digital{.fc(var(--font-normal)); text-align: center; width: 100px; height: 100px; .poa; top:46%; left:18%; 
    .desc{display:block; .ff("cn1");}
    .counter{display:block; font-size: 24px; font-weight: bold; .ff("en0");}
  }
}

</style>
