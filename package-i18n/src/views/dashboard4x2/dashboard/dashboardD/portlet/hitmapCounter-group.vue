<template>
  <div class="flip-counter-wrap-s4x2D-hitmap">
    <div class="flip-counter-wrap ">
      <div class="counter-inner">
        <DigitalTransform  class="flip-counter" :value="counter.val" :interval="globalConfig.animation?500:0" :dislocation="true" ></DigitalTransform>
        <div class="counter-title">{{counter.title}}</div>
      </div>
    </div>
    <div class="chart-inner">
      <echartHitmap></echartHitmap>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  //props: ['boxStyle'],
  components: {
    echartHitmap:() => import('./echarts-hitmapA.vue'),
  },
  data() {
    return {
      counter:{
        val:3300040,
        title:"Current number alarms"
      },
      
    };
  },
  computed: { }, 
  methods: { }, 
  mounted() {
    this.counter.title=this.$t("dashboard4x2D.p2.desc")
  },
 
};
</script>

<style lang="less">
.flip-counter-wrap-s4x2D-hitmap{height:100%;
  .flip-counter-wrap{height:30%; text-align: center;  .por;
    .counter-inner{.absoluteCenter; margin:20px 0 0 0;
      .flip-counter{font-size: 48px; line-height: 52px;
        .digital-transform-item{
          .dt-scroll-list{
            .dt-scroll-digital{padding:0 15px; .bgc(var(--button-bg)); .fc(var(--font-strong)); .bdr; margin:0 10px; .ff(impact);}
          }
        }
      }
      .counter-title{font-size: 18px; .fc(var(--font-normal)); margin-top: 10px;}
    }
  }
  .chart-inner{height:70%;}
}
</style>
