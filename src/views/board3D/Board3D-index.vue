
<template>
   <div class="board3D-demo" >
     <el-tabs v-model="activeName"  @tab-click="handleClick">
      <el-tab-pane label="Matrix Interaction" name="matrix"> </el-tab-pane>
      <el-tab-pane label="Hive interaction" name="hive"> </el-tab-pane>
      <el-tab-pane label="Unity Interaction" name="unity"></el-tab-pane>
      <el-tab-pane label="Hover interaction" name="hover"></el-tab-pane>
      <el-tab-pane label="Hive Interaction Independent" name="hiveApart"></el-tab-pane>
    </el-tabs>
    <div class="tab-content">
      <board3DMatrix v-if="activeName=='matrix'"></board3DMatrix>
      <board3DHive v-if="activeName=='hive'"></board3DHive>
      <board3DUnity v-if="activeName=='unity'"></board3DUnity>
      <board3DHover v-if="activeName=='hover'"></board3DHover>
      <board3DHiveApart v-if="activeName=='hiveApart'"></board3DHiveApart>
    </div>
   </div>
</template>
<script>
export default {
  name: "board3DDemo",
  mixins: [],
  data() {
    return {
      activeName: 'matrix'
      
    };
  },
  components: {
     board3DHive:() => import('./board3DHive'),
     board3DMatrix:() => import('./board3DMatrix'),
     board3DUnity:() => import('./board3DUnity'),
     board3DHover:() => import('./board3DHover'),
     board3DHiveApart:() => import('./board3DHiveApart'),
  },
  computed: {
   tipState(){
    return this.$vuex.state.globalConfig.tip
   }
  },
  methods: {
    handleClick(tab, event) {
    }
  },
  mounted() {
    const {tipState,$notify}=this
    if(tipState){
      if(this.$vuex.state.deviceType=="pc"){
        A("tis","notify1",()=>{
          $notify({
            title: 'Prompt',
            message: 'This function is a self-developed 3D deformation panel, which can convert any content panel into 3D and provide a variety of interactive methods. At present, this Demo system is still under development, and a data screen for displaying 3D panels will be developed later. Stay tuned. ',
            duration: 0
          });
        },5000)
        A("tis","notify2",()=>{
          $notify({
            title: '3D panel global switch',
            message: 'If the 3D view mode is off, please turn on the 3D panel function in the control panel. ',
            duration: 0
          });
        },6000)
      }else{
        A("tis","notify1",()=>{
          $notify({
            title: 'Please use a PC to visit this page',
            message: 'Because there is no cursor interaction function on the mobile terminal, the 3D panel cannot be interacted and tracked on the mobile terminal, please use PC to access. ',
            duration: 0
          });
        },5000)
      }
    }
  },
  beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify1")
    A("tic","notify2")
  },
};
</script> 
<style lang="less">
  .board3D-demo{
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
      .screenAdaptive {background-image:none;}
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