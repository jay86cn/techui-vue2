import { createI18n } from 'vue-i18n'
import cn from './langs/cn'
import hk from './langs/hk'
import en from './langs/en'
import jp from './langs/jp'


const data={cn,hk,en,jp}
let deepM=deepMerge(data,store("langDataNpm"))
const config={
  index:[
    { title:"language.cn", label:"cn" },
    { title:"language.hk", label:"hk" },
    { title:"language.en", label:"en" },
    { title:"language.jp", label:"jp" },
  ],
  data:deepM
}
store("langData",config)