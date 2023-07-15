<template>
  <div class="map-nav-mobile-wrap">
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
        {title:"全部站點",label:""},
        {title:"國控自動站",label:""},
        {title:"國土自動站",label:""},
        {title:"省級自動站",label:""},
        {title:"人工監測站",label:""},
       
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
.map-nav-mobile-wrap{.poa; left:20px; right:20px; bottom:80px; z-index: 10; padding:50px 0 0 0; pointer-events: none;
  .nav-title{.poa; right:0; top:0; left:0; .bdb(var(--button-bd_act)); .fc(var(--font-normal)); .ff("cn1"); padding:10px 10px 10px 0; text-align: center; font-size: 16px; margin:0 0 5px 0; pointer-events: none;}
  .nav-list{overflow:auto; display: flex; justify-content: center; flex-wrap: wrap; gap:5px 15px;
    li{text-align: right; .fc(var(--font-normal)); cursor: pointer; line-height: 2; padding:0 10px; .bdr(5px); .ff("cn1"); pointer-events:all;
      &:hover{.bglg(var(--font-weaker),var(--font-weak),180deg);}
    }
  }
}
</style>
