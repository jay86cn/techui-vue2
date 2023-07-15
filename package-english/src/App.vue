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
        {title:"dashboardA",path:"/dashboardA"},
        {title:"dashboardB",path:"/dashboardB"},
        {title:"dashboardC",path:"/dashboardC"},
        {title:"dashboardD",path:"/dashboardD"},
        {title:"dashboardE",path:"/dashboardE"},
        {title:"dashboardMobileA",path:"/dashboardMobileA"},
        {title:"dashboard4x2Combin",path:"/dashboard4x2Combin"},
        {title:"dashboard4x2Single",path:"/dashboard4x2Single"},
        {title:"panel3D",path:"/panel3D"},
        {title:"chartPalette",path:"/chartPalette"},
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