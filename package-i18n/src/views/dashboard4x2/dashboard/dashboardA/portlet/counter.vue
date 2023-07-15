<template>
  <div class="grid-counter-s4x2">
    <div class="item" v-for="(item,index) in counter">
      <span class="title">{{$t(`dashboard4x2A.p1.item${index+1}`)}}</span>
      <DigitalTransform  class="num" :value="item.num" :interval="globalConfig.animation?500:0" :dislocation="true" ></DigitalTransform>
    </div>
    <div class="center-icon"><i class="i carbon:content-delivery-network"></i></div>
  </div>
      
</template>
<script>
export default {
  name: "counter",
  mixins: [],
  //props: ['boxStyle'],
  data() {
    return {
      counter:[
        {name:"Under Construction",num:388},
        {name:"Stop Production",num:925},
        {name:"In production",num:1100},
        {name:"Suspension",num:1056},
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
.grid-counter-s4x2{.poa; .fullbox(30px); .grid(2,2,20px);
  .center-icon{width: 80px; height: 80px; .bdr(50%);  .poa; left:50%; top:50%; .fixc("xy");  .bgc(var(--tech-bg));.fc(var(--font-weak));  font-size: 39px; z-index: 3;
    .i{.fae; content:"\e52f"; .absoluteCenter; }
  }
  .item{ .bd(var(--chart-line_SP)); padding: 10px;  position: relative; .bdr(5px);
    &:before{.poa; content:" "; width: 30px; height: 30px;  .bd(var(--tech-deco_B)); .bgc(var(--tech-bg));  z-index: 2; }
    &:nth-child(1){.bglg(var(--tech-bg),var(--chart-mapBG_A),120deg);
      &:before{right:-1px; bottom:-1px; .bdr(100% 0 0 0);.bdri(var(--tech-bg)); .bdb(var(--tech-bg));}
    }
    &:nth-child(2){.bglg(var(--tech-bg),var(--chart-mapBG_A),-120deg);
      &:before{left:-1px; bottom:-1px; .bdr(0 100% 0 0);.bdl(var(--tech-bg)); .bdb(var(--tech-bg));}
    }
    &:nth-child(3){.bglg(var(--chart-mapBG_A),var(--tech-bg),240deg);
      &:before{right:-1px; top:-1px; .bdr(0 0 0 100%); .bdri(var(--tech-bg)); .bdt(var(--tech-bg));}
    }
    &:nth-child(4){.bglg(fade(@rel7,50%),fade(@rel9,50%),-240deg); .bd(fade(@rel7,30%)); 
      .title{.fc(@rel3);}
      &:before{.bd(@rel5); left:-1px; top:-1px; .bdr(0 0 100% 0); .bdl(var(--tech-bg)); .bdt(var(--tech-bg));}
    }
    .title{display:block;text-align: center; .fc(var(--font-normal)); height: 50%; .ff("cn1"); font-size: 16px;}
    .num{display:block;text-align: center; font-size: 24px; .fc(var(--font-strong)); height: 50%;.ff("en5");}
  }
}
</style>
