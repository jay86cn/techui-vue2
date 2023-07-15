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
        legend:['合同成本','毛利潤','已回款', '已開票','毛利率%','回款率%'],
        xAxis:['數據1', '數據2', '數據3', '數據4', '數據5', '數據6', '數據7', '數據8', '數據9', '數據10', '數據11', '數據12','數據13', '數據14', '數據15', '數據16', '數據17', '數據18', '數據19', '數據20', '數據21', '數據22', '數據23', '數據24'],colors:[$c.aql2,$c.acl6,$c.bil4,$c.ipl4,$c.rel4,$c.yel3],
        data:[
          [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240,345,235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240,345],
          [22, 76, 13, 20,35, 30,20,9,13, 10, 50, 15,88,50, 85,22, 76, 13, 20,35, 60,20,9,13, 10, 80, 15,88,50, 85],
          [193, 185, 122, 76, 70, 120, 135, 24,32,9,13, 110, 132, 53,88,193, 185, 122, 76, 32, 120, 135, 14,42,9,13, 110, 132, 12,88 ],
          [35, 10,22,9,13, 10, 32, 15,0,93, 85, 22, 76, 13, 20,35, 10,0,9,13, 10, 32, 15,0,93, 85, 22, 76, 13, 20],
          [5,20,9,13, 10,  22, 23, 13, 20,35,4, 15,37,0, 54,5,20,9,13, 10,  22, 23, 13, 20,35,4, 15,37,0, 54],
          [35,0, 15,58,0,0,20,9,13, 10, 85, 22, 76, 13, 20,35,0, 15,58,0,0,20,9,13, 10, 85, 22, 76, 13, 20],
        ],
      },
      chartOption:{ }
    }
  },
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:100,
        max:500,
        length:15,
        group:2
      })
      this.chartData.data[0]=dr[0]
      this.chartData.data[1]=dr[1]
      this.processData();
      this.chartOption.update=true;
    }
  },
  computed: {},
  methods: {
    processData(){
      let {legend,colors,xAxis,data}=this.chartData,
          processedData=[],
          yAxisIndex=0,
          xName=[
            "徽商銀行關於2022年採購項目維保終端技術服務交換機合同",
            "長城汽車諾博汽車系統徐采購項目維保終端技術服務交換機合同",
            "中信銀行濟南分行4G採購項目維保終端技術服務交換機合同",
            "中國科學院空天信息創採購項目維保終端技術服務交換機合同",
            "中國信息創新研究院採購項目維保終端技術服務交換機合同",
            "上海黃金交易所採購項目維保終端技術服務交換機合同",
            "2022年蘇州銀行採購項目維保終端技術服務交換機合同",
            "齊齊哈爾移動採購項目維保終端技術服務交換機合同",
            "博時基金2022紅帽採購項目維保終端技術服務交換機合同",
            "航信遠程監控項目採購項目維保終端技術服務交換機合同",
            "全路通信信號設計院採購項目維保終端技術服務交換機合同",
            "全路通信信號設計院服務器採購項目維保終端技術服務交換機合同",
            "徽商銀行關於2022年採購項目維保終端技術服務交換機合同",
            "長城汽車諾博汽車系統徐采購項目維保終端技術服務交換機合同",
            "中信銀行濟南分行4G採購項目維保終端技術服務交換機合同",
            "中國科學院空天信息創採購項目維保終端技術服務交換機合同",
            "中國信息創新研究院採購項目維保終端技術服務交換機合同",
            "上海黃金交易所採購項目維保終端技術服務交換機合同",
            "2022年蘇州銀行採購項目維保終端技術服務交換機合同",
            "齊齊哈爾移動採購項目維保終端技術服務交換機合同",
            "博時基金2022紅帽採購項目維保終端技術服務交換機合同",
            "航信遠程監控項目採購項目維保終端技術服務交換機合同",
            "全路通信信號設計院採購項目維保終端技術服務交換機合同",
            "全路通信信號設計院服務器採購項目維保終端技術服務交換機合同"
            
          ];
      
      xAxis.forEach((item,i)=>{
        xAxis[i]=xName[i]//+"1"
      })

      legend.forEach((item,i)=>{
        if(i>3){yAxisIndex=1}
        processedData.push({
          name: legend[i],
          type: i>=legend.length-2?'line':'bar',
          stack: i<2?'01':null,
          barWidth:i==0?20:15,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3,
          },
          z:10-i,
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: $c.fade(colors[i],.9) }, 
              { offset: 0.8, color: $c.fade(colors[i],.1) }
            ], false),
            shadowcolor: $c.fade(colors[i],.3),
            shadowBlur: 10
          },
          yAxisIndex:yAxisIndex,
          data: data[i]
        })
      })
      this.chartOption.legend.data=legend;
      this.chartOption.series=processedData;
      this.chartOption.xAxis.data=xAxis;
      this.chartOption.xAxis.axisLabel.formatter=(str,index)=>{  
        // if (index % 2 != 0) { return '\n\n\n' + value; }
        // else{ return value; } 
        let newstr= str, strLT=0,theNum=0;
        for(let i=0;i<str.length;i++){  
          if(strLT<20){
            if(str.charCodeAt(i)>255){
              strLT++
            }else{
              strLT+=0.5
            }
          }else{
            theNum=i;
            break;
          }
        }

        if(theNum>0){ newstr=newstr.substring(0,theNum)+"..."; }
        return newstr;
      }

    },
    processOption(){
      const {getColor}=this
      this.chartOption={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          // icon: 'rect',
          // orient: 'vertical',
          // itemWidth: 14,
          // itemHeight: 5,
          itemGap: 15,
          left: 'center',
          top: '50',
        },
        dataZoom:[
          {
            type: 'slider',
            xAxisIndex: [0],
            height: 30,
            filterMode: 'filter',
            bottom: 40,
            start:0,
            end:20,
            show: true,
            minSpan:5,
            maxSpan:30,
            moveHandleSize: 15 ,
            showDetail:false
          },
          {
            type: 'inside',// 内置于坐标系中
            start: 0,
            end: 20,
            xAxisIndex: [0],
            minSpan:5,
            maxSpan:30
          },
        ],
        grid: {
          left: '2%',
          right: '2%',
          bottom: '20%',
          top: "25%",
          containLabel: true
        },
        // toolbox: {
        //   left:"12%",
        //   top:0,
        //   show:false,
        //   feature: {
        //     magicType: { type: ['line', 'bar'] }
        //   },
        //   showTitle:false,
        //   itemSize:20,
        //   iconStyle:{color:$c.bll7, borderColor:$c.bll5},
        //   emphasis:{
        //     iconStyle:{color:$c.cyl5, borderColor:$c.cyl7},
        //   }
        // },
        yAxis:[
          {
            type: 'value',
            name: '单位：万元',
            // min: 0,
            // max: 300,
            splitNumber: 4,
            position: 'left',
            splitLine: {
              show:true,
            },
            axisLabel: {
              formatter: '{value}',
              align: 'right'
            }
          },
          {
            type: 'value',
            name: '单位：%',
            min: 0,
            max: 100,
            position: 'right',
            offset: 0,
            splitLine: { show:false },
            axisLabel: {
              formatter: '{value}',
            }
          },
        ],
          
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            align: 'center',
            interval:0,
            width:90,
            lineHeight:14,
            overflow:"breakAll",
            // rotate:45,
            margin:20,
            // textStyle : { color :$c.blm3, align : 'center',fontSize :12 },
          },
          
        },
        series: []
      }
      this.processData();
    },
    chartTheme(){
      const {chartData,getPalette,oriColors}=this
      chartData.colors=getPalette({ actual:6,jump:2,total:20,pickType:"seq",palette:"alt" })
    }
    
  },
  mounted() {
		this.processOption();
  }
}
</script>

<style lang="less">

</style>
