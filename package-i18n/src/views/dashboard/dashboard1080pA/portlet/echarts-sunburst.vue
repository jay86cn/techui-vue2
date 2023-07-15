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
        data:[],
        dataMax:300
      },
      chartOption:{},
      dataOri:[]
    }
  },
  watch:{
    "$tState.mapData.code"(val1,val2){
      if(val1==210000){
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
    },
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
    initData(){
      this.chartData.data=[
        {
          name: this.$t("dashboardA.r3.group1.title"),
          children: [
            {
              name: this.$t("dashboardA.r3.group1.sub1.title"),value:123,
              children: [
                { name: this.$t("dashboardA.r3.group1.sub1.item1"), value: 49 },
                { name: this.$t("dashboardA.r3.group1.sub1.item2"), value: 25},
                { name: this.$t("dashboardA.r3.group1.sub1.item3"), value: 11 }
              ]
            },
            {
              name: this.$t("dashboardA.r3.group1.sub2.title"),value:90,
              children: [ 
                { name: this.$t("dashboardA.r3.group1.sub2.item1"), value: 35 }, 
                { name: this.$t("dashboardA.r3.group1.sub2.item2"), value:15 } 
              ]
            }
          ]
        },
        {
          name: this.$t("dashboardA.r3.group2.title"), children: [
            {
              name: this.$t("dashboardA.r3.group2.sub1.title"),value:230, children: [ 
                { name: this.$t("dashboardA.r3.group2.sub1.item1"), value: 43 }, 
                { name: this.$t("dashboardA.r3.group2.sub1.item2"), value: 121 } 
              ]
            },
            {
              name: this.$t("dashboardA.r3.group2.sub2.title"),value:55, children: [ 
                { name: this.$t("dashboardA.r3.group2.sub2.item1"), value: 23 }, 
                { name: this.$t("dashboardA.r3.group2.sub2.item2"), value: 12 } 
              ]
            }
          ]
        }
      ]
      this.dataOri=JSON.stringify(this.chartData.data);
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
          text:this.$t("dashboardA.r3.tip"),subtext:"", x:20, bottom:0, 
          textStyle:{ color:getColor("staFCW"), fontSize:12, fontWeight:"normal" }, 
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
    this.initData()
    this.processOption();
  }
}
</script>
<style lang="less">
</style>
