<template>
  <div class="flip-counter-wrap-s4x2D-guage">
    <div class="chart-inner">
      <echartsGaugeC></echartsGaugeC>
    </div>
    <div class="flip-counter-wrap ">
      <div class="counter-inner">
        <DigitalTransform  class="flip-counter" :value="counter.val" :interval="globalConfig.animation?500:0" :dislocation="true" ></DigitalTransform>
        <div class="counter-title">{{counter.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  //props: ['boxStyle'],
  components: {
    echartsGaugeC:() => import('./echarts-gaugeC.vue'),
  },
  data() {
    return {
      
      counter:{
        val:5322389,
        title:"Current Alarms"
      },
      
    };
  },
  computed: {},
  methods: {
    
  },
  mounted() {
    this.counter.title=this.$t("dashboard4x2D.p3.desc2")
  },
 
};
</script>

<style lang="less">
.flip-counter-wrap-s4x2D-guage{height:100%;
  .chart-inner{height:60%;}
  .flip-counter-wrap{height:40%; text-align: center;  .por;
    .counter-inner{.absoluteCenter;
      .flip-counter{font-size: 32px; line-height: 48px;
        .digital-transform-item{
          .dt-scroll-list{
            .dt-scroll-digital{padding:0 10px; .bgc(var(--button-bg)); .fc(var(--font-strong));.bdr; margin:0 10px; .ff(impact); }
          }
        }
      }
      .counter-title{font-size: 18px; .fc(var(--font-normal)); margin-top: 10px;}
    }
  }
}
</style>
