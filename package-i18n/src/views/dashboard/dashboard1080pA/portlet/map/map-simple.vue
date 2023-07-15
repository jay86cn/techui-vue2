<template>
  <div class="dashboard1080pAG-map">
    <echartPieMini></echartPieMini>
    <mapCounter></mapCounter>
    <mapPopover :clickData="clickData"></mapPopover>
    <echartsMap class="echartsMap" v-if="mapInited" :chartOption="chartOption" :chartData="chartData" @mapClick="mapClick" @mapAction="mapAction"></echartsMap>
  </div>
</template>
<script>
const symbol = {
0:'path://m569.52,440.01c18.46,31.99-4.71,71.99-41.58,71.99H48.05c-36.94,0-60-40.05-41.58-71.99L246.42,23.99c18.47-32.01,64.72-31.95,83.15,0l239.94,416.03h0Zm-281.52-86.01c-25.4,0-46,20.6-46,46s20.6,46,46,46,46-20.6,46-46-20.6-46-46-46Zm-43.67-165.35l7.42,136c.35,6.36,5.61,11.35,11.98,11.35h48.55c6.37,0,11.64-4.98,11.98-11.35l7.42-136c.38-6.87-5.1-12.65-11.98-12.65h-63.38c-6.88,0-12.36,5.78-11.98,12.65h0Z',
};

