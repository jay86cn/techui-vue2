import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import "@static/language/index"
const getSysLang = (navigator.language || 'en').toLocaleLowerCase() 
const getLsLang=()=>{
  try {
    if(A("stg",'globalConfig')){
      return A("stg",'globalConfig').language
    }else{return A("stg",'langCur')||A("stg",'langOri')}
  } catch(e){}
}
export default new VueI18n({
  locale:  getLsLang()||'en',
  globalInjection: true, //全局生效$t
  messages: store("langData").data 
})