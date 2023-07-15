
<template>
   <div class="panel3D-demo" >
     <el-tabs v-model="activeName"  @tab-click="handleClick">
      <el-tab-pane label="矩陣交互" name="matrix"> </el-tab-pane>
      <el-tab-pane label="蜂巢交互" name="hive"> </el-tab-pane>
      <el-tab-pane label="一體交互" name="unity"></el-tab-pane>
      <el-tab-pane label="懸停交互" name="hover"></el-tab-pane>
      <el-tab-pane label="蜂巢交互獨立" name="hiveApart"></el-tab-pane>
    </el-tabs>
    <div class="tab-content">
      <panel3DMatrix v-if="activeName=='matrix'"></panel3DMatrix>
      <panel3DHive v-if="activeName=='hive'"></panel3DHive>
      <panel3DUnity v-if="activeName=='unity'"></panel3DUnity>
      <panel3DHover v-if="activeName=='hover'"></panel3DHover>
      <panel3DHiveApart v-if="activeName=='hiveApart'"></panel3DHiveApart>
    </div>
   </div>
</template>
<script>
export default {
  name: "panel3DDemo",
  mixins: [],
  data() {
    return {
      activeName: 'matrix'
      
    };
  },
  components: {
     panel3DHive:() => import('./panel3DHive.vue'),
     panel3DMatrix:() => import('./panel3DMatrix.vue'),
     panel3DUnity:() => import('./panel3DUnity.vue'),
     panel3DHover:() => import('./panel3DHover.vue'),
     panel3DHiveApart:() => import('./panel3DHiveApart.vue'),
  },
  computed: {
   
  },
  methods: {
    handleClick(tab, event) {
    }
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(this.deviceType=="pc"){
      if(tipState){
        $timer("notify1",()=>{
          $notify({
            title: '提示',
            message: '本功能是自研的3D變形面板，可以將任意內容的面板3D化，提供多種交互方式，目前本Demo系統還在開發完善中，後續會開髮用於展示3D面板的數據屏，敬請期待。 ',
            duration: 0
          });
        },5000)
        $timer("notify2",()=>{
          $notify({
            title: '3D面板全局開關',
            message: '如果3D視圖模式已關閉，請在控制面板中打開3D面板功能。 ',
            duration: 0
          });
        },6000)
      }
    }else{
      this.$tState.globalConfig.panel3D=false
      if(tipState){
        $timer("notify1",()=>{
          $notify({
            title: '請用PC訪問此頁面',
            message: '因為移動端無光標交互功能，所以3D面板無法在移動端進行交互和追踪，請使用PC訪問。 ',
            duration: 0
          });
        },5000)
      }
    }
  },
  beforeDestroy() {
    const {$notify,$timer}=this
    $notify.closeAll()
    $timer("notify1")
    $timer("notify2")
  },
};
</script> 
<style lang="less">
  .panel3D-demo{
    .el-tabs {.poa; .fullbox;
      .el-tabs__header{margin:0;
        .el-tabs__nav-wrap{
          &:after{.bgc(@bll8);}
          .el-tabs__nav-scroll{padding:0 30px;
            .el-tabs__nav{
              .el-tabs__item {.fc(@bll7);
                &.is-active{.fc(@cbl4);}
              }
            }
          }
        }
      }
      .el-tabs__content{display:none;}
    }
    .tab-content{padding:20px;.poa;.fullbox; top:40px; .bgc(@bll9);z-index: 5;
    }
  }
  .view3d-state{.poa; left:20px; top:10px;
    .state{display:none; 
      &:before{content:" "; display:inline-block; .bdr(50%); height: 14px; width: 14px; .bgc(@wh);  vertical-align: middle; margin:0 10px 0 0;}
    }
    .desc{display:none; .fc(@cbl7); padding:10px 0 0 0;}
    &.on3D{
      .state-on{display:block;
        &:before{.bgc(@aql5);}
      }
    }
    &.off3D{
      .state-off{display:block;
        &:before{.bgc(@rel5);}
      }
      .desc{display:block;}
    }
    
  }
</style>