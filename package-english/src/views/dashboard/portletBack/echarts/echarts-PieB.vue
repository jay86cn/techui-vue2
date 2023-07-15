<template>
<div class="common-pieB-wrap">
  <div class="total-digital">
    <span class="desc">{{counter[current].title}}</span>
    <!-- <DigitalTransform  class="counter" :value="counter[current].num" :interval="globalConfig.animation?1000:0" :dislocation="false" ></DigitalTransform> -->
  </div>
<echartsInit :chartOption="chartOption"></echartsInit>
</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      chartData:{
        legend:['工业用水','农业用水','生活用水','循环水','其他'],
        colors:[$c.bll5,$c.inl3,$c.yel3,$c.orl3,$c.rel3],
        data:[325,252,323,183,120]
      },
      current:0,
      counter:[
        {title:"年用水量",num:1723},
        {title:"日用水量",num:12},
      ],
      chartOption:{
        update:false,
        title:{
          show:false,
          text:"海侵区\n面积占比",
          x:'center',
          top:'32%',
          textStyle:{
            color:$c.bll5,
            fontSize:24,
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
          top:'30',
          data:[],
          formatter:(name)=>{
            let target;
            for(let i=0;i<this.chartData.data.length;i++){
              if(this.chartData.legend[i]==name){
                target=this.chartData.data[i]
              }
            }
            
            return "{a|"+name+"}"+" "+"{b|"+target+"}"
          },
          textStyle:{
            rich:{
              a:{
                  fontSize:14,
                  color:$c.bll5,
                  padding:10
              },
              b:{
                  fontSize:16,
                  color:$c.cyl5
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
            //roseType: 'radius',
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'outside',
            },
            itemStyle: {
                borderRadius: 10,
                borderColor: $c.bll9,
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
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,data}=this.chartData,
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

    }
  },
  mounted() {
		this.processData();
  }
}
</script>

<style lang="less">
.common-pieB-wrap{height: 100%;
  .total-digital{.fc(@cyl5); text-align: center; width: 100px; height: 100px; .poa; top:44%; left:17%; 
    .desc{display:block;}
    .counter{display:block; font-size: 24px; font-weight: bold;}
  }

}
</style>
