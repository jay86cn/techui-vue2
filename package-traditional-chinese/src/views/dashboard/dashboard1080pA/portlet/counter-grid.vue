<template>
  <div class="dashboardA-counterGrid">
    <aYinTechBorderB3 :config="borderConfig(index)" v-for="(item,index) in arry" :key="index">
      <div class="inner-content">
        <div class="block-title">{{item.title}} <span v-if="item.unit">({{item.unit}})</span></div>
        <div class="total">
          <i :class="[item.icon,'icon']"></i>
          <!-- <DigitalTransform class="numbers" :value="123210"  :interval="globalConfig.animation?3000:0"></DigitalTransform> -->
          <DigitalTransform class="numbers" :value="item.total" :useGrouping="true" :interval="globalConfig.animation?3000:0"></DigitalTransform>
          <!-- <span class="unit">{{item.unit}}</span> -->
        </div>
      </div>
    </aYinTechBorderB3>
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
        {title:"軟件銷售額",icon:"i carbon:ibm-z-cloud-mod-stack",unit:"萬元",total:"1874"},
        {title:"硬件銷售額",icon:"i carbon:chip",unit:"萬元",total:"3276"},
        {title:"技術服務",icon:"i carbon:user-speaker",unit:"萬元",total:"315"},
        {title:"安全服務",icon:"i carbon:rule",unit:"萬元",total:"769"},
      ],
    };
  },
  computed: {
    
  },
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
    borderConfig(index){
      let rotate
      if(index==0){
        rotate="x";
      }else if(index==1){
        rotate="all";
      }else if(index==2){
        rotate=null;
      }else if(index==3){
        rotate="y";
      }
      return {
        dur: 3,
        opacity: 0.7,
        // decoration: false,
        rotate
      }
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="less">
.dashboardA-counterGrid{.grid(2,2,12px);  height: 100%;  position: relative;
  .aYinTechBorderB3{ padding:0;   position: relative; 
    //&:nth-child(1){ grid-area: 1 / 1 / 2 / 3;  }
    .inner-content{
      .block-title{position: absolute;.ff("cn1"); left:0; right:0; text-align: center; top:10px;.fc(var(--font-normal)); font-size: 14px; }
      .total{margin: 0; text-align: center; line-height: 30px; .poa; left:0; right:0; top:60%; .fixc("y");
        i{display:inline-block;font-size:32px; vertical-align: text-top; margin-right: 10px;.fc(var(--font-normal));}
        .numbers{display:inline-block; text-align: center; font-size: 32px; .ff("en0");  position: relative; vertical-align: text-top; .fc(var(--font-strong));
          .badge{position: absolute; left:100%; top:-10px; font-size: 14px; width: 30px; height:30px; padding:0; line-height: 1; }
        }
        .unit{font-size: 14px; margin:0 0 0 10px;.fc(var(--font-strong));}
      }
    }
  }
}

</style>
