import cn from './langs/cn'
const data={cn}
let deepM=$dpm(data,$tStore("langDataNpm"))
console.log("cn",deepM);
const config={
  index:[
    { title:"language.cn", label:"cn" },
  ],
  data:deepM
}
$tStore("langData",config)