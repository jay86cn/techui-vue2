<template>
  <div class="counter-six-side-wrap">
    <div class="counter-item" v-for="(item,index) in counterList">
      <div class="project-name">
        <div class="name-inner">
          <span class="desc1">{{item.name}}</span>
          <span class="desc2">项目部</span>
        </div>
      </div>
      <div class="content">
        <div class="counter-val" v-for="(val,i)  in item.val">
          <DigitalTransform class="numbers" :value="val"  :interval="globalConfig.animation?2000:0"></DigitalTransform>
          <span class="label">{{i==0?'平台数':'单井数'}}</span>
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
        {name:"靖边",val:[63,478],unit:"个"},
        {name:"陇东",val:[231,828],unit:"个"},
        {name:"靖安",val:[82,472],unit:"个"},
        {name:"姬塬",val:[147,827],unit:"个"},
        {name:"对外合作",val:[125,73],unit:"个"},
        {name:"乌审旗",val:[842,24],unit:"个"},
        
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
.counter-six-side-wrap{.poa; .fullbox; .grid(2,3,20px);
  .counter-item{.bd(@cbl8); .bgc(fade(@bll9,80%)); padding:0 0 0 50px; position: relative;
    .project-name{.fc(@cbl2); .bgc(fade(@cbl3,30%)); font-size: 14px; .poa;  left:0; top:0; writing-mode: vertical-lr; width: 50px; height: 100%; line-height: 1.2; text-align: center;
      .name-inner{.absoluteCenter;
        span{display: block; white-space: nowrap;
          &.desc1{font-size: 16px;font-weight: bold;}
        }
      }
    }
    .content{.fc(@cbl3);.poa; right:20px; left:70px; top:50%; .fixc("y"); .grid(2,1,20px);
      .counter-val{text-align: center;
        .numbers{font-size: 24px; .por; font-weight: bold;.ff("en1"); }
        .label{display:block;}
      }
    }
    &:nth-child(1){.bd(fade(@rel5,50%));
      .project-name{.bgc(fade(@rel3,40%));.bdri(fade(@rel5,30%)); .fc(@rel2);}
      .content{.fc(@rel3); }
    }
    &:nth-child(2){.bd(fade(@yem5,50%));
      .project-name{.bgc(fade(@yem3,40%));.bdri(fade(@yem5,30%)); .fc(@yel2);}
      .content{.fc(@yel3); }
    }
    &:nth-child(3){.bd(fade(@aqm5,50%));
      .project-name{.bgc(fade(@aqm3,40%));.bdri(fade(@aqm5,30%)); .fc(@aql2);}
      .content{.fc(@aql3); }
    }
    &:nth-child(3){}
  }
}
</style>
