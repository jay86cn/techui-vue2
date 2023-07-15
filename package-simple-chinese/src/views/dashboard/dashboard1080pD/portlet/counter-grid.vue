<template>
  <div class="counterGrid6-1080D">
    <aYinTechBorderB2 :config="borderConfig" v-for="(item,index) in arry" :key="index">
      <div class="inner-content">
        <div class="block-title">{{item.title}} <span v-if="item.unit">({{item.unit}})</span></div>
        <div class="total">
          <i :class="[item.icon,'icon']"></i>
          <!-- <DigitalTransform class="numbers" :value="123210"  :interval="globalConfig.animation?3000:0"></DigitalTransform> -->
          <DigitalTransform class="numbers" :value="item.total" :useGrouping="true" :interval="globalConfig.animation?3000:0"></DigitalTransform>
          <!-- <span class="unit">{{item.unit}}</span> -->
        </div>
      </div>
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
        //{title:"文书总数",icon:"fal fa-pump",unit:"个",total:"3135"},
        {title:"人工成本",icon:"i carbon:events-alt",unit:"万元",total:"14276"},
        {title:"直接材料费",icon:"i carbon:cloud-satellite",unit:"万元",total:"14276"},
        {title:"折旧及摊销费",icon:"i carbon:network-admin-control",unit:"万元",total:"3135"},
        {title:"内部结算",icon:"i carbon:delivery-parcel",unit:"万元",total:"769"},
        {title:"间接费用分摊",icon:"i carbon:concept",unit:"万元",total:"3135"},
        {title:"其他直接支出",icon:"i carbon:cics-system-group",unit:"万元",total:"769"},
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
.counterGrid6-1080D{.grid(2,3,12px);height: 100%; position: relative;
  .aYinTechBorderB2{ padding:0;   position: relative; 
    //&:nth-child(1){ grid-area: 1 / 1 / 2 / 3;  }
    .inner-content{
      .block-title{position: absolute;.ff("cn1"); left:8px; top:2px; .fc(var(--font-normal));font-size: 12px; }
      .total{margin: 0;line-height: 30px; .poa; left:20px; right:0; top:65%; .fixc("y");
        i{display:inline-block;font-size:24px;  margin-right: 10px;.fc(var(--font-normal));vertical-align: top;}
        .numbers{display:inline-block; text-align: center;  font-size: 24px; .ff("en0");  position: relative;.fc(var(--font-strong));
          .badge{position: absolute; left:100%; top:-10px; font-size: 14px; width: 30px; height:30px; padding:0; line-height: 1; }
        }
        .unit{font-size: 14px; margin:0 0 0 10px;.fc(var(--font-strong));}
      }
    }
  }
}
</style>
