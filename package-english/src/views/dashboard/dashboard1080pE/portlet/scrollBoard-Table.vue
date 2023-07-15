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
        name:[],
        date:[
          "1 week ago",
          "1 month ago",
          "2 month ago",
          "2 week ago",
          "3 days ago",
          "3 month ago",
          "1 days ago",
          "1 week ago",
          "1 month ago",
          "2 month ago",
          "2 week ago",
          "3 days ago",
        ],
        number:[32,68,12,35,78,99,32,68,12,35,78,99],
        percent:[12,35,78,99,32,68,12,35,78,99,32,68],
      },
      option:{
        reset:true,
        header: ['Project name', 'Date', 'Return amount', 'Return rate'],
        data:[],
        index: false,
        columnWidth: [350,150,150,150],
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
      for(let i=0;i<12;i++){
        let name="This is Project Name"
        let String;
        if(percent[i]>80){
          String=[name+"-"+this.randomString(4),date[i],number[i]+"K",'<b class="markRE">'+percent[i]+'%</b>']
        }else if(percent[i]>50){
          String=[name+"-"+this.randomString(4),date[i],number[i]+"K",'<b class="markOR">'+percent[i]+'%</b>']
        }else if(percent[i]>30){
          String=[name+"-"+this.randomString(4),date[i],number[i]+"K",'<b class="markYE">'+percent[i]+'%</b>']
        }else if(percent[i]>10){
          String=[name+"-"+this.randomString(4),date[i],number[i]+"K",'<b class="markCY">'+percent[i]+'%</b>']
        }else{
          String=[name+"-"+this.randomString(4),date[i],number[i]+"K",'<b class="markAQ">'+percent[i]+'%</b>']
        }
        this.option.data.push(String)
      }
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
