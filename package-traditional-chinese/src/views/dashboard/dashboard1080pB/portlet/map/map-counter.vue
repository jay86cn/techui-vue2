<template>
  <div class="map-counter-alt-wrap">
    <div class="counter-item" v-for="(item,index) in counterList">
      <i :class="'icon '+item.icon"></i>
      <div class="name">{{item.name}} <span class="unit">({{item.unit}})</span></div>
      <div class="content">
        <span class="num">
          <DigitalTransform class="num" :value="item.num" :useGrouping="true" :interval="globalConfig.animation?2000:0"></DigitalTransform>
          <span class="plus" v-if="item.plus">+{{item.plus}}</span>
        </span>
      </div>
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
        {name:"软件销售额",icon:"i carbon:ibm-z-cloud-mod-stack",num:13694,unit:"元",plus:218},
        {name:"硬件销售额",icon:"i carbon:chip",num:14558,unit:"元"},
        {name:"技术服务",icon:"i carbon:user-speaker",num:3962,unit:"元",plus:462},
        {name:"安全服务",icon:"i carbon:rule",num:5302,unit:"元",plus:775},
      ]
    };
  },
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr1=this.randomData({
        min:5000,
        max:10000,
        length:4,
        group:1
      })
      let dr2=this.randomData({
        min:0,
        max:1000,
        length:4,
        group:1
      })
      this.counterList.forEach((item,i) => {
        item.num=dr1[0][i]
        item.plus=dr2[0][i]
      });
    }
  },
  computed: {},
  methods: {
  },
  mounted() {
    
  }
};
</script>
<style lang="less">
// .counter-item-re(){.bdl(var(--auxilary-danger_BD),3px);.bgc(var(--auxilary-danger_BG));
//   .icon{.fc(var(--auxilary-danger_FC_light));}
//   .name{.fc(var(--auxilary-danger_FC));
//     .unit{.fc(var(--auxilary-danger_FC));}
//   }
//   .content{
//     .num,
//     .num .plus{.fc(var(--auxilary-danger_FC));}
//   }
// }
// .counter-item-ye(){.bdl(var(--auxilary-warning_BD),3px);.bgc(var(--auxilary-warning_BG));
//   .icon{ .fc(var(--auxilary-warning_FC_light));}
//   .name{.fc(var(--auxilary-warning_FC));
//     .unit{.fc(var(--auxilary-warning_FC));}
//   }
//   .content{
//     .num,
//     .num .plus{.fc(var(--auxilary-warning_FC));}
//   }
// }
.dashboard1080pB-map{
  .map-counter-alt-wrap{.poa; left:50%; .fixc("x"); bottom:70px; z-index: 10;
    .counter-item{.bdl(var(--button-bd_hov),3px); .bgc(var(--button-bg)); width: 210px; display:inline-block; height: 80px; margin:0 20px 0 0; padding:10px 0 0 60px; position: relative;
      .icon{.fc(var(--font-normal)); font-size: 32px;z-index: 1; .poa;left:5px; top:50%; .fixc("y");  width: 50px; height: 58px; line-height: 60px; text-align: center;}
      .name{.fc(var(--font-normal)); font-size: 16px; .ff("cn1"); z-index: 1; .por;
        .unit{font-size: 12px;}
      }
      .content{.fc(var(--font-normal)); margin:10px 0;
        .num{font-size: 24px; .por; font-weight: bold;.ff("en0"); .fc(var(--font-normal)); 
          .dt-scroll-digital{text-align: center;}
          .plus{.poa; left:101%; top:-5px; font-size: 12px; .fc(var(--font-normal)); font-weight: normal; .ff("arial");}
        }
      }
      // &:nth-child(1){.counter-item-re;}
      // &:nth-child(2){.counter-item-ye;}
      // &:nth-child(3){}
      &:last-child{margin:0;}
    }
  }
}

</style>
