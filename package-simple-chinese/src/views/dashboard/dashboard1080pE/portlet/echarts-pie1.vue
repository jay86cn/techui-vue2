<template>
<div class="dashboardC-pie1-wrap echarts-hasSelect">
  <div class="total-digital">
    <span class="desc">{{counter.title}}</span>
    <DigitalTransform  class="counter" :value="counter.num" :interval="globalConfig.animation?1000:0" :dislocation="false" ></DigitalTransform>
  </div>
  <el-select v-model="select.current" size="mini" style="width:120px" filterable placeholder="选择时间范围" :popper-append-to-body="false" >
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
          { value: 'a', label: '全年' }, 
          { value: 'b', label: '去年' }, 
          { value: 'c', label: '2022年1月' }, 
          { value: 'd', label: '2022年2月' }, 
          { value: 'e', label: '2022年3月' }, 
          { value: 'f', label: '2022年4月' }, 
          { value: 'g', label: '2022年5月' }, 
        ],
        current: 'a'
      },
      counter:{title:"合同总额",num:1723},
      chartData:{
        legend:['产品合同', 'MA续保合同', '技术服务合同', '硬件合同','实施合同'],
        colors:[$c.yel3,$c.cbl4,$c.aql4,$c.pul3,$c.rel3,],
        data:[2831.2314, 998.3421, 731.3451, 2341.3521, 1132.11,]
      },
      chartOption:{ }
    }
  },
  watch:{
    "select.current"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:500,
        length:5,
        group:1
      })
      let newAdd=0;
      this.chartData.data=dr[0]
      dr[0].forEach((item,i)=>{
        newAdd+=item
      })
      this.counter.num=newAdd;
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,data}=this.chartData,
          processedData=[]
      legend.forEach((item,i)=>{
        processedData.push({
          value:data[i],
          name:legend[i],
          itemStyle:{
            color:colors[i]
          }
        })
      })
      this.chartOption.series[0].data=processedData;
      this.chartOption.legend.data=legend;

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        title:{ text:"单位：万元", left:10, top:10, textStyle:{  fontSize:12, fontWeight:"normal" }, },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
        // orient: 'vertical',
          show:false,
          x: 'center',
          y:'center',
          width:"100px",
          data:[]
        },
        series: [
          {
            name:'数据类别',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: $c.fade($c.bll9,1),
              borderWidth: 2,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
            label: {
              fontSize: 14,
              color: getColor("staFC"),
              align: 'left',
              padding: 4,
              formatter: function(data){
                  return '{b|'+data.name+'}'+"\n"+'{hr|}'+"\n"+"{d|"+data.percent.toFixed(1)+"%"+"}"
                  //return data.name+"\n"+data.percent.toFixed(1)+"%"
              },//'{b|{b}}\n{hr|}\n{d|{d}%}',
              rich: {
                b: { fontSize: 16,fontWeight:'bold',color: $c.cyl5, align: 'left', lineHeight:30},
                hr: { borderColor: getColor("staFC"), width: '100%', borderWidth: 1, height: 0 },
                d: { fontSize: 14, color: getColor("staFC"), align: 'left', lineHeight:30},
                c: { fontSize: 14, color: $c.cyl3, align: 'center', padding: 4 }
              }
            },
            labelLine: {
              show: true,
              length: 20,
              length2: 20,
              lineStyle: {
                width: 1
              }
            },
            data:[]
          }
        ]
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:5,total:10,palette:"alt"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">
.dashboardC-pie1-wrap{
  .total-digital{.fc(var(--font-normal));  text-align: center; line-height: 1.5; width: 200px;  .poa; top:53%; left:50%; .fixc("xy");
    .desc{display:block; font-size: 28px;  .ff("cn1");}
    .counter{display:block; font-size: 32px; font-weight: bold; .ff("en5");}
  }
}

</style>
