<template>
  <div class="layout-dialog" ><!--:class="`${config.show?'show':'hide'}`"-->
    <DVBorderBox1 :config="borderConfig" >
      <div class="params">{{}}</div>
      <div class="exit" @click="exit()" >
        <i class="fal fa-times"></i>
        <div class="bdTechBottom"></div>
      </div>
    </DVBorderBox1>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  //components: {DigitalTransform},
  props: ['config'],
  data() {
    return {
      
    };
  },
  computed: {
    
    borderConfig(){
      let borderConfig={
        title:this.config.title,
        titleWidth:this.config.titleWidth,
        titleColor:$c.cbl3,
        backgroundColor:$c.bll9,
        borderColor:$c.bll6,
        decorationColor:[$c.cyl3,$c.cbl3],
        borderWidth:2,
        glow:true,
        glowRange:7,
        glowColor:$c.fade($c.cyl5,.3),
        ani:false,
        opacity:.95
      }
      return borderConfig
    }
  },
  watch:{
    
  },
  methods: {
    exit(){
      this.config.show=false;
    }
  },
  mounted() {
    // cl("chartData",this.$tState.chartData.params)
  }
};
</script>
<style lang="less">
.layout-dialog{.pof; z-index: 10; .absoluteCenter; width: v-bind("config.width"); height: v-bind("config.height");
  &.show{opacity: 1;}
  &.hide{opacity: 0;}
  .DVBorderBox1{overflow: visible;}
  .exit{position: absolute; left:50%; z-index: 5; cursor: pointer; bottom:-20px; width: 60px; line-height: 38px; height: 40px; .bgc(@bll8); .fixc("x"); .ani; text-align: center; font-size: 25px; .fc(@cyl5); .bdTech;
    .bdTechBottom{.bdTechBottom;}
    &:hover{.bgc(@bll7);}
  }
}
</style>
