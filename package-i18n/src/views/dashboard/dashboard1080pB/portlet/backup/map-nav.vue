<template>
  <div class="map-nav-wrap">
    <div class="nav-title">图例</div>
    <ul class="nav-list">
      <li v-for="(item,index) in arry">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  //props: ['boxStyle'],
  data() {
    return {
      arry:[
        {title:"全部站点",label:""},
        {title:"国控自动站",label:""},
        {title:"国土自动站",label:""},
        {title:"省级自动站",label:""},
        {title:"人工监测站",label:""},
       
      ]
    };
  },
  computed: {},
  methods: {
  },
  mounted() {
    
  }
};
</script>
<style lang="less">
.dashboard1080pB-map{
  .map-nav-wrap{.poa; right:27%; bottom:50%; z-index: 10; padding:50px 0 0 0; 
    .nav-title{.poa; right:0; top:0; left:0;.bdb(var(--button-bd_act)); .fc(var(--font-normal)); .ff("cn1"); padding:10px 10px 10px 0; text-align: right; font-size: 16px; margin:0 0 5px 0;}
    .nav-list{overflow:auto;// height: 310px;
      li{text-align: right; .por; .fc(var(--font-normal)); cursor: pointer; line-height: 2; padding:0 10px; .ff("cn1");
        &:before{content:" "; .bglg(transparent,var(--font-weak),90deg); .poa; .fullbox; opacity: 0; .ani(.3s,opacity); .bdr(0 5px 5px 0);}
        &:hover{&:before{opacity: .3; }}
      }
    }
  }
}

</style>
