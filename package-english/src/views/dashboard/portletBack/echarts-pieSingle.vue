<template>
    <dv-charts :option="option" />
</template>
<script>
export default {
  name: "echarts-pieSingle",
  mixins: [],
  components: {},
  props: ['boxStyle'],
  data() {
    return {
      boxColor1:$c.fade($c.bk,.6),
      boxColor2:$c.blm7,
      boxColor3:$c.bll8,
      boxBGColor:$c.fade($c.bll9,.8),
      option:{
        title: {
          text: '',
          style: { fill: $c.cbl5,fontWeight: 'normal' },
          offset:[0, -30]
        },
        legend: {
          data: ['同比', '环比'],
          orient: 'horizontal',
          bottom:10,
          show:false,
          fill: $c.cbl5
        },
        series: [
          {
            name: '环比',
            type: 'pie',
            data: [
              { name: '尾矿库', value: 93 },
              { name: '非煤矿山', value: 32 },
              
            ],
            center: ['50%', '55%'],
            radius: ['30%', '65%'],
            outsideLabel: {
              show: true,
              labelLineBendGap:10,
              labelLineEndLength:30
            },
            insideLabel: {
              show: true
            }
          }
        ]
        
        
      },
      
    };
  },
  computed: {},
  methods: {
  },
  mounted() {
  }
};
</script>

<style scoped lang="less">
</style>
