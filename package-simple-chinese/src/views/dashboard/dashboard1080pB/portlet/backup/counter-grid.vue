<template>
  <div class="dashboardB-counterGrid">
    <aYinTechBorderC1 v-for="(item,index) in arry" :key="index">
      <div class="inner-content">
        <div class="block-title">{{item.title}} <span v-if="item.unit">({{item.unit}})</span></div>
        <div class="total">
          <i :class="[item.icon,'icon']"></i>
          <!-- <DigitalTransform class="numbers" :value="123210"  :interval="globalConfig.animation?3000:0"></DigitalTransform> -->
          <DigitalTransform class="numbers" :value="item.total" :useGrouping="false" :interval="globalConfig.animation?3000:0"></DigitalTransform>
          <!-- <span class="unit">{{item.unit}}</span> -->
        </div>
      </div>
    </aYinTechBorderC1>
    <!-- <div class="block" > <div class="bdTechBottom"></div> </div> -->
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
        {title:"软件销售额",icon:"i carbon:ibm-z-cloud-mod-stack",unit:"万元",total:"1874"},
        {title:"硬件销售额",icon:"i carbon:chip",unit:"万元",total:"34276"},
        {title:"技术服务",icon:"i carbon:user-speaker",unit:"万元",total:"315"},
        {title:"安全服务",icon:"i carbon:rule",unit:"万元",total:"769"},
      ]
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
.dashboardB-counterGrid{.grid(2,2,15px); height: 100%; position: relative;
  .aYinTechBorderC1{ padding:0;   position: relative; 
    //&:nth-child(1){ grid-area: 1 / 1 / 2 / 3;  }
    .inner-content{
      .block-title{position: absolute;.ff("cn1"); left:8px; top:2px;.fc(var(--font-normal)); font-size: 12px; }
      .total{margin: 0; text-align: center; line-height: 30px; .poa; left:0; right:0; top:57%; .fixc("y");
        i{display:inline-block;font-size:32px; vertical-align: text-top; margin-right: 10px;.fc(var(--font-normal));}
        .numbers{display:inline-block; font-size: 32px; .ff("en0");  position: relative; vertical-align: text-top; .fc(var(--font-strong));
          .badge{position: absolute; left:100%; top:-10px; font-size: 14px; width: 30px; height:30px; padding:0; line-height: 1; }
        }
        .unit{font-size: 14px; margin:0 0 0 10px;.fc(var(--font-strong));}
      }
    }
  }
}

</style>
