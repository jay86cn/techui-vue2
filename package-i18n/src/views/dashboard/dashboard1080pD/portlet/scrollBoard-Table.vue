<template>
  <div class="echarts-hasSelect at1-right">
    <el-select v-model="select.current" size="mini" :popper-append-to-body="false" filterable placeholder="请选择井场" style="width:100px">
      <el-option
        v-for="item in select.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <dv-scroll-board v-if="!option.reset" :config="option" class="dashboardD-scrollBoard-table"  />
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  components: {},
  //props: ['boxStyle'],
  data() {
    return {
      select:{
        options: [
          { value: 'a', label: this.$t("dashboardD.optionA.op1") }, 
          { value: 'b', label: this.$t("dashboardD.optionA.op2") }, 
        ],
        current: 'a'
      },
      simData:{
        name:['Jing 51-29','SN0046','Jing 57-62','CB25-2','Jing 63-67','Yellow 36H9-2','Anping 33-23'],
        budget:[744,226,982,12,422,632,213],
        actual:[12,35,78,99,32,68,34],
        diff:[-12,15,48,35,-32,18,34],
      },
      option:{
        reset:true,
        header: ['Well name', 'Budget', 'Actual', 'Difference'],
        data:[],
        index: false,
        columnWidth: [100,100,100,100],
        headerBGC:$c.fade($c.bk,.3),
        oddRowBGC:$c.fade($c.cyl3,.1),
        evenRowBGC:"transparent",
        align: ['left',"center","center","center"],
        rowNum:5,
        waitTime:3000
      },
    };
  },
  computed: {},
  watch:{
    "select.current"(val1,val2){
      this.option.reset=true;
      this.option.data=this.option.data.sort(function(a,b){
          return Math.random() - 0.5;
      });
      this.$timer("resetDataTAble",()=>{this.option.reset=false;},100)
    }
  },
  methods: {
    processData(){
      let {name,diff,budget,actual}=this.simData,
          {header}=this.option;
      header.forEach((item,i)=>{
        this.option.header[i]= this.$t(`dashboardD.r2.head${i+1}`)
      })
      name.forEach((item,i)=>{
        item=this.$t(`dashboardD.r2.item${i+1}`)
        let String;
        if(diff[i]>40){
          String=[item,budget[i],actual[i],'<b class="markRE">'+diff[i]+'%</b>']
        }else if(diff[i]>30){
          String=[item,budget[i],actual[i],'<b class="markOR">'+diff[i]+'%</b>']
        }else if(diff[i]>20){
          String=[item,budget[i],actual[i],'<b class="markYE">'+diff[i]+'%</b>']
        }else if(diff[i]>10){
          String=[item,budget[i],actual[i],'<b class="markCY">'+diff[i]+'%</b>']
        }else{
          String=[item,budget[i],actual[i],'<b class="markAQ">'+diff[i]+'%</b>']
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
.dashboardD-scrollBoard-table{.poa; left:10px; right:10px; top:40px; bottom:10px; width:auto;height:auto; 
  .header{
    .header-item{.ff("cn1");}
  }
  .rows{
    .row-item{   // .bdb(@cyl8); 
      .ceil{font-size: 14px;  //.fc(@cbl2); .bgc(@cyl9); .bdri(@cyl8);
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
