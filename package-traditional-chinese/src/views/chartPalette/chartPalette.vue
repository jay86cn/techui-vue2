<template>
   <div class="chartPlate-wrap">
    <chartPalette :tab="tab"></chartPalette>
   </div>
</template>
<script>
import barA from "./echarts/barA.vue"
import lineB from "./echarts/lineB.vue"
import pieC from "./echarts/pieC.vue"
import heatmapD from "./echarts/heatmapD.vue"
export default {
  mixins: [],
  components: {
    // chartPaletteO:() => import("./chartPalette/chartPaletteO.vue"),
    // barA:() => import('./echarts/barA.vue'),
    // lineB:() => import('./echarts/lineB.vue'),
    // pieC:() => import('./echarts/pieC.vue'),
    // heatmapD:() => import('./echarts/heatmapD.vue'),
  },
  data() {
    return {
      tab:{
        active:"bar",
        components:[
          {title:"柱狀圖",name:"bar",component:barA},
          {title:"曲線圖",name:"line",component:lineB},
          {title:"餅狀圖",name:"pie",component:pieC},
          {title:"熱力圖",name:"heatmap",component:heatmapD},
        ],
      },
    };
  },
  watch:{
    
  },
  
  computed: {
   barA(){
    return barA
   }
  },
  methods: {

  },
  mounted() {
    
  },
};
</script> 
<style lang="less">
.chartPlate-wrap{}
</style>