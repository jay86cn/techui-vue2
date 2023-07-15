<template>
<div class="com-pieB-wrap">
  <div class="total-digital center">
    <span class="desc">罚款总额</span>
    <DigitalTransform  class="counter" :value="total" :interval="globalConfig.animation?1000:0" :dislocation="false" ></DigitalTransform>
  </div>
<echartsInit :chartOption="chartOption"></echartsInit>
</div>
</template>
<script>
export default {
  components: {
    // DigitalTransform,
  },
  data() {
    return {
      total:1252,
      chartData:{
        legend:['监察罚款','事故罚款'],
        colors:[$c.yel3,$c.rel3,$c.rel3],
        data:[1252,225]
      },
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
          itemHeight:55,
          itemWidth:8,
          orient: 'vertical',//horizontal
          //show:false,
          right: '60',
          width:100,
          height:300,
          top:'25%',
          data:[],
          formatter:(name)=>{
            let target,
                percent=0;
            for(let i=0;i<this.chartData.data.length;i++){
              if(this.chartData.legend[i]==name){
                target=this.chartData.data[i]
                percent=(this.chartData.data[i]/this.total).toFixed(2)*100
              }
            }
            
            return "{a|"+name+"}"+"\n"+"{b|"+target+"万元}"+"\n"+"{b|"+percent+"%}"
          },
          textStyle:{
            rich:{
              a:{
                  fontSize:16,
                  color:$c.bll5,
                  padding:2,
              },
              b:{
                  fontSize:12,
                  color:$c.cyl5,
                  padding:2,
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
            //avoidLabelOverlap: true,
            label: {
              show:false,
              fontSize: 14,
              color: $c.cbl3,
              align: 'left',
              padding: 4,
              lineHeight:20,
              formatter: function(data){
                  return data.name+"\n"+data.value+'万元'
              },//'{b|{b}}\n{hr|}\n{d|{d}%}',
              
            },
            itemStyle: {
                borderRadius: 10,
                borderColor: $c.bll9,
                borderWidth: 5
            },
            emphasis: {
              
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
.com-pieB-wrap{height: 100%;
  .total-digital{.fc(@cyl5); text-align: center; width: 100px; height: 100px; .poa; top:44%; left:17%; 
    .desc{display:block;}
    .counter{display:block; font-size: 24px; font-weight: bold;}
  }

}
// .total-digital{
//   &.center{left:50%; .fixc("x");}
// }
</style>