import themeChart from "@/mixins/themeChart"
import {map} from "@/api/api"
export default {
  // name: "blockCenter",
  mixins: [themeChart],
  components: {
    mapPopover:() => import("./map-popover.vue"),
    mapCounter:() => import('./map-counter/map-counter.vue'),
    echartPieMini:() => import('./echarts-PieMini.vue'),
    mapViewToggle:() => import('./map-viewToggle.vue'),
  },
  data() {
    return {
      mapInited:false,
      view:{
        data:[
        ],
        current:"data1"
      },
      chartData:{
        alladcode:[],
        geoJson:{},
        visualMapColors:[$c.bll9,$c.inr5],
        mapData:[],
        pointData:[],
        pinData:[],
        circleData:[],
        warningData:[],
        dangerData:[],
        sum:0,
        
        nav:{
          data:[{code:210000,name:this.$t("map.navRoot")}, ], //{code:100000,name:"全国"},  {code:140000,name:"山西省"},
          position:{
            top:"18%",
            left:"27.5%"
          },
        },
        maxData:1000,
        minData:0,
        maxPin:75,
        minPin:30,
        layoutCenter:['50%', '55%'],
        layoutSize:"85%",
        visualMapPos:{
          right:"26.5%",
          bottom:"5%"
        }
      },
      chartOption:{update:false},
      clickData:{
        show:false,
        area:"北京",
        data:"325",
        info:"文字信息",
        x:120,
        y:120
      }
    };
  },
  computed: {
    publicUrl(){
      if(process.env.NODE_ENV=="development"){
        return `./static/maps/${this.globalConfig.language}/`
      }else if(process.env.NODE_ENV=="production"){
        return `./static/maps/${this.globalConfig.language}/`
      }
    },
    pinColor(){
      const {view}=this;
      if(view.current=="data1"){
        return [$c.aql2,$c.cyl5,$c.cyl9]
      }else if(view.current=="data2"){
        return [$c.cyl3,$c.cbl4,$c.bll9]
      }else if(view.current=="data3"){
        return [$c.orl3,$c.rel5,$c.wh]
      }else if(view.current=="data4"){
        return [$c.pul3,$c.inl6,$c.wh]
      }
    },
    
    
  },
  watch:{
    
  },
  methods: {
    changeView(item){
      let navDept=this.chartData.nav.data
      this.view.current=item.label;
      this.clickData.show=false;
      this.getMapData(navDept[navDept.length-1]);
    },
    processMapData(current){//4th 处理时间线的 柱状图数据
      // const {chartData,circleData,sum}=this

      const {chartData,chartOption,processTimeLine}=this
      const {mapData,pointData,pinData,circleData,warningData,dangerData,sum,navDept,maxData,minData,maxPin,minPin}=chartData
      // let currentDept=navDept[navDept.length-1]
      // let seriesData=convertData(circleData['code'+currentDept.code],currentDept)
      let mapD=[]
      
        
      mapD.push(
        {
          data: pointData,
          geoIndex: 0,
          type:'map',
        },
        {
          symbolSize: 5,
          emphasis:{ label: { show: false } },
          label: {//ayinMark
            
            position: 'center',
            align:"center",
            show: false,
            color: $c.wh,
            fontSize: 12,
          },
          symbolOffset: [0, -10],
          itemStyle: {
            color: '#fff'
          },
          name: 'light',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          data: pointData,
        },
        {
          type: 'scatter',
          symbol: 'circle',
          coordinateSystem: 'geo',
          symbolOffset: [0, -10],
          large:true,
          label: {
            show: false,
          },
          emphasis: {
            label: {
              fontSize: 14,
              color:this.pinColor[2],
              fontWeight:"bold",
              // formatter: function(para) { return para.data.value[2] },//para.data.name +" : " + 
            }
          },
          itemStyle: {
            color: $c.darken(this.pinColor[1],1),
          },
          symbolSize:15,
          data: circleData,
          zlevel: 2,
        },
        {
          type: 'scatter',
          symbol: 'pin',
          // type: 'effectScatter',
          // symbol: 'circle',
          coordinateSystem: 'geo',
          // rippleEffect: { brushType: 'stroke' },
          // showEffectOn: 'render',
          symbolOffset: [0, -10],
          large:true,
          label: {
            show: true,
            position:"inside",
            //offset:[0 ,5],
            align:"center",
            color: this.pinColor[2],
            fontSize: 10,
            formatter: p => {
              if(p.data.value[2].toString().length>4){
                return (p.data.value[2]/10000).toFixed(0)+"万"
              }else{
                return p.data.value[2]
              }
            },
            // rich: { val:{ padding:[20,0,20,0], fontSize: 12, color:$c.re, }, cnNum: { fontSize: 12, color:$c.wh, } },
          },
          emphasis: {
            label: {
              fontSize: 14,
              color:this.pinColor[2],
              fontWeight:"bold",
              // formatter: function(para) { return para.data.value[2] },//para.data.name +" : " + 
            }
          },
          itemStyle: {
            color:{
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: this.pinColor[0] }, 
                { offset: 1, color: this.pinColor[1] }
              ],
              global: false // 缺省为 false
            }
          },
          symbolSize: (val)=> {
            var a = (maxPin - minPin) / (maxData - minData);
            var b = maxPin - a * minData;
            b = maxPin - a * maxData;
            return a * val[2] + b * 1.3;
          },
          data: pinData,
          zlevel: 2,
        },
        {
          type: "scatter",
          symbol: symbol[0],
          coordinateSystem: 'geo',
          symbolOffset: [0, -10],
          label: { show: false, },
          itemStyle: {
            color: {
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: $c.yel1}, 
                { offset: 1, color: $c.yel6}
              ],
              global: false // 缺省为 false
            },
          },
          symbolSize: 24,
          emphasis: { scale:1.5,},
          data: warningData,
          zlevel: 2,
        },
        {
          type: "scatter",
          symbol: symbol[0],
          coordinateSystem: 'geo',
          symbolOffset: [0, -10],
          label: { show: false, },
          
          itemStyle: {
            color: {
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: $c.rel3}, 
                { offset: 1, color: $c.rel5}
              ],
              global: false // 缺省为 false
            },
          },
          symbolSize: 24,
          emphasis: { scale:1.5,},
          data: dangerData,
          zlevel: 2,
        }
        
      )

      chartOption.series=mapD
      this.mapInited=true
    },
    processOption(current){//3rd 初步处理图表配置项
      if(!current){
        let bred=this.chartData.nav.data
        current=bred[bred.length-1]
      }
      const {chartData,chartOption,processMapData,getColor}=this,{visualMapPos,layoutCenter,layoutSize}=chartData
      let tempOption={
        title: {
          show:false,
          text: current.name,
          left: 'center'
        },
        
        geo:{
          type: 'map',
          map: current.name,
          roam: true,
          scaleLimit: {
            min: .5,
            max: 3
          },
          //zoom :1.2,
          layoutCenter,
          layoutSize,
          zlevel:1,
          label: {
            show: true,
            color:getColor("actFC"),
            fontSize: 12,
            
            
            //offset:[0,10],
          },
          
          itemStyle: {
            borderColor: getColor("mapBGHA"),
            borderWidth: 1,
            shadowColor: getColor("mapSD"),
            shadowOffsetY: 0,
            shadowBlur: 10,
            // areaColor:  getColor("mapBGHB"),
          },
          select:{
            label: {
              color:getColor("actFCS"),
              fontSize: 14,
            },
            itemStyle: {
              areaColor: getColor("mapBGHA"),
            }
          },
          emphasis: {
            label: {
              color:getColor("actFCS"),
              fontSize: 14,
              show: true
            },
            itemStyle: {
              areaColor: getColor("mapBGHA"),
            }
          },
        },
        series: [ ]
      }
      tempOption.visualMap={
        
        type: "continuous",//continuous piecewise
        right:visualMapPos.right,
        bottom:visualMapPos.bottom,
        min:0,
        max:chartData.maxData,
        seriesIndex:0,
        orient:"horizontal",
        // backgroundColor: 'red',
        
        inRange:{
          color:chartData.visualMapColors, //控制颜色渐变的范围
        },
        textStyle:{
          color:getColor("staFC")
        },
        

        calculable: true //出现滑块
      }
      // if(this.view.current=="data4"){
      // }else{
      //   tempOption.visualMap=null
      // }
      for(let a in tempOption){
        chartOption[a]=tempOption[a]
      }
      chartOption.update=true;
      processMapData(current)
    },
    getMapData(current) {//2nd 生成地图假数据 ------------ 开发过程中，这个方法要替换成根据地图参数获取服务器数据的方法！
      const {chartData,processOption}=this
      let mapData = [],pointData=[] ,pinData = [], circleData = [],warningData = [],dangerData = [], sum = 0,
          topIndex=[3,7,9,18,21],warnIndex=[12,16],dangerIndex=[5];

      chartData.geoJson.features.forEach((geo,i) => {
        if(geo.properties.name){
          let value = this.randomNumber(1,chartData.maxData/3)
          let maxValue = this.randomNumber(chartData.maxData/2,chartData.maxData)
          // mapData.push({
          //   name: geo.properties.name,
          //   value: value,
          //   cityCode: parseInt(geo.properties.adcode)
          // })
          if(geo.properties.center){
            if(topIndex.includes(i)){
              let pin={
                name: geo.properties.name,
                value: [geo.properties.center[0], geo.properties.center[1], maxValue],
                cityCode: parseInt(geo.properties.adcode)
              }
              pinData.push(pin)
              pointData.push(pin)
            }else{
              if(value<100){ value=0 }
              let circle={
                name: geo.properties.name,
                value: [geo.properties.center[0], geo.properties.center[1], value],
                cityCode: parseInt(geo.properties.adcode)
              }
              pointData.push(circle)
              circleData.push(circle)
            }
            if(warnIndex.includes(i)){
              warningData.push({
                name: geo.properties.name,
                value: [geo.properties.center[0], geo.properties.center[1]-.3, 'warning',this.$t("map.popover.warning")],
                cityCode: parseInt(geo.properties.adcode)
              })
            }
            if(dangerIndex.includes(i)){
              dangerData.push({
                name: geo.properties.name,
                value: [geo.properties.center[0], geo.properties.center[1]-.1, 'danger',this.$t("map.popover.danger")],
                cityCode: parseInt(geo.properties.adcode)
              })
            }
          }
          sum += value
        }
      })
      chartData.mapData=mapData;
      chartData.pointData=pointData;
      chartData.pinData=pinData;
      chartData.circleData=circleData;
      chartData.warningData=warningData;
      chartData.dangerData=dangerData;
      chartData.sum=sum;
      processOption(current)
    },
    async initChart(current) {//1st 从地图文件 获取geojson数据 
      const {chartData,getMapData}=this
      if(chartData.alladcode.length==0){
        await map(this.publicUrl,'all.json').then((res) => {
          chartData.alladcode=res;
        }).catch(function (err) {
          console.error("getmap",err);
        });
      }
      // chartData.geoJson = await this.getGeoJson(geoCode+'_geojson_full.json');
      await map(this.publicUrl,current.code+'_geojson_full.json').then((res) => {
        this.$tState.mapData.code=current.code;
        this.$tState.mapData.name=current.name;
        chartData.geoJson = {...res, ...current};
      }).catch(function (err) {
        console.error("getmap",err);
      });
      getMapData(current);
      
    },
    mapAction(params){
      const {clickData}=this;
      clickData.show=false;
    },
    mapClick(params){
      const {clickData}=this,
            {alladcode,initChart,nav}=this.chartData,
            navDept=nav.data
      clickData.show=false;
      if(navDept[navDept.length-1].name!=params.name){
        if(params.componentType=="geo"||(params.componentType=="series"&&params.componentSubType=='map')){
          let regionCode = alladcode.filter(areaJson => areaJson.name === params.name)[0]?.adcode;
          console.log("regionCode",regionCode);
          let obj={
            code:regionCode,
            name:params.name,
          }
          
          if(navDept[navDept.length-1].name!=params.name&&navDept.length<2){
            this.initChart(obj)
            navDept.push({code:regionCode,name:params.name});
          }
        }else if(params.code){
          this.initChart(params)
        }
      }
      if(params.componentType=="series"&&params.componentSubType=='scatter'){
        clickData.area=params.name
        clickData.data=params.data.value[2]
        clickData.x=params.domPosition[0]
        clickData.y=params.domPosition[1]
        clickData.show=true
        if(params.value[2]=="warning"||params.value[2]=="danger"){
          clickData.info=params.data.value[3]
        }
      }
    },
    chartTheme(){
      let visualColor=this.themePalette.chart.visual
      this.chartData.visualMapColors=this.getPalette({
        total:7,
        actual:4,
        palette:visualColor,
      })
    }
  },
  
  mounted() {
    const {chartData}=this
    this.initChart(chartData.nav.data[0]);

  },
  beforeDestroy(){
    
  },
  destroyed(){
  },
};

</script>


<style  lang="less">
.dashboard1080pAG-map{.poa; .fullbox;
  .echartsMap{.poa; .fullbox; .bgc(@tr); }
}
</style>
