<template>
  <div class="map-wrap dashboard1080pB-map">
    <!-- <mapPopover :clickData="clickData"></mapPopover>123 -->
    <!-- <mapViewToggle :view="view" @changeView="changeView"></mapViewToggle> -->
    <mapCounter></mapCounter>
    <echartsMap class="echartsMap" v-if="mapInited" :chartOption="chartOption" :chartData="chartData" @mapClick="mapClick" @mapOver="mapOver"  @mapAction="mapAction"></echartsMap>
  </div>
</template>
<script>
let pinIcon="path://m172.27,501.67C26.97,291.03,0,269.41,0,192,0,85.96,85.96,0,192,0s192,85.96,192,192c0,77.41-26.97,99.03-172.27,309.67-9.54,13.77-29.93,13.77-39.46,0h0Zm19.73-229.67c44.18,0,80-35.82,80-80s-35.82-80-80-80-80,35.82-80,80,35.82,80,80,80Z"
import themeChart from "@/mixins/themeChart"
import {map} from "@/api/api"
export default {
  // name: "blockCenter",
  mixins: [themeChart],
  components: {
    mapCounter:() => import('./map-counter.vue'),
    // mapPopover:() => import("./common/map-popover.vue"),
    // mapViewToggle:() => import('./common/map-viewToggle.vue'),
  },
  data() {
    return {
      mapInited:false,
      view:{
        data:[
          {title:"礦山分佈",label:"data1"},
          {title:"執法完成",label:"data2"},
          {title:"風險分佈",label:"data3"},
          {title:"区域分布",label:"data4"},
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
          data:[{code:100000,name:"全国"}, ],//{code:100000,name:"全国"},{code:210000,name:"遼寧省"},
          show:false
        },
        maxData:500,
        minData:9,
        maxPin:45,
        minPin:20,
        layoutCenter:['50%', '50%'],
        layoutSize:"80%",
        visualMapPos:{
          right:"26%",
          bottom:"17%"
        }
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
        return "http://127.0.0.1/maps/"
      }else if(process.env.NODE_ENV=="production"){
        return "./maps/"
      }
    },
    pinColor(){
      const {view}=this;
      if(view.current=="data1"){
        return [$c.aql2,$c.aql5,$c.bll7]
      }else if(view.current=="data2"){
        return [$c.cbl3,$c.cyl5,$c.wh]
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
      // const {chartData,pointData,sum}=this

      const {getColor,chartData,chartOption,processTimeLine}=this
      const {mapData,pointData,sum,navDept,maxData,minData,maxPin,minPin}=chartData
      // let currentDept=navDept[navDept.length-1]
      // let seriesData=convertData(pointData['code'+currentDept.code],currentDept)
      let mapD=[]
      
        
      mapD.push(
        {
          type: 'bar3D',
          coordinateSystem: 'geo3D',
          tooltip: { //提示框的内容
            formatter: function(data) {
              return  'name:'+data.name+'<br />'+'value:'+data.value[2];
            }
          },
          barSize: 2,
          // bevelSize:1,
          // bevelSmoothness:1,
          minHeight:1,
          zlevel:1,
          geo3DIndex:0,
          shading:"lambert",
          //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          // symbol: pinIcon,
          // symbolSize:30,
          // symbolSize: (val)=> {
          //   var a = (maxPin - minPin) / (maxData - minData);
          //   var b = maxPin - a * minData;
          //   b = maxPin - a * maxData;
          //   return [a * val[3] + b * 1,a * val[3] + b *1.3];
          // },
          label: {
            show: true,
            position:"top",
            distance: 0 ,
            // offset:[0 ,5],
            // fontWeight:"bold",
            color: getColor("staFCS"),
            borderRadius:3,
            fontSize: 14,
            lineHeight:20,
            backgroundColor:$c.fade('bk',.6),
            padding:3,
            
            
            // rich: { val:{ padding:[20,0,20,0], fontSize: 12, color:$c.re, }, cnNum: { fontSize: 12, color:$c.wh, } },
          },
          // silent: true,
          emphasis: {
            label: {
              
              formatter: p=>{ return p.data.value[2] },
            }
          },
          itemStyle: {
            color: this.pinColor[1],
            // shadowBlur: 10,
            // shadowColor:  $c.fade($c.cbl3,.5)
          },
          data: pointData,
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
        geo3D: {
          map: current.name,
          roam: false,
          boxHeight: 15,
          boxWidth:200,
          bottom:0,
          boxDepth: 240, // 地图倾斜度
          regionHeight: 4, // 地图厚度
          // groundPlane: {
          //   show: true
          // },
          regions: [
            { name: '山西省', height:4.5 ,itemStyle: {color:"red"} }
          ],
          itemStyle: {
            color: getColor("mapBGA"),
            borderColor:getColor("mapBGB"),
            opacity: 1,
            borderWidth: .4,
            shadowColor: getColor("mapSD"),
          },
          instancing:true,
          // top:100,
          // left:30,
          viewControl: {
            // autoRotate: true,
            // autoRotateAfterStill: 5,
            minBeta: -180,
            maxBeta: 180,
            // alpha: 50,
            center: [0, -20, -20],
            beta: 5,//视角绕 y 轴，即左右旋转的角度。
            alpha: 40,//视角绕 x 轴，即上下旋转的角度。
            distance: 180,
            minDistance: 40,
            maxDistance: 400,
            rotateMouseButton:"left",
            panMouseButton:"right",
            panSensitivity :1,
            // minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
            // maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
            // minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
            // maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
            // animation: true, // 是否开启动画。[ default: true ]
            // animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
            animationEasingUpdate: "cubicInOut" // 过渡动画的缓动效果。[ default: cubicInOut ]
          },
          emphasis: {
            disabled: false, //是否可以被选中
            label:{
              show: false,
              color: getColor("staFCWr"), //显示字体颜色变淡
              fontSize:16
            },
            itemStyle: {
              color:getColor("mapBGHA"), 
            }
          },
          label: {
            show: false,
            position: "top",
            color: getColor("actFCS"), 
            fontSize: 14,
            distance: 10,
            zlevel:0,
            //formatter: '\n{b}',
            
          },
          // shading: "lambert",
          light: {
            main: {
              intensity: .8,
              shadow: true,
              alpha: 120,
              beta: 80
            },
            ambient: { intensity: .6 }
            // main: {
            //   color: "#fff", //光照颜色
            //   intensity: 1, //光照强度
            //   shadowQuality: 'high', //阴影亮度
            //   shadow: true, //是否显示阴影
            //   shadowQuality: "medium", //阴影质量 ultra //阴影亮度
            //   alpha: 100,
            //   beta: 10
            // },
            
          },
          // silent: true,
          
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
        calculable: true //出现滑块
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
              value: [j.properties.center[0], j.properties.center[1],value],
              cityCode: parseInt(j.properties.adcode)
            })
          }
          sum += value
        }
      })
      // pointData.push({
      //   cityCode : 330000,
      //   name : null,
      //   value : [120.353576,30.287459,0]
      // })
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
        chartData.geoJson={...res,...current}
      }).catch(function (err) {
        console.error("getmap",err);
      });
      getMapData(current);
      
    },
    mapOver(params){
      console.log("mapOver",params)
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
        if(params.componentType=="geo"||(params.componentType=="series"&&params.componentSubType=='map')){//scatter
          let regionCode = alladcode.filter(areaJson => areaJson.name === params.name)[0].adcode;
          let obj={
            code:regionCode,
            name:params.name,
          }
          if(navDept[navDept.length-1].name!=params.name){//&&navDept.length<2
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
        // clickData.x=params.event.offsetX
        // clickData.y=params.event.offsetY
        clickData.show=true
      }
      
      
    },
    chartTheme(){
      let visualColor=this.themePalette.chart.visual
      this.chartData.visualMapColors=this.getPalette({
        total:5,
        actual:3,
        palette:[$c.aql5,$c.yel3,$c.rel5]
        // palette:visualColor
      })
      // this.viewColor(this.chartData[0].colors)
    }
  },
  
  mounted() {
    const {chartData}=this
    // 
    this.initChart(chartData.nav.data[0]);

  },
  beforeDestroy(){
    
  },
  destroyed(){
  },
};

</script>


<style  lang="less">
.dashboard1080pB-map{.poa; .fullbox;
  .echartsMap{.poa; .fullbox; .bgc(@tr); }
}
</style>
