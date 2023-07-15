<template>
  <div class="external-wrap" >
    <div class="link-left-wrap">
      <template v-for="item in linkLeft">
        <div v-if="item.show" class="item" @click="goToLink(item)">
          {{ item.label }}
        </div>
      </template>
    </div>
    <div class="link-right-wrap">
      <template v-for="item in linkRight">
        <div v-if="item.show" class="item" @click="goToLink(item)">
          {{ item.label }}
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      borderConfig:{

      },
      linkLeft:[
        {label:"Document",show:true,path:"https://techui.net/docs"},
        {label:"Gtihub",show:true,path:"https://github.com/ayin86/techui-vue2"},
        {label:"Core",show:true,path:"https://www.npmjs.com/package/techui-vue2"},
      ],
      linkRight:[
        {label:"Lite Version",show:true,path:"https://lite.techui.net/docs/"},
        {label:"Contact",show:true,path:"https://techui.net/docs/guide/contact"},
        {label:"简|繁|EN",show:true,type:"language"},
      ]
    };
  },
  components: {
  },
  computed: {
   
  },
  methods: {
    goToLink(item){
      if(item.path){
        window.open(item.path);
      }else if(item.type=="language"){
        this.$tState.controlPanelOn=true;
      }
    }
  },
  watch:{
    "$tState.deviceType"(){
      if(this.deviceType.includes('mobile')){
        this.linkLeft[2].show=false
        this.linkRight[0].show=false
      }else{
        this.linkLeft[2].show=true
        this.linkRight[0].show=true
      }
    }
  },
  mounted() {
    
  },
  beforeDestroy() {
    
  },
};
</script> 

<style lang="less">
.external-wrap{.poa; left:50%; .fixc("x"); bottom:0;  z-index: 10; width: 100px; height: 50px;
  .link-left-wrap,.link-right-wrap{ display:flex; .poa; bottom:0;
    .item{padding:2px 8px; .fc(fade(@wh,50%)); .por; cursor: pointer; .ani; white-space: nowrap;
      &:hover{.fc(@cbl5);}
    }
  }
  .link-left-wrap{right:90px;}
  .link-right-wrap{left:90px;}
}
</style>