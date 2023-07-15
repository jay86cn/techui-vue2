<template>
  <div class="counterGrid-mobile">
    <aYinTechBorderB2 :config="borderConfig" v-for="(item,index) in arry" :key="index">
      <div class="inner-content">
        <div class="block-title">{{$t(`dashboardC.l4.item${index+1}`)}} <span v-if="false">({{item.unit}})</span></div>
        <div class="total">
          <i :class="[item.icon,'icon']"></i>
          <!-- <DigitalTransform class="numbers" :value="123210"  :interval="globalConfig.animation?3000:0"></DigitalTransform> -->
          <DigitalTransform class="numbers" :value="item.total" :useGrouping="true" :interval="globalConfig.animation?3000:0"></DigitalTransform>
          <!-- <span class="unit">{{item.unit}}</span> -->
        </div>
      </div>
      <div class="bdTechBottom"></div>
    </aYinTechBorderB2>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  //components: {DigitalTransform},
  //props: ['boxStyle'],
  data() {
    return {
      arry:[
        {title:"Automatic Station",icon:"i carbon:building",unit:"",total:"4276"},
        {title:"Homeland Station",icon:"i carbon:building-insights-1",unit:"",total:"1873"},
        {title:"Provincial Station",icon:"i carbon:building-insights-2",unit:"",total:"3135"},
        {title:"Monitoring Station",icon:"i carbon:building-insights-3",unit:"",total:"769"},
      ],
      borderConfig: {
        decoration: false,
        opacity: 0.7
      }
    };
  },
  computed: {},
  watch:{
    "$tState.mapData.name"(val1,val2){
      let dr=this.randomData({
        min:0,
        max:9999,
        length:4,
        group:1
      })[0]
      this.arry.forEach((item,i)=>{
        item.total=dr[i];
      })
      
    }
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="less">
.counterGrid-mobile{.grid(2,2,20px); height: 100%; position: relative;
  .aYinTechBorderB2{ padding:0;   position: relative;
    //&:nth-child(1){ grid-area: 1 / 1 / 2 / 3;  }
    .inner-content{
      .block-title{position: absolute;.ff("cn1"); left:8px; top:2px; .fc(var(--font-normal)); font-size: 12px; }
      .total{margin: 0; line-height: 30px; .poa; left:20px; right:0; top:57%; .fixc("y");
        i{display:inline-block;font-size:32px; vertical-align: text-top; margin-right: 10px; .fc(var(--font-normal));}
        .numbers{display:inline-block; text-align: center; font-size: 32px; .ff("en0");  position: relative; vertical-align: text-top; .fc(var(--font-strong));
          .badge{position: absolute; left:100%; top:-10px; font-size: 14px; width: 30px; height:30px; padding:0; line-height: 1; }
        }
        .unit{font-size: 14px; margin:0 0 0 10px; .fc(var(--font-strong));}
      }
    }
  }
}
</style>
