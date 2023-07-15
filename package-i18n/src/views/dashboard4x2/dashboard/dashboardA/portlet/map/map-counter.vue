<template>
  <div class="map-counter-wrap">
    <div class="counter-item" v-for="(item,index) in counterList">
      <i :class="'icon '+item.icon"></i>
      <div class="content">
        <span class="num">{{item.num}}
          <span class="plus" v-if="item.plus">+{{item.plus}}</span>
        </span>
      </div>
      <div class="name">{{$t(`dashboard4x2A.map.counter.item${index+1}`)}} <span class="unit" v-if="false">({{item.unit}})</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  //props: ['boxStyle'],
  data() {
    return {
      counterList:[
        {name:"地下水总量",icon:"i carbon:carbon-for-ibm-product",num:394,unit:"亿吨",plus:1},
        {name:"监测取水量",icon:"i carbon:carbon-ui-builder",num:42558,unit:"亿吨"},
        {name:"监测取水户",icon:"i carbon:carbon-for-ibm-dotcom",num:50262,unit:"家",plus:4},
        {name:"监测取水口",icon:"i carbon:carbon",num:50262,unit:"个",plus:4},
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
.counter-item-re(){.bd(var(--auxilary-danger_BD));.bgc(var(--auxilary-danger_BG));
  .icon{.bgc(var(--auxilary-danger_BG_light));.bdri(var(--auxilary-danger_BD_light)); .fc(var(--auxilary-danger_FC_light));}
  .name{.fc(var(--auxilary-danger_FC));
    .unit{.fc(var(--auxilary-danger_FC));}
  }
  .content{
    .num,
    .num .plus{.fc(var(--auxilary-danger_FC));}
  }
}
.counter-item-ye(){.bd(var(--auxilary-warning_BD));.bgc(var(--auxilary-warning_BG));
  .icon{.bgc(var(--auxilary-warning_BG_light));.bdri(var(--auxilary-warning_BD_light)); .fc(var(--auxilary-warning_FC_light));}
  .name{.fc(var(--auxilary-warning_FC));
    .unit{.fc(var(--auxilary-warning_FC));}
  }
  .content{
    .num,
    .num .plus{.fc(var(--auxilary-warning_FC));}
  }
}
.dashboard4X2A-map{
  .map-counter-wrap{.poa; left:50%; .fixc("x"); top:100px; z-index: 10;
    .counter-item{.bd(var(--button-bd_hov)); .bgc(var(--popup-bg)); width: 190px; display:inline-block; height: 60px; margin:0 20px 0 0; padding:10px 0 0 60px; position: relative;
      .icon{.fc(var(--font-normal)); .bgc(var(--button-bd_hov)); font-size: 28px;z-index: 1; .poa;left:0; top:0;  width: 50px; height: 58px; line-height: 60px; text-align: center;}
      .name{.fc(var(--font-normal)); font-size: 12px; .ff("cn1"); z-index: 1; .por;
        .unit{font-size: 12px;}
      }
      .content{.fc(var(--font-normal));
        .num{font-size: 18px; .por; font-weight: bold;.ff("en5");.fc(var(--font-normal)); 
          .plus{.poa; left:101%; top:-5px; font-size: 12px; .fc(var(--font-normal)); font-weight: normal;}
        }
      }
      &:nth-child(1){.counter-item-re;}
      &:nth-child(2){.counter-item-ye;}
      &:nth-child(3){}
      &:nth-child(4){margin:0;}
    }
  }
}
</style>
