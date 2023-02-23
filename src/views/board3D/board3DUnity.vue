
<template>
  <screenAdaptive  :adaptiveType="'advance'" :loading="loading" :style="svgBG1">
    <div class="view3d-state" :class="[$vuex.state.globalConfig.board3D?'on3D':'off3D']">
      <div class="state state-on">3D视图已打开</div>
      <div class="state state-off">3D视图已关闭</div>
      <div class="desc">请在全局配置项中打开3D面板功能</div>
    </div>
    <div class="title-desc">Unity模式，只有最外层的面板参与变形，内部item的阴影实时计算。</div>
    <div class="board3D-test-unity-wrap">
      
      <board3D :config="boar3dConfig" class="board-3d">
        <template slot-scope="parmas">
          <div class="gridDemoMax">
            <div class="item" :class="parmas.boxShadowItem" v-for="(item,index) in 15">
                <div class="demo-box">
                  <div class="inner-box"></div>
                </div>
            </div>
          </div>
        </template>
      </board3D>
      
    </div>
  </screenAdaptive>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      loading:true,
      boar3dConfig:{
        mode:"unity",
        view3d:true,
        coeff:.5,
        showShadow:true,
        eventBus:true,
        shadowCoeff:2,
        inScreenAdaptive:true,//是否在全屏自适应组件中，默认是true
        eventElement:"eventElement"
      },
      toggleConfig:{
        checked:true,
        title:"3D视图开关"
      },
    };
  },
  components: {
  },
  computed: {
   
  },
  watch:{
    "$vuex.state.globalConfig.board3D"(val){
      this.boar3dConfig.view3d=val
    }
  },
  methods: {
    
  },
  mounted() {
    this.boar3dConfig.view3d=this.$vuex.state.globalConfig.board3D
    A("tis","B3DLoading",()=>{
      this.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.board3D-test-unity-wrap{.poa; .fullbox(50px); //transform: perspective(1000px) translateZ(-100px); //.bd(@cyA10); 
  .board-3d{.poa; .fullbox(50px); }
  .demo-box{.bdTech(var(--button-bd_act),var(--tech-deco_A)); .poa; .fullbox; .bgc(var(--button-bg));
    .inner-box{.bdTechBottom(var(--tech-deco_A))}
  }
  
}
.gridDemoMax {.poa; .fullbox(40px);
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: 60px;//声明行间距和列间距
  //grid-auto-rows: minmax(100px, 200px);//声明行的高度
  .item{position: relative; padding:20px; 
    
  }
}
.screenAdaptive {
  .title-desc{.poa; top:20px; left:50%; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}
</style>