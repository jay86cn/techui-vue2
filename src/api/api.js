import { http,httpLocal,fetchLocl} from "./request"

//接口demo
export const map = (url,params) => { return fetchLocl("get",url+params)}
export const loginApi = params => { return http("post",'/test/ste/', params)} 
// export const getPie = params => { return http("get",'./tempDataPie.json', params) } 
// export const token = params => { return post('/appplatform/api/auth/oauth2/token', params) } 
// export const flightList = params => { return post('/appplatform/api2/management__sync_flight/v1/flight/list', params) } 
