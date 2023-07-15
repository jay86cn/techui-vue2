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
        labelData1:[],
        labelData2:[],
        mainData:328,
        subData:234,
        colors:['#0ff','#5467df']
      },
      chartOption:{ }
    }
  },
  computed: {},
  methods: {
    processData(){
      const {getColor,chartData}=this,
            {colors,mainData,subData}=chartData
      let labelData1=[],
      labelData2=[],
      total=subData+mainData,
      mainPercent=Math.round(mainData/total*100),
      subPercent=Math.round(subData/total*100);

      for (var i = 0; i < 100; ++i) {//环状分成100等份
        labelData1.push({
          value: 1,
          name: i,
          itemStyle: {
            color: getColor("lineSP"),
          }
        });
      }
      for (var i = 0; i < labelData1.length; ++i) {
        if (labelData1[i].name < Math.round(mainData/total*100)) {//环状实际数据占具体多少份
          labelData1[i].itemStyle = {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{ offset: 0, color: colors[0] }, { offset: 1, color: colors[1] } ]
            )

          }
        }
      }
      for (var i = 0; i < 100; ++i) {
        labelData2.push({
          value: 1,
          name: i,
          itemStyle: {
            color: getColor("lineAX"),
          }
        });
      }
      // for (var i = 0; i < labelData2.length; ++i) {
      //   if (labelData2[i].name < 100) {
      //     labelData2[i].itemStyle = {
      //       color: new echarts.graphic.LinearGradient(
      //         0, 0, 0, 1,
      //         [{ offset: 0, color:getColor("techDecoA")}, { offset: 1, color: getColor("techDecoB") } ]
      //       )
      //     }
      //   }
      // }
      this.chartOption.title[0].text=mainData;
      this.chartOption.title[0].subtext=['{a|'+this.$t(`dashboard4x2B.p2.desc1`)+" "+mainPercent+'%} \n','{b|'+this.$t(`dashboard4x2B.p2.desc2`)+" "+subPercent+'%}'].join('');
      this.chartOption.series[0].data[0]=subPercent
      this.chartOption.series[1].data=labelData1
      // this.chartOption.series[2].data=labelData2
    },
    processOption(){
      const {getColor,chartData}=this,
            {colors,mainData,subData}=chartData
      this.chartOption={
        update:false,
        title: [
          {
            text: "",
            //subtext:'8小时处置率'+mainPercent+'% \n 24小时处置率'+subPercent+'%',
            subtext:"",
            //'8小时处置率'+mainPercent+'% \n 24小时处置率'+subPercent+'%',
            // ['{a|动态数据}','{b|(全区)}'].join('')
            left:"center",
            top:"middle",
            //textAlign: 'center' ,
            textVerticalAlign: 'auto' ,
            //borderColor: '#fff' ,
            //borderWidth: 3 ,
            textStyle:{
              fontSize: '60',
              fontWeight: '100',
              color: colors[0],
              fontFamily:"impact",
              textAlign: 'center',
              heigth:160,
              lineHeight: 50,
            },
            
            subtextStyle:{
              fontSize: '12',
              fontWeight: '400',
              color: getColor("staFC"),
              textAlign: 'center',
              heigth:44,
              lineHeight: 22,
              rich: {
                a: { fontSize: 16,color: getColor("staFC"), },
                b: { fontSize: 12,color: getColor("staFCW"), },
              }
            }
          }, 
          /*
          {
              text: '24小时处置率'+subPercent+'%',
              left: '50%',
              top: '62%',
              textAlign: 'center',
              fontSize: '12',
              fontWeight: '400',
              color: $c.blr5,
              textAlign: 'center',
          }, 
          */
        ],
        polar: { radius: ['76%', '82%'], center: ['50%', '50%'], },
        angleAxis: { max: 100, show: false, },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: { show: false, },
          axisLine: { show: false, },
          axisTick: { show: false },
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            data: [],
            coordinateSystem: 'polar',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                { offset: 0, color: colors[0] }, 
                { offset: 1, color: colors[1] }
              ]),
            }
          },
          {   
            emphasis:{ scale:false },
            //hoverAnimation: false,
            type: 'pie',
            z: 2,
            data: [],
            radius: ['55%', '70%'],
            zlevel: -2,
            itemStyle: { borderColor: getColor("techBG"), borderWidth: 1, },
            label: { position: 'inside', show: false, },
          },
          // {
          //   //hoverAnimation: false,
          //   emphasis:{ scale:false },
          //   type: 'pie',
          //   z: 1,
          //   data: [],
          //   radius: ['55%', '70%'],
          //   zlevel: -2,
          //   itemStyle: { borderColor: $c.fade($c.bll9,.5), borderWidth: 1, },
          //   label: { position: 'inside', show: false, },
          // },
        ]
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:[4,8], pickType:"cho" })
    }
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
