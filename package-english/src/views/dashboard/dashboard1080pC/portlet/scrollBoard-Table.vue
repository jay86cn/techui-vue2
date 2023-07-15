<template>
    <dv-scroll-board v-if="!option.reset" :config="option" class="scrollBoard-table"  />
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
        name:['Enterprise A Enterprise A Enterprise A Enterprise A','Enterprise B','Enterprise C','Enterprise D Enterprise D Enterprise D Enterprise D','Enterprise E','Enterprise F'],
        number:[744,226,982,12,422,632],
        percent:[12,35,78,99,32,68],
      },
      option:{
        reset:true,
        header: ['Company', 'Consumption', 'Exceeding'],
        data:[],
        index: false,
        columnWidth: [200,150,120],
        headerBGC:$c.fade($c.bk,.3),
        oddRowBGC:$c.fade($c.cyl3,.1),
        evenRowBGC:"transparent",
        align: ['left',"center","center","center"],
        rowNum:4,
        waitTime:3000
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
      let {name,number,percent}=this.simData;
      name.forEach((item,i)=>{
        let String;
        if(percent[i]>80){
          String=[item,number[i],'<b class="markRE">'+percent[i]+'%</b>']
        }else if(percent[i]>50){
          String=[item,number[i],'<b class="markOR">'+percent[i]+'%</b>']
        }else if(percent[i]>30){
          String=[item,number[i],'<b class="markYE">'+percent[i]+'%</b>']
        }else if(percent[i]>10){
          String=[item,number[i],'<b class="markCY">'+percent[i]+'%</b>']
        }else{
          String=[item,number[i],'<b class="markAQ">'+percent[i]+'%</b>']
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
.scrollBoard-table{.poa; left:10px; right:10px; top:40px; bottom:10px; width:auto;height:auto; 
  .header{
    .header-item{.ff("cn1"); }
  }
  .rows{
    .row-item{   // .bdb(@cyl8); 
      .ceil{font-size: 12px;// .bgc(@cyl9); .bdri(@cyl8);
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
