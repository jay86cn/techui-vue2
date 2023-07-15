<template>
<div class="dashboardB-pieB-wrap echarts-hasSelect at1-left">
  <div class="total-digital">
    <span class="desc">{{counter.title}}</span>
    <DigitalTransform  class="counter" :value="counter.num" :interval="globalConfig.animation?1000:0" :dislocation="false" ></DigitalTransform>
  </div>
  <el-select v-model="select.current" size="mini" :popper-append-to-body="false" style="width:100px" filterable placeholder="选择井场">
    <el-option
      v-for="item in select.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
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
      select:{
        options: [
          { value: 'a', label: "Team A" }, 
          { value: 'b', label: "Team B" }, 
        ],
        current: 'a'
      },
      chartData:{
        legend:['Material Cost','Internal Cost','Other Expenses','Labor Cost','Amortization','Revenue'],
        colors:[$c.bll5,$c.inl3,$c.aql3,$c.yel3,$c.orl3,$c.rel3],
        data:[325,252,323,183,120,143]
      },
      counter:{title:"Total Cost",num:1723},
      chartOption:{ }
    }
  },
  watch:{
    "select.current"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:400,
        length:6,
        group:1
      })
      this.chartData.data=dr[0]
      this.chartOption.update=true;
      this.processData();
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

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ show:false, text:"", x:'center', top:'32%', textStyle:{ color:$c.bll5, fontSize:24, fontWeight:"bold", lineHeight:30 }, },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',//horizontal
          show:true,
          right: '10',
          top:'22%',
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
                color:getColor("staFCW"),
                padding:10
              },
              b:{
                fontSize:16,
                color:getColor("staFC"),
              }
            }
          }
        },
        series: [
          {
            name:'数据类别',
            type:'pie',
            radius: ['40%', '65%'],
            center: ['30%', '55%'],
            //roseType: 'radius',
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
            // emphasis: { label:{ show: false, fontSize: '20', color:$c.gyd5, } },
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
      chartData.colors=getPalette({actual:6,total:13,pickType:"seq",palette:"alt" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">
.dashboardB-pieB-wrap{height: 100%;
  .total-digital{.fc(var(--font-normal));  text-align: center; width: 100px;  .poa; top:54%; left:18%; .fixc("y");
    .desc{display:block;}
    .counter{display:block; font-size: 24px; font-weight: bold;}
  }
}

</style>
