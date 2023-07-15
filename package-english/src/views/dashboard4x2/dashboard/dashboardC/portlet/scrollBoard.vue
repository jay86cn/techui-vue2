<template>
  <dv-scroll-board :config="option" style="width:100%;height:100%" class="scrollBoard-table-S4x2B" />
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  components: {},
  //props: ['boxStyle'],
  data() {
    return {
      
      option:{
        header: ['Row1', 'Row2', 'Row3'],
        data: [
          ['Col1Row1', 'Col1Row2', 'Col1Row3'],
          ['Col2Row1', 'Col2Row2', 'Col2Row3'],
          ['Col3Row1', 'Col3Row2', 'Col3Row3'],
          ['Col4Row1', 'Col4Row2', 'Col4Row3'],
          ['Col5Row1', 'Col5Row2', 'Col5Row3'],
          ['Col6Row1', 'Col6Row2', 'Col6Row3'],
          ['Col7Row1', 'Col7Row2', 'Col7Row3'],
          ['Col8Row1', 'Col8Row2', 'Col8Row3'],
          ['Col9Row1', 'Col9Row2', 'Col9Row3'],
          ['Col10Row1', 'Col10Row2', 'Col10Row3'],
          ['Col1Row1', 'Col1Row2', 'Col1Row3'],
          ['Col2Row1', 'Col2Row2', 'Col2Row3'],
          ['Col3Row1', 'Col3Row2', 'Col3Row3'],
          ['Col4Row1', 'Col4Row2', 'Col4Row3'],
          ['Col5Row1', 'Col5Row2', 'Col5Row3'],
          ['Col6Row1', 'Col6Row2', 'Col6Row3'],
          ['Col7Row1', 'Col7Row2', 'Col7Row3'],
          ['Col8Row1', 'Col8Row2', 'Col8Row3'],
          ['Col9Row1', 'Col9Row2', 'Col9Row3'],
          ['Col10Row1', 'Col10Row2', 'Col10Row3']
        ],
        index: true,
        columnWidth: [50],
        headerBGC:$c.fade($c.bk,.3),
        oddRowBGC:$c.fade($c.cyl3,.1),
        evenRowBGC:"transparent",
        align: ['center'],
        rowNum:15,
        waitTime:5000,

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
<style  lang="less">
.scrollBoard-table-S4x2B{
  .header{
    .header-item{.ff("cn1"); }
  }
}
</style>
