<template>
<echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
 
import themeChart from "@/mixins/themeChart"
export default {
  components: { },
  mixins: [themeChart],
  data() {
    return {
      chartData:{
        title:["Transgression\n Area ratio A","Transgression\n Area ratio B"],
        legend:[
          ['AreaA','AreaB','AreaC',"AreaD"],
          ['AreaA','AreaB','AreaC',"AreaD","AreaE"]
        ],
        colors:[
          [$c.aqm5,$c.cym5,$c.cbm5,$c.blm5],
          [$c.rem4,$c.rom4,$c.orm4,$c.yem3,$c.ycm4]
        ],
        center:[
          ['30%', '50%'],
          ['70%', '50%'],
        ],
        //colors:[$c.aql5,$c.cyl5,$c.cbl5,$c.bll5,$c.inl3,$c.pul4,$c.pvl4,$c.vrl4,$c.rel4],
        //colors:[$c.blA06,$c.cbB08,$c.blB08,$c.biB08,$c.inB07,$c.reB07,$c.orA08,$c.oyA08,$c.cbB04,$c.biE10,$c.aqc07],
        data:[
          [1831,993,731,532],
          [172,181,321,132,321],
        ],
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor,chartData}=this,
            {legend,colors,data,center,title}=chartData
      let processedData=[],processLegend=[]
      data.forEach((item,i)=>{
        let tempData=[]
        data[i].forEach((sub,j)=>{
          this.chartData.legend[i][j]=this.$t(`dashboard4x2E.p4.legend${i+1}${j+1}`)
          tempData.push({
            value:data[i][j],
            name:this.$t(`dashboard4x2E.p4.legend${i+1}${j+1}`),
            itemStyle:{
              color:colors[i][j]
            }
          })
        })
        processedData.push({
          name:'dataType',
          type:'pie',
          radius: ['55%', '75%'],
          center: center[i],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'outside',
          },
          itemStyle: {
              borderRadius: 15,
              borderColor: getColor("techBG"),
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
          data:tempData
        })
      })

      legend.forEach((leg,i)=>{
        processLegend.push({
          orient: 'horizontal',//vertical
          show:true,
          left: i==0?'2%':null,
          right:i==1?'2%':null,
          y:'center',
          width:"100p",
          data:leg,
          textStyle: {
            fontSize: 14,
            color: getColor("staFC")
          }
        })
      })

      this.chartOption.series=processedData;
      // this.chartOption.legend.data= [].concat(legend[0], legend[1]);
      this.chartOption.legend= processLegend
      this.chartOption.title[0].text= this.$t(`dashboard4x2E.p4.desc1`);
      this.chartOption.title[1].text= this.$t(`dashboard4x2E.p4.desc2`);
    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        title:[
          {
            text:"",
            left:'29%',
            top:'38%',
            textStyle:{
              fontSize:18,
              fontWeight:"bold",
              lineHeight:30
            },
            textAlign:"center"
          },
          {
            text:"",
            left:'69%',
            top:'38%',
            textStyle:{
              fontSize:18,
              fontWeight:"bold",
              lineHeight:30
            },
            textAlign:"center"
          }
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {},
        series: [ ]
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors[0]=getPalette({ actual:4,pickType:"seq"})
      chartData.colors[1]=getPalette({ actual:5,pickType:"seq",palette:"alt"})
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
