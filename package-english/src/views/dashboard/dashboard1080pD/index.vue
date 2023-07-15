
<template>
  <adaptivePanel :config="adptivePanelConfig" class="scren1080pB-SA">
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
        chartCount:6,
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
   
  },
  beforeDestroy() {
  },
};
</script> 
<style lang="less">
.scren1080pB-SA{ 
  &.adaptivePanel{
    .adaptiveObject{ //.bxs(100%,@bk,10px); //.vectorBG('bg1',@blA17,@blA18,@blA19);
      
    }
  }
}
</style>