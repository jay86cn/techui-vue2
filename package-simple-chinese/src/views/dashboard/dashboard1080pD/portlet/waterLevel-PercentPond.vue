<template>
  <div class="echarts-hasSelect at1-left" ref="waterPercentPond">
    <el-select v-model="select.current" size="mini" style="width:100px" :popper-append-to-body="false" filterable placeholder="选择井场">
      <el-option
        v-for="item in select.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="pond-wrap" v-if="!chartOption.update">
      <div class="item">
          <dv-water-level-pond :config="optionWater" style="width:100%;height:100%" />
      </div>
      <div class="item">
          <dv-percent-pond :config="optionPercent1" style="width:100%;height:100%;" />
      </div>
      <div class="item">
          <dv-percent-pond :config="optionPercent2" style="width:100%;height:100%;" />
      </div>
    </div>
  </div>
</template>
<script>
import themeChart from "@/mixins/themeChart"
export default {
  components: { },
  mixins: [themeChart],
  //props: ['boxStyle'],
  data() {
    return {
      select:{
        options: [
          { value: 'a', label: '压裂队A' }, 
          { value: 'b', label: '压裂队B' }, 
        ],
        current: 'a'
      },
      boxStyle:{
        color1:$c.bll9,
        color2:$c.cyl5,
        BGColor:$c.fade($c.bll9,.8),
      },
      chartOption:{
        update:false
      },
      optionWater:{
        data: [45,55],
        shape: 'roundRect',
        waveHeight: 25,
        waveNum: 1,
        waveOpacity:.8,
        colors:[$c.bll5, $c.cyl7],
        textColor:$c.cyl5,
        formatter:'产能达标<br> {value}%',
      },
      optionPercent1:{
        value: 66,
        borderWidth: 3,
        borderRadius: 5,
        borderGap: 5,
        lineDash: [3, 2],
        colors:[$c.bll5, $c.cyl7],
        textColor:$c.cyl3,
        formatter:'指标完成 {value}%',
      },
      optionPercent2:{
        value: 32,
        borderWidth: 3,
        borderRadius: 5,
        borderGap: 5,
        lineDash: [3, 2],
        colors:[$c.bll5, $c.cyl7],
        textColor:$c.cyl3,
        formatter:'任务完成 {value}%',
      }
    };
  },
  computed: {},
  watch:{
    "select.current"(val1,val2){
      let dr=this.randomData({
        min:0,
        max:100,
        length:3,
        group:1
      })
      this.processData(dr[0]);
    },
    "chartOption.update"(val){
      if(val){
        this.refresh()
      }
    }
  },
  methods: {
    processData(data){
      this.refresh();
      this.optionWater.data[0]=data[0]-10
      this.optionWater.data[1]=data[0]
      this.optionPercent1.value=data[1]
      this.optionPercent2.value=data[2]

    },
    refresh(){
      this.chartOption.update=true;
      // this.$timer('wpPond',()=>{this.chartOption.update=false;},100)
      this.$nextTick(()=>{
        this.chartOption.update=false;
      })
    },
    chartTheme(){
      const {getColor,optionWater,optionPercent1,optionPercent2}=this
      optionWater.colors=optionPercent1.colors=optionPercent2.colors=[getColor("techDecoA"),getColor("techDecoB")]
    }
  },
  mounted() {
    this.resizeAny(this.$refs['waterPercentPond'],()=>{
      this.refresh()
    })
  },
  beforeDestroy() {
    this.resizeAny(this.$refs['waterPercentPond'])
  },
};
</script>

<style scoped lang="less">
.pond-wrap{.poa; .fullbox(30px); top:60px; .grid(5,2,20px);
  .item{
    //<row-start> / <column-start> / <row-end> / <column-end>;
     &:nth-child(1){grid-area: 1 / 1 / 3 / 3;}
     &:nth-child(2){grid-area: 1 / 3 / 2 / 6;}
     &:nth-child(3){grid-area: 2 / 3 / 3 / 6;}
  }
}
</style>
