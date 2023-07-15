<template>
<echartsInit :chartOption="chartOption" ></echartsInit>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      chartData:{
        title:"Business profit share",
        colors:[$c.aql4, $c.cyl4,$c.rel5],
        data:[
          {
            name: 'Software',
            children: [
              {
                name: 'Product',value:123,
                children: [
                  { name: 'GIS System', value: 49 },
                  { name: 'Visualization', value: 25},
                  { name: 'Financial System', value: 11 }
                ]
              },
              {
                name: 'Customization',value:90,
                children: [ 
                  { name: 'Business System', value: 35 }, 
                  { name: 'Portal', value:15 } 
                ]
              }
            ]
          },
          {
            name: 'Hardware', children: [
              {
                name: 'Servers',value:230, children: [ 
                  { name: 'Entry Level', value: 43 }, 
                  { name: 'Enterprise', value: 121 } 
                ]
              },
              {
                name: 'Network Devices',value:55, children: [ 
                  { name: 'Security Gateway', value: 23 }, 
                  { name: 'Router', value: 12 } 
                ]
              }
            ]
          }
        ],
        dataMax:300
      },
      chartOption:{},
      dataOri:[]
    }
  },
  watch:{
    "$tState.mapData.name"(val1,val2){
      if(val1=="Liaoning"){
        this.chartData.dataMax=300
        this.chartData.data=JSON.parse(this.dataOri);
        this.chartOption.visualMap.max=this.chartData.dataMax
      }else{
        this.chartData.dataMax=0
        this.mapLinkAction(this.chartData.data,3);
        this.chartOption.visualMap.max=this.chartData.dataMax/2
      }
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {},
  methods: {
    mapLinkAction(data,time){
      const {chartData}=this
      data.forEach((item,i)=>{
        if(time==1&&item.value){
          let rmdval=i*this.randomNumber(time*10,100)
          item.value=rmdval
          chartData.dataMax+=rmdval
        }else if(item.value){
          delete item.value
        }
        if(item.children&&item.children.length>0){
          const num=time-1
          this.mapLinkAction(item.children,num)
        }
      })
    },
    processData(){
      const {getColor}=this,{colors,data}=this.chartData;
      let processedData=[],
          type="bar",
          yAxisIndex=0;
      processedData.push({
        type: 'sunburst',
        data: data,
        radius: [20, '80%'],
        center:['53%','53%'],
        itemStyle: {
          borderRadius: 7,
          borderWidth: 2,
          borderColor:getColor("techBG"),
        },
        label: {
          show: true,
          color:getColor("staFCS"),
          fontSize: 12,
          rotate: 'tangential'//文字旋转
          // formatter: function (param) {
          //   return param.name+'\n'+param.value
          // }
        },
        emphasis: {
          label:{
            show: true,
            fontSize: '16',
            color:$c.wh,
            formatter: function (param) {
              return param.name+'\n'+param.value
            }
          }
        },
        levels: [{},]
      })
      // this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;

    },
    processOption(){
      const {getColor}=this
      const {dataMax,colors}=this.chartData
      this.chartOption={
        update:false,
        title:{ 
          text:"Data unit:RMB million Click data to drill down",subtext:"", x:20, bottom:0, 
          textStyle:{ fontSize:12, fontWeight:"normal" }, 
          // subtextStyle:{ color:getColor("staFCW"), fontSize:12, fontWeight:"normal" }, 
        },
        visualMap: {
          type: 'continuous',
          left:10,
          bottom:40,
          min: 0,
          max: dataMax,
          inRange: {
            color: colors
          },
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ total:8,actual:3,pickType:"seq",extra:["darken",1]})
    }
  },
  mounted() {
    this.dataOri=JSON.stringify(this.chartData.data);
    this.processOption();
  }
}
</script>
<style lang="less">
</style>
