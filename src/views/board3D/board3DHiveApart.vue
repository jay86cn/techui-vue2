
<template>
  
  <screenAdaptive  :adaptiveType="'proportional'" :loading="loading" :style="svgBG1">
    <!-- <anyToggle :config="toggleConfig" class="board3D-view-toggle"></anyToggle> -->
    <div class="view3d-state" :class="[$vuex.state.globalConfig.board3D?'on3D':'off3D']">
      <div class="state state-on">3D view is on</div>
      <div class="state state-off">3D view is off</div>
      <div class="desc">Please enable the 3D panel function in the global configuration item</div>
    </div>
    <div class="title-desc">Hive independent mode, parameters are configured separately, deformation axis, coefficient, shadow parameters, etc.</div>
    <div class="board3D-test-hive-wrap">
    <div class="gridDemoApart">
      <div class="item">
        <board3D :config="configBLeft" class="board-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </div>
      <div class="item">
        <board3D :config="configBRight" class="board-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </div>
      <div class="item">
        <board3D :config="configBTopLeft" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </div>
      <div class="item">
        <board3D :config="configBTopRight" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </div>
      <div class="item">
        <board3D :config="configBBottomLeft" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </div>
      <div class="item">
        <board3D :config="configBBottomRight" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </div>
      
    </div>
    
    
    <!-- <el-row :gutter="20">
      <el-col :span="6">
        <board3D :config="configBLeft" class="board-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </el-col>
      <el-col :span="6">
        <board3D :config="configBTopLeft" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
        <board3D :config="configBTopRight" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </el-col>
      <el-col :span="6">
        <board3D :config="configBBottomLeft" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
        <board3D :config="configBBottomRight" class="board-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </el-col>
      <el-col :span="6">
        <board3D :config="configBRight" class="board-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </board3D>
      </el-col>
    </el-row> -->
    
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
      configBLeft:{
        transformOrigin:"right top",
        mode:"hive",
        eventBus:true,
        view3d:true,
        showShadow:true,
        shadowCoeff:.2,
        coeff:1
      },
      configBTopLeft:{
        transformOrigin:"top",
        mode:"hive",
        view3d:true,
        showShadow:true,
        shadowTransparent:.1,
      },
      configBTopRight:{
        transformOrigin:"top",
        mode:"hive",
        view3d:true,
        showShadow:true,
      },
      configBBottomLeft:{
        transformOrigin:"bottom",
        mode:"hive",
        view3d:true,
        showShadow:true,
      },
      configBBottomRight:{
        transformOrigin:"bottom",
        mode:"hive",
        view3d:true,
        showShadow:true,
      },
      configBRight:{
        transformOrigin:"left bottom",
        mode:"hive",
        view3d:true,
        showShadow:true,
        shadowBlur:100,
        shadowTransparent:.9,
        coeff:1
      },
      
    };
  },
  components: {
  },
  computed: {
   
  },
  watch:{
    "$vuex.state.globalConfig.board3D"(val){
      this.change3Dview()
    }
  },
  methods: {
    change3Dview(){
      let val=this.$vuex.state.globalConfig.board3D;
      let arry=[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight]
      arry.forEach((item,i)=>{
        item.view3d=val;
      })
    }
  },
  mounted() {
    this.change3Dview()
    A("tis","B3DLoading",()=>{
      this.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.board3D-test-hive-wrap{.poa; .fullbox(50px); //transform: perspective(1000px) translateZ(-100px); //.bd(@cyA10); 
  .demo-box{.bdTech(var(--button-bd_act),var(--tech-deco_A)); .poa; .fullbox; .bgc(var(--button-bg));
    .inner-box{.bdTechBottom(var(--tech-deco_A))}
  }
}

.gridDemoApart {.poa; .fullbox(80px);
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(4,1fr);
  grid-gap: 60px;//声明行间距和列间距
  //grid-auto-rows: minmax(100px, 200px);//声明行的高度
  .item{position: relative;.bdr(10px);  padding:20px;
    .board-3d{.poa;.fullbox;
      .board-3d-inner{ .bdr(20px);}
    }
    // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 5 / 2;}
    &:nth-child(2){ grid-area: 1 / 4 / 5 / 5;}
    &:nth-child(5){ grid-area: 2 / 2 / 5 / 3;}
    &:nth-child(6){ grid-area: 2 / 3 / 5 / 4;}
  }
}

.screenAdaptive {
  .title-desc{.poa; top:20px; left:50%; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}



</style>