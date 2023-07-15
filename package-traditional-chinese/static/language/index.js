import hk from './langs/hk'

const data={hk}
let deepM=$dpm(data,$tStore("langDataNpm"))
const config={
  index:[
    { title:"language.hk", label:"hk" },
  ],
  data:deepM
}
$tStore("langData",config)