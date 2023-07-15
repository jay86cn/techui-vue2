<template>
  <div :class="['theme theme-'+theme,'language-'+language,'root-BG',deviceType]" id="root-techui">
    <controlPanel toggleButton="show" :plus="controlPanelPlus"></controlPanel>
    <routerNav :nav="nav"/>
    <router-view/>
    <externalLinks></externalLinks>
  </div>
</template>
<script>
export default {
  components: {
    externalLinks:() => import('./views/common/externalLinks.vue'),
  },
  data() {
    return {
      nav:[
        {title:"大屏DemoA",path:"/dashboardA"},
        {title:"大屏DemoB",path:"/dashboardB"},
        {title:"大屏DemoC",path:"/dashboardC"},
        {title:"大屏DemoD",path:"/dashboardD"},
        {title:"大屏DemoE",path:"/dashboardE"},
        {title:"移动端大屏DemoA",path:"/dashboardMobileA"},
        {title:"拼接屏4x2组合",path:"/dashboard4x2Combin"},
        {title:"拼接屏4x2单屏",path:"/dashboard4x2Single"},
        {title:"3D面板",path:"/panel3D"},
        {title:"图表配色工具",path:"/chartPalette"},
      ],
      controlPanelPlus:[
        {label:"tip",type:"switch",value:true},
      ],
      
    };
  },
  computed:{
    language(){
      return this.globalConfig.language
    },
    theme(){
      return this.globalConfig.theme
    },
  },
  mounted() {
    
  },
}
</script>
<style lang="less">
</style>