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
          { name: 'Name A', value: 55 }, 
          { name: 'Name B', value: 120 }, 
          { name: 'Name C', value: 78 }, 
          { name: 'Name D', value: 66 }, 
          { name: 'Name E', value: 80 }, 
          { name: 'Name F', value: 45 }, 
          { name: 'Name G', value: 29 },
          { name: 'Name H', value: 120 }, 
          { name: 'Name I', value: 78 }, 
          { name: 'Name J', value: 66 }, 
          { name: 'Name K', value: 80 }, 
          { name: 'Name L', value: 45 }, 
          { name: 'Name M', value: 29 },
        ],
        rowNum:7,
        unit: ' $10K',
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
