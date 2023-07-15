import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from './router.js'

const store=new Vuex.Store({
	state:{//1.state在vuex中用于存储数据
    
	},
	mutations:{
		
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