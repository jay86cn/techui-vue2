import { createI18n } from 'vue-i18n'
import cn from './config/cn'
import hk from './config/hk'
import en from './config/en'
import jp from './config/jp'


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