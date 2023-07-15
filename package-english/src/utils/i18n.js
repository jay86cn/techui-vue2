import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import "/static/language/index"
const getLsLang=()=>{
  if($ls.g('globalConfig')){
    return $ls.g('globalConfig')?.language
  }else{
    return $ls.g('curLang')
  }
}
export default new VueI18n({
  locale:  getLsLang()||'en',
  globalInjection: true, //全局生效$t
  messages: $tStore("langData").data 
})