import cn from './langs/cn'
import hk from './langs/hk'
import en from './langs/en'

const data={cn,hk,en}
let deepM=$dpm(data,$tStore("langDataNpm"))
const config={
  index:[
    { title:"language.cn", label:"cn" },
    { title:"language.hk", label:"hk" },
    { title:"language.en", label:"en" },
  ],
  data:deepM
}
$tStore("langData",config)