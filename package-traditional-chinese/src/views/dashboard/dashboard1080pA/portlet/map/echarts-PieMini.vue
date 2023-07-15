<template>
  <div class="pieMini-wrap">
    <echartsInit :chartOption="chartOption"></echartsInit>
  </div>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
  mixins: [themeChart],
  components: { },
  data() {
    return {
      chartData:{
        legend:['軟件', '硬件', '技術服務', '安全服務'],
        color:[$c.cyl4,$c.bll8],
        data:[43, 97, 43, 60],
        center:[
          ['28%','20%'],
          ['28%','40%'],
          ['28%','60%'],
          ['28%','80%'],
        ],
        sum:243
      },
      chartOption:{}
    };
  },
  watch:{
    "$tState.mapData.code"(val1,val2){
      this.chartData.data=this.randomData({
        min:0,
        max:100,
        length:4,
        group:1
      })[0]
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {
  },
  methods: {
    processData(){
      const {data,legend,color,center,sum}=this.chartData
      this.chartOption.color=color;
      this.chartOption.title=[]
      for(let i=0;i<legend.length;i++){
        this.chartOption.title.push({
          text:(data[i]/sum*100).toFixed(0)+'%',
          subtext: legend[i],
          itemGap:5,
          top: 20*(i+1)-8+'%',
          left: '50%',
          textAlign: 'left',
          textStyle:{ fontSize:16, fontWeight:"bold"},
          subtextStyle:{ fontSize:12, fontWeight:"normal"},
        });
      }
      let processDataset=[],seriesData=[];
      for(let i=0;i<3;i++){
        processDataset.push([])
        if(i==0){
          for(let j=0; j<legend.length+1;j++){
            if(j==0){
              processDataset[i].push("product")
            }else{
              processDataset[i].push(legend[j-1])
            }
          }
        }else{
          for(let j=0; j<data.length+1;j++){
            if(j==0){
              processDataset[i].push(i==1?'实际':'其他')
            }else{
              processDataset[i].push(i==1?data[j-1]:sum-data[j-1])
            }
          }
        }
      }
      legend.forEach((item,i)=>{
        seriesData.push({ 
          name:legend[i],
          type: 'pie',
          radius: ['20%', '40%'],
          center: center[i],
          label: {show:false},
          labelLine: { show: false, },
          encode: {
            itemName: 'product',
            value: legend[i]
          }
        })
      })
      this.chartOption.dataset.source=processDataset;
      this.chartOption.series=seriesData;
    },
    processOption(){
      this.chartOption={
        title:[
          { text: '', left: 'center', },
        ],
        legend: {show:false},
        tooltip: {},
        dataset: {
          source: []
        },
        series: []
      }
      this.processData();
    },
    
  },
  mounted() {
		this.processOption();
  }
  
};
</script>
<style lang="less">
.dashboard1080pA-map{
  .pieMini-wrap{.pof; left:26%; bottom:30px; z-index: 29; width: 120px; height: 280px;}
}
</style>
