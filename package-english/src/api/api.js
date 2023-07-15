import { http,fetchLocl} from "./request"

export const map = (url,params) => { return fetchLocl("get",url+params)}
export const loginApi = params => { return http("post",'/test/ste/', params)} 
export const httpGaugeTriple = params => { return http("get",'/static/tempData/gaugeTriple.json', params)} 
