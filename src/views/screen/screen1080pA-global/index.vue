

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
          title: '提示',
          message: '如果您的电脑运行有些卡顿，请在控制面板中关闭过渡动画、3D面板、背景模糊等效果。控制面板开关位于窗口右上角。如非首次访问，可在控制面板中关闭所有提示选项。',
          duration: 0
        });
      },3000)
      A("tis","notify3",()=>{
        $notify({
          title: '提示',
          message: '导航菜单位于页面底部中央的脉冲按钮。另外除了本数据屏，其他数据屏均未国际化。',
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
    A("tic","notify3")
  },
};
</script> 
<style lang="less">

</style>