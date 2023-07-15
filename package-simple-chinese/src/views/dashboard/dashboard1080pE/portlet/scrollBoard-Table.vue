<template>
    <dv-scroll-board v-if="!option.reset" :config="option" class="dashboardE-scrollBoard-table"  />
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  components: {},
  //props: ['boxStyle'],
  data() {
    return {
      simData:{
        // name:[
        //   "徽商银行关于2022年国芯服务器第一批采购项目",
        //   "长城汽车诺博汽车系统徐水分公司汇聚交换机采购订单",
        //   "中信银行济南分行4G路由器设备采购项目20220902",
        //   "中国科学院空天信息创新研究院智利站存储后端交换机采购合同",
        //   "中国信息创新研究院喀什站存储后端交换机采购合同",
        //   "上海黄金交易所2022年办公网国产终端适配项目",
        //   "2022年苏州银行小苏云维保服务采购项目6.23",
        //   "齐齐哈尔移动外包技术服务项目",
        //   "博时基金2022红帽Openshift订阅及服务项目220830",
        //   "航信远程监控项目-网络设备采购",
        //   "全路通信信号设计院服务器-印尼雅万高铁项目TX信息220901",
        //   "全路通信信号设计院服务器配件-印尼雅万高铁项目"
        // ],
        name:[
          "徽商银行关于2022年采购项目维保终端技术服务交换机合同",
          "长城汽车诺博汽车系统徐采购项目维保终端技术服务交换机合同",
          "中信银行济南分行4G采购项目维保终端技术服务交换机合同",
          "中国科学院空天信息创采购项目维保终端技术服务交换机合同",
          "中国信息创新研究院采购项目维保终端技术服务交换机合同",
          "上海黄金交易所采购项目维保终端技术服务交换机合同",
          "2022年苏州银行采购项目维保终端技术服务交换机合同",
          "齐齐哈尔移动采购项目维保终端技术服务交换机合同",
          "博时基金2022红帽采购项目维保终端技术服务交换机合同",
          "航信远程监控项目采购项目维保终端技术服务交换机合同",
          "全路通信信号设计院采购项目维保终端技术服务交换机合同",
          "全路通信信号设计院服务器采购项目维保终端技术服务交换机合同"
        ],
        date:[
          "1周前",
          "1月前",
          "2月前",
          "2周前",
          "3天前",
          "3月前",
          "1天前",
          "1周前",
          "1月前",
          "2月前",
          "2周前",
          "3天前",
        ],
        number:[32,68,12,35,78,99,32,68,12,35,78,99],
        percent:[12,35,78,99,32,68,12,35,78,99,32,68],
      },
      option:{
        reset:true,
        header: ['项目名称', '日期', '回款额', '回款率'],
        data:[],
        index: false,
        columnWidth: [350,100,100,100],
        headerBGC:$c.fade($c.bk,.3),
        oddRowBGC:$c.fade($c.cyl3,.1),
        evenRowBGC:"transparent",
        align: ['left',"center","center","center"],
        rowNum:7,
        waitTime:5000
      },
      
    };
  },
  computed: {},
  watch:{
    "$tState.mapData.code"(val1,val2){
      this.option.reset=true;
      this.option.data=this.option.data.sort(function(a,b){
          return Math.random() - 0.5;
      });
      this.$timer("resetDataTAble",()=>{this.option.reset=false;},100)
    }
  },
  methods: {
    processData(){
      let {name,date,number,percent}=this.simData;
      name.forEach((item,i)=>{
        let String;
        if(percent[i]>80){
          String=[item,date[i],number[i]+"万元",'<b class="markRE">'+percent[i]+'%</b>']
        }else if(percent[i]>50){
          String=[item,date[i],number[i]+"万元",'<b class="markOR">'+percent[i]+'%</b>']
        }else if(percent[i]>30){
          String=[item,date[i],number[i]+"万元",'<b class="markYE">'+percent[i]+'%</b>']
        }else if(percent[i]>10){
          String=[item,date[i],number[i]+"万元",'<b class="markCY">'+percent[i]+'%</b>']
        }else{
          String=[item,date[i],number[i]+"万元",'<b class="markAQ">'+percent[i]+'%</b>']
        }
        this.option.data.push(String)
      })
      this.option.reset=false;
    }
  },
  mounted() {
    this.processData()
  }
};
</script>
<style lang="less">
.dashboardE-scrollBoard-table{.poa; left:10px; right:10px; top:40px; bottom:10px; width:auto;height:auto; 
  .header{
    .header-item{.ff("cn1");}
  }
  .rows{
    .row-item{   // .bdb(@cyl8); 
      .ceil{font-size: 14px;  // .bgc(@cyl9); .bdri(@cyl8);
        b{padding:0 5px;}
        .markYE{.bgc(@yel3);.fc(@yel8);}
        .markOR{.bgc(@orl3);.fc(@orl9);}
        .markRE{.bgc(@rel3);.fc(@rel9);}
        .markCY{.bgc(@cyl3);.fc(@cyl9);}
        .markAQ{.bgc(@aql3);.fc(@aql9);}
        
      }
    }
  }
}
</style>
