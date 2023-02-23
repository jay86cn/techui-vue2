

<template>
  <screenAdaptive class="screen1080A-SA"  :adaptiveType="'advance'" :component="component" :chartCount="chartCount"> </screenAdaptive>
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
      chartCount:11
    };
  },
  components: {
  },
  computed: {
   tipState(){
    return this.$vuex.state.globalConfig.tip
   }
  },
  methods: {
    
  },
  watch:{
    // '$route'(to, from){ cl("screen1080 $route",to,from) }
  },
  mounted() {
    const {tipState,$notify}=this
    if(tipState){
      A("tis","notify1",()=>{
        $notify({
          title: '提示',
          message: '本数据屏为"screenAGlobal"未处理国际化的版本',
          duration: 3000
        });
      },3000)
      
    }
  },
  beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify1")
    A("tic","notify2")
    A("tic","notify3")
  },
};
</script> 
<style lang="less">

</style>