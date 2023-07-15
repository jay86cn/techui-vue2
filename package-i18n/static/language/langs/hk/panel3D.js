export default {
  nav:{
    matrix:"矩陣交互",
    hive:"蜂巢交互",
    unity:"一體交互",
    hover:"懸停交互",
    hiveApart:"蜂巢交互獨立",
  },
  state:{
    on:"3D視圖已打開",
    off:"3D視圖已關閉",
    offTip:"請在全局配置項中打開3D面板功能"
  },
  desc:{
    matrix:"Matrix模式，所有的面板變形效果一致，所有的參數公用，通過v-for循環",
    hive:"Hive模式，所有的面板變形方向朝向光標，所有的參數公用，通過v-for循環",
    unity:"Unity模式，只有最外層的面板參與變形，內部item的陰影實時計算。",
    hover:"Hover模式為靜態參數，本demo為分別配置的參數，變形軸向，參數，陰影等",
    hiveApart:"Hive獨立模式，參數分別配置，變形軸向，係數，陰影各個參數等",
  },
  tip:{
    
  }
}