

<template>
  <screenAdaptive class="screen1080AG-SA" v-if="!reload" :adaptiveType="'advance'" :component="component" :chartCount="chartCount"> </screenAdaptive>
</template>
<script>
import layout from './layout'
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      reload:false,
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
    '$route'(to, from){
		},
    "$vuex.state.globalConfig.language"(val){
      this.reload=true
      this.$nextTick(()=>{
        this.reload=false
      })
    },
  },
  mounted() {
    const {tipState,$notify}=this
    if(tipState){
      A("tis","notify1",()=>{
        $notify({
          title: 'Tip',
          message: 'If your computer is running a little stuck, please turn off transition animation, 3D panel, background blur and other effects in the control panel. The control panel switch is located in the upper right corner of the window. If it is not your first visit, you can turn off all prompts in the control panel.',
          duration: 0
        });
      },3000)
      A("tis","notify2",()=>{
        $notify({
          title: 'Tip',
          message: 'The navigation menu is located on the pulse button at the bottom center of the page. Besides this data screen, other data screens are not internationalized.',
          duration: 0
        });
      },4000)
      
    }
  },
  beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify1")
    A("tic","notify2")
    // A("tic","notify3")
  },
};
</script> 
<style lang="less">

</style>