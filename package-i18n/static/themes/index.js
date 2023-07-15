import {AyinColor,$c} from "ayin-color"
import blue from "./config/blue"
import green from "./config/green"
import dark from "./config/dark"
import temp from "./config/temp"
// 基于ayincolor开发的主题功能。地址为https://www.npmjs.com/package/ayin-color 相关文档暂无，如需技术支持，请联系管理员
export const themes = function (Vue) {
  Vue.use(AyinColor)
  const theme={
    index:[
      {title:"科技蓝",label:"blue",color:$c.bll6,},
      {title:"沉稳绿",label:"green",color:$c.acl7,},
      {title:"暗夜黑",label:"dark",color:$c.gyr9,},
      // {title:"temp",label:"temp",color:"#fff",},
      // {title:"青色",label:"cyan",color:$c.cyl7,},
      // {title:"红色",label:"Red",color:$c.rel7,}
    ],
    data:{blue,green,dark,temp}
  }
  $tStore("theme",theme)
};

