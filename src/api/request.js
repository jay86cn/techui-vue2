import vuex from '@/vuex'
import axios from 'axios'
const envMode=process.env.NODE_ENV;
const publicUrl=envMode=='development'?'/api':"/api"

/**
 * 封装请求 
 * @param：{method}     String      请求类型，必填
 * @param：{url}        String      请求地址，必填
 * @param：{params}     Object      参数参数，非必填
 * @returns：Promise {<pending>}
 **/

export const http = (method, url, params = {},loading) => {
  // let loadingDisable
  // loading==null?loadingDisable=false:loadingDisable=true
  // !loadingDisable&&showLoading();
  return new Promise(function(resolve, reject) {
    axios({
        method: method,
        url: publicUrl+url,
        headers: {
          // token:vuex.state.userInfo.token,
          // language:vuex.state.globalConfig.language,
          'Content-Type': 'application/json',
        },
        data: params,
    })
    .then(res => {
        if(res.status==200){
            console.log('code0',res)
            if(!res.data.success){
                // showMessage(res.data.errorMessage, "error")
            }else{
              resolve(res.data);
            }
            // console.log("store!!",vuex.state.userInfo)

        }else{
            console.error('axiosThen',res)
            reject(res);
        }
        // !loadingDisable&&hideLoading()
    })
    .catch(err => {
        console.error('axiosCatch',err);
        reject(err);
        // ElMessage({ message: "提交失败", showClose: true, center: true, duration: 2000, type:'error' });
        // !loadingDisable&&hideLoading()
    })
  })
};

//封装axios 获取本地数据 暂时无用
// export const httpLocal = (method, url, params = {},loading) => {
//   return new Promise(function(resolve, reject) {
//     axios({
//         method: method,
//         url: url,
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         data: params,
//     })
//     .then(res => {
//       if(res.status==200){
//         resolve(res.data);
//       }else{
//         console.error('axiosThen',res)
//         reject(res);
//       }
//     })
//     .catch(err => {
//         console.error('axiosCatch',err);
//         reject(err);
//     })
//   })
// };

//封装fetch
export const fetchLocl = async(method, url, params)=>{
  var opts = {
    method, 
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
  }
  if(method=='post'){ opts.body={params}}
  return await fetch(url,opts).then((res)=>{
    console.log("fetch",url);
    return res.json();
  })
  // .then((res) => { return res; })
  // .catch((error) => { console.error(error) })
}