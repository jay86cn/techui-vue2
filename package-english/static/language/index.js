import en from './langs/en'

const data={en}
let deepM=$dpm(data,$tStore("langDataNpm"))
const config={
  index:[
    { title:"language.en", label:"en" },
  ],
  data:deepM
}
$tStore("langData",config)