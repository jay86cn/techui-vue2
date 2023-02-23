<template>
  <div class="change-view">
    <div class="tabs-btn-wrap" @click="itemClick(item)" v-for="(item,index) in view.data" >
      <techButtonB2 :class="item.label==view.current?'active':'deactive'">{{item.title}}</techButtonB2>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockCenter",
  mixins: [],
  props: {
    view:{
      type:Object
    }
  },
  data() {
    return {
      
    };
  },
  computed: {},
  methods: {
    itemClick(item){
      this.$emit("changeView",item)
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="less">
.screen1080pAG-map{
  .change-view{position: absolute; z-index: 10; cursor: pointer; bottom:24.5%; right:26.5%; transform: scale(.8);
    .tabs-btn-wrap{display:block; position: relative; text-align: center;  margin:20px 0;
      .techButtonB2{width:150px;
        .text{.ff("cn1"); font-size: 18px; line-height: 30px;}
      }
      // .desc{ position: relative; z-index: 10; }
      // &.active{ .fc(@cbl3); .bgc(fade(@cyl4,30%));}
      // &:hover{transform:scale(1.08);
      //   .desc{}
      // }
    }
  }
}

</style>
