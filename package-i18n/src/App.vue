<template>
  <div :class="['theme theme-'+theme,'language-'+language,'root-BG',deviceType]" id="root-techui">
    <controlPanel toggleButton="show" :plus="controlPanelPlus"></controlPanel>
    <routerNav :nav="navProcess"/>
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
        {path:"/dashboardA"},
        {path:"/dashboardB"},
        {path:"/dashboardC"},
        {path:"/dashboardD"},
        {path:"/dashboardE"},
        {path:"/dashboardMobileA"},
        {path:"/dashboard4x2Combin"},
        {path:"/dashboard4x2Single"},
        {path:"/panel3D"},
        {path:"/chartPalette"},
      ],
      controlPanelPlus:[
        {label:"tip",type:"switch",value:true},
      ],
      
    };
  },
  computed:{
    navProcess(){
      this.nav.forEach((item,i) => {
        item.title=this.$t("common.nav."+item.path.replace("/",""));
      });
      return this.nav;
    },
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