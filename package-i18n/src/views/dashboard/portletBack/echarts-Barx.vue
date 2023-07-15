<template>
<echartsInit :chartOption="chartOption"></echartsInit>
</template>
<script>
export default {
  components: { },
  data() {
    return {
      chartData:{
        legend:['合同金额','已回款金额', '已开票金额','毛利润','毛利率','回款率'],
        xAxis:['数据1', '数据2', '数据3', '数据4', '数据5', '数据6', '数据7', '数据8', '数据9', '数据10', '数据11', '数据12'],
        colors:[$c.aql4,$c.cyl4,$c.cbl4,$c.bll5,$c.rel4,$c.pum3],
        data:[
          [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330,300,240,345],
          [193, 185, 122, 76, 0, 120, 135, 0,0,9,13, 110, 132, 0,88 ],
          [ 35, 10,0,9,13, 10, 32, 15,0,93, 85, 22, 76, 13, 20],
          [  22, 76, 13, 20,35, 0,20,9,13, 10, 0, 15,88,0, 85],
          [  5,20,9,13, 10,  22, 23, 13, 20,35,4, 15,37,0, 54],
          [   35,0, 15,58,0,0,20,9,13, 10, 85, 22, 76, 13, 20],
        ],
      },
      chartOption:{
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // icon: 'rect',
          // orient: 'vertical',
          // itemWidth: 14,
          // itemHeight: 5,
          itemGap: 15,
          left: 'center',
          top: '10',
          textStyle: {
            //fontSize: 12,
            color: $c.cbl3
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: "15%",
          containLabel: true
        },
        toolbox: {
          left:"12%",
          top:0,
          show:true,
          feature: {
            magicType: { type: ['line', 'bar'] }
          },
          showTitle:false,
          itemSize:20,
          iconStyle:{color:$c.bll7, borderColor:$c.bll5},
          emphasis:{
            iconStyle:{color:$c.cyl5, borderColor:$c.cyl7},
          }
        },
        yAxis:[
          {
            type: 'value',
            name: '单位：万元',
            // min: 0,
            // max: 300,
            //splitNumber: 6,
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
            splitLine:{ 
              show:false,
            },
            axisLabel: {
              formatter: '{value}'
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
          type="bar",
          yAxisIndex=0,
          xName=[
            "徽商银行关于2022年国芯服务器第一批采购项目",
            "长城汽车诺博汽车系统徐水分公司汇聚交换机采购订单",
            "中信银行济南分行4G路由器设备采购项目20220902",
            "中国科学院空天信息创新研究院智利站存储后端交换机采购合同",
            "中国信息创新研究院喀什站存储后端交换机采购合同",
            "上海黄金交易所2022年办公网国产终端适配项目",
            "2022年苏州银行小苏云维保服务采购项目6.23",
            "齐齐哈尔移动外包技术服务项目",
            "博时基金2022红帽Openshift订阅及服务项目220830",
            "航信远程监控项目-网络设备采购",
            "全路通信信号设计院服务器-印尼雅万高铁项目TX信息220901",
            "全路通信信号设计院服务器配件-印尼雅万高铁项目"
          ];
      
      xAxis.forEach((item,i)=>{
        xAxis[i]=xName[i]//+"1"
      })

      legend.forEach((item,i)=>{
        if(i>3){yAxisIndex=1}
        processedData.push({
          name: legend[i],
          type: type,
          //stack: '01',
          barWidth:i==0?13:9,
          label: {
            show: false,
            position: 'insideRight'
          },
          itemStyle:{
            color: $c.fade(colors[i],.9),
            borderRadius: 3,
          },
          z:5-i,
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

    }
  },
  mounted() {
		this.processData();
  }
}
</script>

<style lang="less">

</style>
