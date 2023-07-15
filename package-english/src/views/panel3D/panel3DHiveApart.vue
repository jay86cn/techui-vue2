
<template>
  <adaptivePanel :config="adptivePanelConfig">
    <!-- <anyToggle :config="toggleConfig" class="panel3D-view-toggle"></anyToggle> -->
    <div class="view3d-state" :class="[globalConfig.panel3D?'on3D':'off3D']">
      <div class="state state-on">3D view On</div>
      <div class="state state-off">3D view Off</div>
      <div class="desc">Please enable the 3D panel function in the global configuration item</div>
    </div>
    <div class="title-desc">Hive mode, all panel deformation directions are towards the cursor, all parameters are common, through v-for loop</div>
    <div class="panel3D-test-hive-wrap">
    <div class="gridDemoApart">
      <div class="item">
        <panel3D :config="configBLeft" class="panel-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </div>
      <div class="item">
        <panel3D :config="configBRight" class="panel-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </div>
      <div class="item">
        <panel3D :config="configBTopLeft" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </div>
      <div class="item">
        <panel3D :config="configBTopRight" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </div>
      <div class="item">
        <panel3D :config="configBBottomLeft" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </div>
      <div class="item">
        <panel3D :config="configBBottomRight" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </div>
      
    </div>
    
    
    <!-- <el-row :gutter="20">
      <el-col :span="6">
        <panel3D :config="configBLeft" class="panel-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </el-col>
      <el-col :span="6">
        <panel3D :config="configBTopLeft" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
        <panel3D :config="configBTopRight" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </el-col>
      <el-col :span="6">
        <panel3D :config="configBBottomLeft" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
        <panel3D :config="configBBottomRight" class="panel-3d p50">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </el-col>
      <el-col :span="6">
        <panel3D :config="configBRight" class="panel-3d">
          <div class="demo-box"> <div class="inner-box"></div> </div>
        </panel3D>
      </el-col>
    </el-row> -->
    
    </div>
  </adaptivePanel>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      adptivePanelConfig:{
        backgroundName:"A1",
        backgroundFillAll:true,
        loading:true
      },
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
    "globalConfig.panel3D"(val){
      this.change3Dview()
    }
  },
  methods: {
    change3Dview(){
      let val=this.globalConfig.panel3D;
      let arry=[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight]
      arry.forEach((item,i)=>{
        item.view3d=val;
      })
    }
  },
  mounted() {
    this.change3Dview()
    this.$timer("B3DLoading",()=>{
      this.adptivePanelConfig.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.panel3D-test-hive-wrap{.poa; .fullbox(50px); //transform: perspective(1000px) translateZ(-100px); //.bd(@cyA10); 
  .demo-box{.bdTech(var(--button-bd_act),var(--tech-deco_A)); .poa; .fullbox; .bgc(var(--button-bg));
    .inner-box{.bdTechBottom(var(--tech-deco_A))}
  }
}

.gridDemoApart {.poa; .fullbox(80px);.grid(4,4,60px);
  //grid-auto-rows: minmax(100px, 200px);//声明行的高度
  .item{position: relative;.bdr(10px);  padding:20px;
    .panel-3d{.poa;.fullbox;
      .panel3D-inner{ .bdr(20px);}
    }
    // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 5 / 2;}
    &:nth-child(2){ grid-area: 1 / 4 / 5 / 5;}
    &:nth-child(5){ grid-area: 2 / 2 / 5 / 3;}
    &:nth-child(6){ grid-area: 2 / 3 / 5 / 4;}
  }
}

.adaptivePanel {
  .title-desc{.poa; top:20px; left:50%; .fixc("x");white-space: nowrap;  font-size: 18px; .fc(@cyA10);}
}



</style>