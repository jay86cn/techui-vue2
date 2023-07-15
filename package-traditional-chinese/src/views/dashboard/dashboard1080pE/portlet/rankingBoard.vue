<template>
  <dv-scroll-ranking-board class="dashboardE-seller-rankingBoard" :config="option" style="width:100%;height:100%" />
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  components: {},
  data() {
    return {
      option:{
        data: [
          { name: '陳志輝', value: 55 }, 
          { name: '劉潤生', value: 120 }, 
          { name: '劉斯傑', value: 78 }, 
          { name: '梁羽暉', value: 66 }, 
          { name: '張志豪', value: 80 }, 
          { name: '羅福浩', value: 45 }, 
          { name: '方鈞立', value: 29 },
          { name: '羅廣榮', value: 120 }, 
          { name: '李家華', value: 78 }, 
          { name: '姚志成', value: 66 }, 
          { name: '張詠樂', value: 80 }, 
          { name: '袁文傑', value: 45 }, 
          { name: '李慧心', value: 29 },
        ],
        rowNum:7,
        unit: ' 万元',
        //carousel: 'page'
        waitTime:5000
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
<style lang="less">
.dashboardE-seller-rankingBoard{
  .row-item{
    .ranking-info{font-size: 14px;
      .rank{.ff("en1"); font-weight: bold; margin:0 5px 0 0;}
      .info-name{ .ff("cn1")}
      .ranking-value{}
    }
    .ranking-column{
      .inside-column{
        .shine{}
      }
    }
  }
}
</style>
