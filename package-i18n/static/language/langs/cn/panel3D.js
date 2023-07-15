export default {
  nav:{
    matrix:"矩阵交互",
    hive:"蜂巢交互",
    unity:"一体交互",
    hover:"悬停交互",
    hiveApart:"蜂巢交互独立",
  },
  state:{
    on:"3D视图已打开",
    off:"3D视图已关闭",
    offTip:"请在全局配置项中打开3D面板功能"
  },
  desc:{
    matrix:"Matrix模式，所有的面板变形效果一致，所有的参数公用，通过v-for循环",
    hive:"Hive模式，所有的面板变形方向朝向光标，所有的参数公用，通过v-for循环",
    unity:"Unity模式，只有最外层的面板参与变形，内部item的阴影实时计算。",
    hover:"Hover模式为静态参数，本demo为分别配置的参数，变形轴向，参数，阴影等",
    hiveApart:"Hive独立模式，参数分别配置，变形轴向，系数，阴影各个参数等",
  },
  
}
