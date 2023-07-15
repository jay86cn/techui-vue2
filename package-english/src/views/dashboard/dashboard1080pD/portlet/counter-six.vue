<template>
  <div class="counter-six-wrap">
    <div class="counter-item" v-for="(item,index) in counterList">
      <div class="name">
        <div class="name-inner">
          <span class="desc1">{{item.name}}</span>
          <span class="desc2">Deptment</span>
        </div>
      </div>
      <div class="content">
        <div class="counter-val" v-for="(val,i)  in item.val">
          <DigitalTransform class="numbers" :value="val"  :interval="globalConfig.animation?2000:0"></DigitalTransform>
          <span class="label">{{i==0?'Platforms':'Wells'}}</span>
        </div>
      </div>
      <!-- <div class="name">{{item.name}} <span class="unit">({{item.unit}})</span></div> -->
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
        {name:"Jingbian",val:[63,478],unit:""},
        {name:"Longdong",val:[231,828],unit:""},
        {name:"Jing'an",val:[82,472],unit:""},
        {name:"Ji Yuan",val:[147,827],unit:""},
        {name:"Foreign",val:[125,73],unit:""},
        {name:"Wushen",val:[842,24],unit:""},
        
      ]
    };
  },
  computed: {},
  methods: {
    processRandomVal(){
      let randomVals=this.randomData({
        min:20,
        max:1000,
        length:2,
        group:6
      })
      this.$timer('counterRad',()=>{
        randomVals.forEach((item,i)=>{
          this.counterList[i].val=item;
        })
        this.processRandomVal();
      },10000)
    }
  },
  mounted() {
    this.processRandomVal()
  }
};
</script>
<style lang="less">
.confg(){
  &:nth-child(1){.bd(var(--auxilary-danger_BD));.bgc(var(--auxilary-danger_BG));
    .name{.bgc(var(--auxilary-danger_BG_light));.bdri(var(--auxilary-danger_BD_light)); .fc(var(--auxilary-danger_FC_light));}
    .content,.content .numbers{.fc(var(--auxilary-danger_FC)); }
  }
  &:nth-child(2){.bd(var(--auxilary-warning_BD));.bgc(var(--auxilary-warning_BG));
    .name{.bgc(var(--auxilary-warning_BG_light));.bdri(var(--auxilary-warning_BD_light)); .fc(var(--auxilary-warning_FC_light));}
    .content,.content .numbers{.fc(var(--auxilary-warning_FC)); }
  }
}

.counter-six-wrap{.poa; .fullbox; .grid(3,2,12px);
  .counter-item{.bd(var(--button-bd_hov)); .bgc(var(--popup-bg)); padding:0 0 0 80px; position: relative;
    .name{.fc(var(--font-normal)); .bgc(var(--button-bd_hov)); font-size: 14px; .poa;  left:0; top:0;  width: 80px; height: 100%; line-height: 1.2; text-align: center;
      .name-inner{.absoluteCenter;
        span{display: block; white-space: nowrap;
          &.desc1{font-size: 14px;font-weight: bold;}
        }
      }
    }
    .content{.fc(var(--font-normal)); .poa; right:20px; left:100px; top:50%; .fixc("y"); .grid(2,1,20px);
      .counter-val{text-align: center;
        .numbers{font-size: 24px; .por; font-weight: bold;.ff("en5"); .fc(var(--font-normal));
          .plus{.fc(var(--font-normal))}
        }
        .label{display:block;}
      }
    }
    .confg;
    &:nth-child(3){}
  }
}

.theme-dark,
.theme-blue{
  .counter-six-wrap{
    .counter-item{
      &:nth-child(3){.bd(var(--auxilary-success_BD));.bgc(var(--auxilary-success_BG));
        .name{.bgc(var(--auxilary-success_BG_light));.bdri(var(--auxilary-success_BD_light)); .fc(var(--auxilary-success_FC_light));}
        .content,.content .numbers{.fc(var(--auxilary-success_FC)); }
      }
    }
  }
}
.theme-green{
  .counter-six-wrap{
    .counter-item{
      &:nth-child(3){.bd(var(--auxilary-info_BD));.bgc(var(--auxilary-info_BG));
        .name{.bgc(var(--auxilary-info_BG_light));.bdri(var(--auxilary-info_BD_light)); .fc(var(--auxilary-info_FC_light));}
        .content,.content .numbers{.fc(var(--auxilary-info_FC)); }
      }
    }
  }
}

</style>
