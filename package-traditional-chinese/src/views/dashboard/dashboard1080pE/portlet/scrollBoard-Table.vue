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
        name:[
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
        ],
        date:[
          "1週前",
          "1月前",
          "2月前",
          "2週前",
          "3天前",
          "3月前",
          "1天前",
          "1週前",
          "1月前",
          "2月前",
          "2週前",
          "3天前",
        ],
        number:[32,68,12,35,78,99,32,68,12,35,78,99],
        percent:[12,35,78,99,32,68,12,35,78,99,32,68],
      },
      option:{
        reset:true,
        header: ['項目名稱', '日期', '回款額', '回款率'],
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
          String=[item,date[i],number[i]+"萬元",'<b class="markRE">'+percent[i]+'%</b>']
        }else if(percent[i]>50){
          String=[item,date[i],number[i]+"萬元",'<b class="markOR">'+percent[i]+'%</b>']
        }else if(percent[i]>30){
          String=[item,date[i],number[i]+"萬元",'<b class="markYE">'+percent[i]+'%</b>']
        }else if(percent[i]>10){
          String=[item,date[i],number[i]+"萬元",'<b class="markCY">'+percent[i]+'%</b>']
        }else{
          String=[item,date[i],number[i]+"萬元",'<b class="markAQ">'+percent[i]+'%</b>']
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
