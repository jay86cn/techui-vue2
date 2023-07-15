<template>
  <!--本组件后续会封装成标注组件，通过参数来配置不同的风格和外观-->
  <div class="chartCounter-wrap">
    <div class="counter-item" v-for="(item,index) in counterList">
      <div class="name">{{item.name}} <span class="unit">({{item.unit}})</span></div>
      <div class="content">
        <DigitalTransform class="num" :value="item.num" :useGrouping="false" :interval="globalConfig.animation?2000:0"></DigitalTransform>
      </div>
      <echartsLine :barColor="item.barColor"></echartsLine>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  components: {
    echartsLine:() => import('./echarts-line.vue'),
  },
  data() {
    return {
      counterList:[
        {name:"软件年盈利",num:394,unit:"万元",barColor:$c.rel3},
        {name:"硬件年盈利",num:42558,unit:"万元",barColor:$c.yel3},
        {name:"服务年盈利",num:50262,unit:"万元"},
        {name:"安全年盈利",num:50262,unit:"万元"},
      ]
    };
  },
  watch:{
    "$tState.mapData.code"(val1,val2){
      let tempData=this.randomData({
        min:1000,
        max:10000,
        length:4,
        group:1
      })[0]
      this.counterList.forEach((item,i)=>{
        item.num=tempData[i]
      })
      
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
.counter-item-re(){.bgc(var(--auxilary-danger_BG));//.bd(var(--auxilary-danger_BD));
  .name{.fc(var(--auxilary-danger_FC));
    .unit{.fc(var(--auxilary-danger_FC));}
  }
  .content{
    .num,
    .num .plus{.fc(var(--auxilary-danger_FC));}
  }
}
.counter-item-ye(){.bgc(var(--auxilary-warning_BG));//.bd(var(--auxilary-warning_BD));
  .name{.fc(var(--auxilary-warning_FC));
    .unit{.fc(var(--auxilary-warning_FC));}
  }
  .content{
    .num,
    .num .plus{.fc(var(--auxilary-warning_FC));}
  }
}

.dashboard1080B{
  .chartCounter-wrap{ width: 100%; height: 100%; padding:30px 0 0 0; .grid(2,2,10px);
    .counter-item{  width: 100%; display:inline-block; .bgc(var(--popup-bg)); height: 100%; padding:5px 0 0 10px; position: relative;//.bd(fade(@cbl8,80%));
      .name{.fc(var(--font-normal)); font-size: 16px; .ff("cn1"); z-index: 1; 
        .unit{font-size: 12px; opacity: .7;}
      }
      .content{.fc(var(--font-normal));
        .num{font-size: 24px; .por; .ff(impact);.fc(var(--font-normal));
          .plus{.poa; left:101%; top:-5px; font-size: 12px; .fc(var(--font-normal)); font-weight: normal; .ff("arial");}
        }
      }
      .echarts-wrapper{.poa!important; left:0; right:0; bottom:0; height: 20px!important;}

      &:nth-child(1){.counter-item-re;}
      &:nth-child(2){.counter-item-ye;}
      &:nth-child(3){}
      &:last-child{margin:0;}
    }
  }
}

</style>
