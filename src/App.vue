<template>
  <div id="app" :class="['theme theme-'+theme,'language-'+language]">
    <!-- {{$t("setting.title")}} -->
    <routerNav :nav="nav"></routerNav>
    <themeDesign></themeDesign>
    <sysConfig :plus="sysConfigPlus"></sysConfig><!---->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data(){
    return{
      init:0,
      adminNav:[],
      nav:[
        {title:"DataScreenA-Multilanguage",path:"/screenAGlobal"},
        {title: "DataScreenA-cn", path: "/screenA"},
        {title:"DataScreenC-cn",path:"/screenC"},
        {title:"DataScreenD-cn",path:"/screenD"},
        {title:"3D Panel",path:"/board3D"},
        {title: "TechBorder", path: "/borderDemo"},
        {title: "ChartColorMatchingTool", path: "/chartPalette"},
      ],
      sysConfigPlus:[
        {title:"tip",tip:"tip",label:"tip",type:"switch",value:true},
      ]
    }
  },
  watch: {
		"$vuex.state.globalConfig.themeDesign"(val){
      // cl("val",val)
    }
	},
  computed:{
    language(){
      return this.$vuex.state.globalConfig.language
    },
    theme(){
      return this.$vuex.state.globalConfig.theme
    }
  },
  methods: {
    routerGo(path){
      if(this.$route.path!=path){
        // cl("routerGo",path);
        this.$router.push(path);
      }
    },
    initDT(){
      this.init++;
      if(this.init==2){
        return;
      }
      // cl("device",A("dt"),this.init)
      // cl("initDt",hc.has(A("qs","html"),"mobile"))
      if(A("dt")=="mobile"){
        this.$vuex.state.deviceType="mobile"
        // cl("dt,app",this.$vuex.state.deviceType,A("qs","body"),this.$route.path)
        this.routerGo("/screenMobileA");
        // if(this.$route.path=="/screenA"){ }
      }else{
        this.$vuex.state.deviceType="pc"; 
        //if(this.$route.path=="/screenMobileA"){ this.routerGo("/screenA"); }
      }
      
    }
  },
  mounted(){
    let preload =document.querySelector("#preLoading")
    if(preload){
      preload.remove();
    }
    if(process.env.NODE_ENV=="development"){
      this.nav=_.concat(this.nav, this.adminNav)
    }else if(process.env.NODE_ENV=="production"){
      
    }
    
  },
  beforeDestroy() {
    A("ra",A("qs",'body'));
  },


}

</script>

<style lang="less">
.testCHS{font-family: C1; .pof; top:100px; left:100px; line-height: 1.5; padding:20px; .bgc(@bk); z-index: 99; .bd(@rel5); font-size: 48px; .fc(@wh);}
.testEngNum{font-family: eD6; .pof; top:250px; left:100px; line-height: 1.5; padding:20px; .bgc(@bk); z-index: 99; .bd(@rel5); font-size: 48px; .fc(@wh);}
#app { position: absolute; .fullbox; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.pre-loading{.poa; .fullbox; z-index: 20; .bgc(fade(@bk,50%)); // .bdFilter;
  .desc{.absoluteCenter; .fc(@wh); font-size: 32px; .ff("cn0");}
}
// .sysTitle-wrap{
//   .sys-name{.fc(fade(@wh,0%));background-image: none;  text-align: center;
//     &:before{content:"test"; .fc(@rel5); margin:0 auto; display:block;}
//     &:after{content:"test2"; .fc(@rel5); margin:0 auto; display:block;}
//   }
// }
// .loading-wrap{
//   .loading-inner{
//     .sys-name{.fc(fade(@wh,0%));
//       &:before{content:"test"; .fc(@rel5); margin:0 auto; display:block;}
//     }
//     .desc{}
//   }
// }
</style>
