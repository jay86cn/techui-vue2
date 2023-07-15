
<template>
   <adaptivePanel :config="adptivePanelConfig">
    <div class="view3d-state" :class="[globalConfig.panel3D?'on3D':'off3D']">
      <div class="state state-on">3D视图已打开</div>
      <div class="state state-off">3D视图已关闭</div>
      <div class="desc">请在全局配置项中打开3D面板功能</div>
    </div>
    <div class="title-desc">Hive模式，所有的面板变形方向朝向光标，所有的参数公用，通过v-for循环</div>
    <div class="panel3D-test-hive-wrap">
      <div class="gridDemoMax">
        <div class="item" v-for="(item,index) in 15">
          <panel3D :config="boar3dConfig" :index="index" class="panel-3d">
            <div class="demo-box">
              <div class="inner-box"></div>
            </div>
          </panel3D>
        </div>
      </div>
    </div>
   </adaptivePanel>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      boxStyle:{
        color1:$c.bll5,
        color2:$c.cyl5,
        color3:$c.bll9,
        BGColor:$c.fade($c.bim9,.6),
        BGColor2:$c.fade($c.bim9,.5),
      },
      boar3dConfig:{
        mode:"hive",
        view3d:true,
        showShadow:true,
        coeff:2,
        // shadowCoeff:.5,
        // shadowBlur:5,
        // shadowTransparent:.1,
      },
      toggleConfig:{
        checked:true,
        title:"3D视图开关"
      },
      adptivePanelConfig:{
        backgroundName:"A2",
        backgroundFillAll:true,
        loading:true
      }
    };
  },
  components: {
  },
  computed: {
   
  },
  watch:{
    "globalConfig.panel3D"(val){
      this.boar3dConfig.view3d=val
      console.log("pan3dState",val);
    }
  },
  methods: {
    
  },
  mounted() {
    this.boar3dConfig.view3d=this.globalConfig.panel3D
    this.$timer("B3DLoading",()=>{
      this.adptivePanelConfig.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.panel3D-view-toggle{.absoluteCenter; z-index: 10;}
.panel3D-test-hive-wrap{.poa; .fullbox(50px); //transform: perspective(1000px) translateZ(-100px); //.bd(@cyA10); 
  .demo-box{.bdTech(var(--button-bd_act),var(--tech-deco_A)); .poa; .fullbox; .bgc(var(--button-bg));
    .inner-box{.bdTechBottom(var(--tech-deco_A))}
  }
  
}
.gridDemoMax {.poa; .fullbox(40px);.grid(5,3,60px);
  //grid-auto-rows: minmax(100px, 200px);//声明行的高度
  .item{position: relative; padding:20px; 
    .panel-3d{.poa;.fullbox;
      .panel3D-inner{ .bdr(20px);}
    }
  }
}
.adaptivePanel {
  .title-desc{.poa; top:20px; left:50%; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}
</style>