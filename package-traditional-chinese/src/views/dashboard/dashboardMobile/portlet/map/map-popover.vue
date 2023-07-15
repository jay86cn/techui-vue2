<template>
   <div class="mapPopover" :class="clickData.show?'show':'hide'">
      <div class="item" >
        <span class="label">地區:</span>
        <span class="desc">{{clickData.area}}</span>
      </div>
      <div class="item" >
        <span class="label">數據:</span>
        <span class="desc">{{clickData.data}}</span>
      </div>
    </div>
</template>
<script>
export default {
  mixins: [],
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
.dashboardMobileA-map{
  .mapPopover{.bgc(var(--popup-bg));  .bxsAlt(var(--popup-glow)); .bd(var(--popup-bd));  .bdr(5px); .poa;  pointer-events: none; left:calc(v-bind("posX")*1px); top:calc(v-bind("posY")*1px); z-index: 10; min-width:100px; padding:10px;
    &.show{}
    &.hide{opacity: 0;}
    .item{font-size: 16px;
      .label{.fc(var(--font-normal));}
      .desc{padding:0 0 0 5px; .fc(var(--font-strong));}
    }
    &:after{content:" "; position: absolute; bottom:-10px; left:50%; .fixc("x"); .bdtriangle(5px,var(--popup-bg),bottom);}
  }
}

</style>