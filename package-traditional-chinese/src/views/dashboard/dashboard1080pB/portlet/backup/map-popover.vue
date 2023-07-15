<template>
   <div class="mapPopover" :class="[clickData.show?'show':'hide','popover-'+dataType]">
      <div class="item" >
        <span class="label">地区:</span>
        <span class="desc">{{clickData.area}}</span>
      </div>
      <div class="item" v-if="dataType=='number'">
        <span class="label">数据:</span>
        <span class="desc">{{clickData.data}}</span>
      </div>
      <div class="item" v-else>
        <span class="label">信息:</span>
        <span class="desc">{{clickData.info}}</span>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    clickData:{
      type: Object,
      // default:{
      //   show:false,
      //   area:"北京",
      //   data:"325",
      //   x:120,
      //   y:120
      // }
    }
  },
  data() {
    return {
      
    };
  },
  watch:{
    "clickData.show"(val,old){
      if(val){
        this.hide();
      }
    },
    "clickData.area"(val,old){
      this.hide();
    },
  },
  components: {
  },
  computed: {
    curEL(){ return this.$el},
    posX(){
      const {curEL,clickData}=this,ew=curEL.clientWidth
      return clickData.x-ew/2-1
    },
    posY(){
      const {curEL,clickData}=this,eh=curEL.clientHeight
      return this.clickData.y-eh-16
    },
    dataType(){
      const {data}=this.clickData
      if(typeof(data)=='number'){
        return "number"
      }else if(typeof(data)=='string'&&data=="danger"){
        return "danger"
      }else if(typeof(data)=='string'&&data=="warning"){
        return "warning"
      }
    }
  },
  methods: {
    hide(){
      this.$timer("mapPopver",()=>{
        this.clickData.show=false;
      },5000)
    }
  },
  mounted() {
    this.hide();
    
  },
  beforeDestroy() {
    
  },
};
</script> 
<style lang="less">
.dashboard1080pB-map{
  .mapPopover{.bgc(var(--popup-bg));  .bxsAlt(var(--popup-glow)); .bd(var(--popup-bd));  .bdr(5px); .poa; pointer-events: none; left:calc(v-bind("posX")*1px); top:calc(v-bind("posY")*1px); z-index: 10; min-width:100px; padding:10px;
    &.show{}
    &.hide{opacity: 0;}
    .item{font-size: 16px;
      .label{.fc(var(--font-normal));}
      .desc{padding:0 0 0 5px;.fc(var(--font-strong));}
    }
    &:after{content:" "; position: absolute; bottom:-10px; left:50%; .fixc("x"); .bdtriangle(5px,var(--popup-bg),bottom)}
    &.popover-warning{.bgc(var(--auxilary-warning_BG));.bd(var(--auxilary-warning_BD));.bxsVar(var(--auxilary-warning_BD));
      .item{
        .label{.fc(var(--auxilary-warning_FC));}
        .desc{.fc(var(--auxilary-warning_FC_light));}
      }
    }
    &.popover-danger{.bgc(var(--auxilary-danger_BG));.bd(var(--auxilary-danger_BD));.bxsVar(var(--auxilary-danger_BD));
      .item{
        .label{.fc(var(--auxilary-danger_FC));}
        .desc{.fc(var(--auxilary-danger_FC_light));}
      }
    }
  }
}
</style>