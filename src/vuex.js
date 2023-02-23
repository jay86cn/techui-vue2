import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from './router.js'

const store=new Vuex.Store({
	state:{//1.state在vuex中用于存储数据
    mapData:{
			code:"100000",
			name:"全国",
		},
    chartData:{//图表点击事件全局参数
      title:"图表名称",
      params:{}
    },
    globalConfig:{
      board3D:true,
      ani:true,
      bgBlur:false,
      tip:true,
      themeDesign:false,
      theme:"blue",
      language:"cn"
    },
    palette:{},
    deviceType:"pc",
		dashboardConfig:{
      adaptiveType:"",
      chartAni:true,
      chartInitCounter:0,
      SAResizeCounter:0,
    },
	},
	mutations:{
		resetDS(state){//reset Dashboard State
      state.dashboardConfig={
        adaptiveType:"",
        chartAni:true,
        chartInitCounter:0,
        SAResizeCounter:0,
      }
    }
		
	},
	modules: {
	},
	getters:{
		// computed(state){
		// 	console.log("getters");
		// }
	},
	actions:{
		// incMutationsCount(context){
		// 	context.commit("incCount");
		// },
	}
})

export default store;