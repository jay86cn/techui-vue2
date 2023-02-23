
<template>
  <screenAdaptive class="scren1080pB-SA" :adaptiveType="'advance'" :component="component" :chartCount="chartCount"> </screenAdaptive>
</template>
<script>
import layout from './layout'
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      loading:true,
      component:layout,
      chartCount:0
    };
  },
  components: {
  },
  computed: {
   
  },
  methods: {
    
  },
  watch:{
    // '$route'(to, from){ cl("screen1080 $route",to,from) }
  },
  mounted() {
    // A("tis","loading",()=>{ this.loading=false },1000)
    
  },
  beforeDestroy() {
    // this.$notify.closeAll()
    // A("tic","notify1")
    // A("tic","notify2")
    // A("tic","notify3")
  },
};
</script> 
<style lang="less">
.scren1080pB-SA{ 
  &.screenAdaptive{
    .adaptiveObject{ .bxs(100%,@bk,10px); //.svgBG('bg1',@blA17,@blA18,@blA19);
      
    }
  }
}
</style>