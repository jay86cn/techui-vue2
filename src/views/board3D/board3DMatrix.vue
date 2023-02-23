
<template>
  <screenAdaptive :adaptiveType="'proportional'" :loading="loading" :style="svgBG1">
    <div class="view3d-state" :class="[$vuex.state.globalConfig.board3D?'on3D':'off3D']">
      <div class="state state-on">3D视图已打开</div>
      <div class="state state-off">3D视图已关闭</div>
      <div class="desc">请在全局配置项中打开3D面板功能</div>
    </div>
    <div class="title-desc">Matrix模式，所有的面板变形效果一致，所有的参数公用，通过v-for循环</div>
    <div class="board3D-test-matrix-wrap">
      <div class="gridDemoMax">
        <div class="item" v-for="(item,index) in 15">
          <board3D :config="boar3dConfig" :index="index" class="board-3d">
            <div class="demo-box">
              <div class="inner-box"></div>
            </div>
          </board3D>
        </div>
      </div>

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
      boxStyle:{
        color1:$c.bll5,
        color2:$c.cyl5,
        color3:$c.bll9,
        BGColor:$c.fade($c.bim9,.6),
        BGColor2:$c.fade($c.bim9,.5),
      },
      boar3dConfig:{
        mode:"matrix",
        view3d:true,
        showShadow:true,
        coeff:2,
        //inScreenAdaptive:false,
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
  beforeDestroy() {
  },
};
</script> 
<style lang="less">
.board3D-view-toggle{.absoluteCenter; z-index: 10;}
.board3D-test-matrix-wrap{.poa; .fullbox(50px); //transform: perspective(1000px) translateZ(-100px); //.bd(@cyA10); 
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
    .board-3d{.poa;.fullbox;
      .board-3d-inner{ .bdr(20px);}
    }
  }
}
.screenAdaptive {
  .title-desc{.poa; top:20px; left:50%; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}
</style>