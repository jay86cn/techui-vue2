
<template>
  <adaptivePanel :config="adptivePanelConfig" class="scren1080pC-SA">
    <layout></layout>
  </adaptivePanel>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      adptivePanelConfig:{
        adaptiveType:"advance",
        backgroundName:"A2",
        backgroundFillAll:true,
        chartCount:4,
      }
    };
  },
  components: {
    layout:() => import('./layout.vue'),
  },
  computed: {
   
  },
  methods: {
    
  },
  watch:{
  },
  mounted() {
    // this.$timer("loading",()=>{ this.loading=false },1000)
   
  },
  beforeDestroy() {
  },
};
</script> 
<style lang="less">
.scren1080pC-SA{ 
  &.adaptivePanel{
    .adaptiveObject{ //.bxs(100%,@bk,10px); //.vectorBG('bg1',@blA17,@blA18,@blA19);
      
    }
  }
}
</style>