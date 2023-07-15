

<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080C-SA">
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
        backgroundFillAll:true,
        backgroundName:"A1",
        chartCount:9,
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
    '$route'(to, from){
		}
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: '提示',
          message: '内容较为丰富复杂的数据屏，通常不建议在一个数据屏内放置如此多的内容。',
          duration: 3000
        });
      },3000)
      
    }
  },
  beforeDestroy() {
    const {$notify,$timer}=this
    $notify.closeAll()
    $timer("notify1")
    $timer("notify2")
    $timer("notify3")
  },
};
</script> 
<style lang="less">

</style>