export { default as activeRingChart } from './components/activeRingChart/index'
export { default as capsuleChart } from './components/capsuleChart/index'
export { default as decoration1 } from './components/decoration1/index'
export { default as decoration2 } from './components/decoration2/index'
export { default as decoration3 } from './components/decoration3/index'
export { default as digitalFlop } from './components/digitalFlop/index'
export { default as percentPond } from './components/percentPond/index'
export { default as waterLevelPond } from './components/waterLevelPond/index'
import activeRingChart from './components/activeRingChart'
import capsuleChart from './components/capsuleChart'
import decoration1 from './components/decoration1/index'
import decoration2 from './components/decoration2/index'
import decoration3 from './components/decoration3/index'
import digitalFlop from './components/digitalFlop'
import percentPond from './components/percentPond/index'
import waterLevelPond from './components/waterLevelPond/index'
export default function(Vue){
  Vue.use(decoration1)
  Vue.use(decoration2)
  Vue.use(decoration3)
  Vue.use(activeRingChart)
  Vue.use(capsuleChart)
  Vue.use(waterLevelPond)
  Vue.use(percentPond)
  Vue.use(digitalFlop)
}