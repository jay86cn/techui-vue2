
<template>
   <div class="board3D-demo" >
     <el-tabs v-model="activeName"  @tab-click="handleClick">
      <el-tab-pane label="矩阵交互" name="matrix"> </el-tab-pane>
      <el-tab-pane label="蜂巢交互" name="hive"> </el-tab-pane>
      <el-tab-pane label="一体交互" name="unity">角色管理</el-tab-pane>
      <el-tab-pane label="悬停交互" name="hover">定时任务补偿</el-tab-pane>
      <el-tab-pane label="蜂巢交互独立" name="hiveApart">定时任务补偿</el-tab-pane>
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
            title: '提示',
            message: '本功能是自研的3D变形面板，可以将任意内容的面板3D化，提供多种交互方式，目前本Demo系统还在开发完善中，后续会开发用于展示3D面板的数据屏，敬请期待。',
            duration: 0
          });
        },5000)
        A("tis","notify2",()=>{
          $notify({
            title: '3D面板全局开关',
            message: '如果3D视图模式已关闭，请在控制面板中打开3D面板功能。',
            duration: 0
          });
        },6000)
      }else{
        A("tis","notify1",()=>{
          $notify({
            title: '请用PC访问此页面',
            message: '因为移动端无光标交互功能，所以3D面板无法在移动端进行交互和追踪，请使用PC访问。',
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