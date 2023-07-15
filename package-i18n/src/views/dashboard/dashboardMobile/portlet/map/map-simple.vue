<template>
  <div class="dashboardMobileA-map" >
    <mapPopover :clickData="clickData"></mapPopover>
    <mapViewToggle :view="view" @changeView="changeView"></mapViewToggle>
    <echartsMap class="echartsMap" v-if="mapInited" :chartOption="chartOption" :chartData="chartData" @mapClick="mapClick" @mapAction="mapAction"></echartsMap>
  </div>
</template>
<script>
import themeChart from "@/mixins/themeChart"
import {map} from "@/api/api"
export default {
  mixins: [themeChart],
  components: {
    mapPopover:() => import("./map-popover.vue"),
    mapCounter:() => import('./map-counter.vue'),
    mapViewToggle:() => import('./map-viewToggle.vue'),
  },
  data() {
    return {
      mapInited:false,
      view:{
        data:[
          {title:"Mine District",label:"data1"},
          {title:"Enforcement",label:"data2"},
          {title:"Risk District",label:"data3"},
        ],
        current:"data1"
      },
      chartData:{
        alladcode:[],
        geoJson:{},
        visualMapColors:[$c.cyA16,$c.cbA17, $c.blA18],
        mapData:[],
        pointData:[],
        sum:0,
        nav:{
          data:[{code:210000,name:this.$t("map.navRoot")}, ],//{code:100000,name:"全国"},{code:210000,name:"辽宁省"},
          position:{
            top:5,
            left:15
          },
        },
        maxData:500,
        minData:9,
        maxPin:35,
        minPin:15,
        layoutCenter:['50%', '50%'],
        layoutSize:"90%",
        // visualMapPos:{
        //   right:"26.5%",
        //   bottom:"17%"
        // }
      },
      chartOption:{update:false},
      clickData:{
        show:false,
        area:"北京",
        data:"325",
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
        return [$c.aql2,$c.cyl5,$c.bll7]
      }else if(view.current=="data2"){
        return [$c.cbl3,$c.bll5,$c.wh]
      }else if(view.current=="data3"){
        return [$c.orl3,$c.rel5,$c.wh]
      }
    },
    
    
  },
  methods: {
    changeView(item){
      let navDept=this.chartData.nav.data
      this.view.current=item.label;
      this.clickData.show=false;
      this.getMapData(navDept[navDept.length-1]);
    },
    processMapData(current){//4th 处理时间线的 柱状图数据
      // const {chartData,pointData,sum}=this

      const {chartData,chartOption,processTimeLine}=this
      const {mapData,pointData,sum,navDept,maxData,minData,maxPin,minPin}=chartData
      // let currentDept=navDept[navDept.length-1]
      // let seriesData=convertData(pointData['code'+currentDept.code],currentDept)
      
      chartOption.series=[
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
            fontSize: 8,
            formatter: p => {
              // return '{val|'+p.data.value[2]+'}\n'+'{cnNum|'+p.data.name+'}';
              return p.data.value[2]
            },
            // rich: { val:{ padding:[20,0,20,0], fontSize: 12, color:$c.re, }, cnNum: { fontSize: 12, color:$c.wh, } },
          },
          
          emphasis: {
            label: {
              fontSize: 10,
              color:this.pinColor[2],
              fontWeight:"bold",
              formatter: function(para) { return para.data.value[2] },//para.data.name +" : " + 
            }
          },
          // itemStyle: {
          //     color: $c.fade($c.cyl5,.5),
          //     shadowBlur: 10,
          //     shadowColor:  $c.fade($c.cbl3,.5)
          // },
          itemStyle: {
            color: {
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: this.pinColor[0] }, 
                { offset: 1, color: this.pinColor[1] }
              ],
              global: false // 缺省为 false
            },
          },
          symbolSize: (val)=> {
            var a = (maxPin - minPin) / (maxData - minData);
            var b = maxPin - a * minData;
            b = maxPin - a * maxData;
            return a * val[2] + b * 1.3;
          },
          data: pointData,
          zlevel: 2,
        }
      ]
        
      this.mapInited=true
    },
    processOption(current){//3rd 初步处理图表配置项
      if(!current){
        let bred=this.chartData.nav.data
        current=bred[bred.length-1]
      }
      const {chartData,chartOption,processMapData,getColor}=this,
            {layoutCenter, layoutSize}=chartData
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
            borderColor: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
              { offset: 0, color: getColor("mapBDA") }, 
              { offset: 1, color: getColor("mapBDB") }
            ], false),
            borderWidth: 1,
            shadowColor: getColor("mapSD"),
            shadowOffsetY: 0,
            shadowBlur: 20,
            areaColor: {
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: $c.fade(getColor("mapBGA"),.5) }, 
                { offset: 1, color: $c.fade(getColor("mapBGB"),.5) }
              ],
            },
          },
          emphasis: {
            label: {
              color:getColor("actFCS"),
              fontSize: 14,
              show: true
            },
            itemStyle: {
              areaColor: {
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: $c.fade(getColor("mapBGHA"),.5) }, 
                  { offset: 1, color: $c.fade(getColor("mapBGHB"),.5) }
                ],
              },
            }
          },
        },
        series: [ ]
      }
      for(let a in tempOption){
        chartOption[a]=tempOption[a]
      }
      chartOption.update=true;
      processMapData(current)
    },
    getMapData(current) {//2nd 生成地图假数据 ------------ 开发过程中，这个方法要替换成根据地图参数获取服务器数据的方法！
      const {chartData,processOption}=this
      let mapData = [], pointData = [], sum = 0
      chartData.geoJson.features.forEach(j => {
        if(j.properties.name){
          let value = (Math.random() * 500).toFixed(0)
          mapData.push({
            name: j.properties.name,
            value: value,
            cityCode: parseInt(j.properties.adcode)
          })
          if(j.properties.center){
            pointData.push({
              name: j.properties.name,
              value: [j.properties.center[0], j.properties.center[1], value],
              cityCode: parseInt(j.properties.adcode)
            })
          }
          sum += value
        }
      })
      chartData.mapData=mapData;
      chartData.pointData=pointData;
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
        if(params.componentType=="geo"){
          let regionCode = alladcode.filter(areaJson => areaJson.name === params.name)[0]?.adcode;
          let obj={
            code:regionCode,
            name:params.name,
          }
          if(navDept[navDept.length-1].name!=params.name&&navDept.length<2){//
            this.initChart(obj)
            navDept.push({code:regionCode,name:params.name});
          }
        }else if(params.code){
          this.initChart(params)
        }
      }
      if(params.componentType=="series"){
        clickData.area=params.name
        clickData.data=params.data.value[2]
        clickData.x=params.domPosition[0]
        clickData.y=params.domPosition[1]
        // clickData.x=params.event.offsetX
        // clickData.y=params.event.offsetY
        clickData.show=true
      }
      
      
    },
    
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
.dashboardMobileA-map{
  .echartsMap{.poa; .fullbox(3px); .bgc(@tr); width:auto; height: auto;}
  .map-navDept{
    .item{font-size:12px ;}
  }
}
</style>
