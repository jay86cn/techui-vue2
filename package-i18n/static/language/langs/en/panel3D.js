export default {
  nav:{
    matrix: "Matrix",
    hive: "Hive",
    unity: "Unity",
    hover: "Hover",
    hiveApart: "HiveApart ",
  },
  state: {
    on: "3D view On",
    off: "3D view Off",
    offTip: "Please enable the 3D panel function in the global configuration item"
  },
  desc: {
    matrix: "Matrix mode, all panels have the same deformation effect, all parameters are common, through v-for loop",
    hive: "Hive mode, all panel deformation directions are towards the cursor, all parameters are common, through v-for loop",
    unity: "Unity mode, only the outermost panel participates in deformation, and the shadow of the internal item is calculated in real time.",
    hover: "Hover mode is a static parameter, this demo is a parameter configured separately, deformation axis, parameter, shadow, etc.",
    hiveApart: "HiveApart mode, parameters are configured separately, deformation axis, coefficient, shadow parameters, etc.",
  },
  tip:{
   
  }
}