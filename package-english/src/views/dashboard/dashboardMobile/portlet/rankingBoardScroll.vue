<template>
    <div class="rankingBoard-wrapper">
        <dv-scroll-ranking-board v-if="!reset"  :config="optionRanking"  />
    </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  components: {},
  data() {
    return {
        chartData:{
          legend:['Enterprise Long Name','EnterpriseB','EnterpriseC','EnterpriseD','EnterpriseE','EnterpriseF','EnterpriseG'],
          data:[235, 210, 187, 212, 278, 220, 320,],
        },
        reset:false,
        optionRanking:{
          data: [],
          rowNum:3,
          //carousel: 'page'
          waitTime:5000
        },
    };
  },
  props: ['tabActive'],
  watch:{
    tabActive(val){
      this.reset=true
      let processData=[];
      let tempData=this.randomData({
        min:1,
        max:999,
        length:7,
        group:1
      })[0]
      tempData.forEach(item=>{
        processData.push(item);
      })
      this.chartData.data=processData;
      this.createData()
    }
  },
  computed: {},
  methods: {
    createData(){
      this.optionRanking.data=[]
      let {legend,data}=this.chartData;
      legend.forEach((item,i)=>{
        this.optionRanking.data.push({
          name:item+this.randomString(3),
          value:data[i]
        })
      })
      this.$timer('rankingBoardScrollInit',()=>{
        this.reset=false
      },300)
    },
    
  },
  mounted() {
    this.createData();
    // if(this.tabActive>0){
    //   this.optionRanking.data=this.dataGroup[this.tabActive]
    // }else{
    //   this.optionRanking.data=this.dataGroup[0]
    // }
  },
  beforeDestroy(){
   
  },
  destroyed(){
  },
  
};
</script>

<style lang="less">
.rankingBoard-wrapper { height: 100%; padding:40px 20px 20px 20px; position: relative;
    .title{ text-align: left; font-size: 56px; position: absolute; left:0; right:0; top:15px; padding:0 0 0 15px; }
    .dv-scroll-ranking-board{width: 100%;height: 100%;
      .row-item{
        .ranking-info{
          .rank{}
          .info-name{}
          .ranking-value{}
        }
      }
    }
}
</style>
