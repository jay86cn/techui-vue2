<template>
  <div class="change-view">
    <div class="tabs-btn" @click="itemClick(item)" v-for="(item,index) in view.data">
      <techButtonB1 :config="buttonConfig" :class="item.label==view.current?'active':'deactive'">{{item.title}}</techButtonB1>
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
      buttonConfig:{
        subType:'C',
        height:30,
        backgroundOpacity:1,
        decoLength:5
      }
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
.dashboardMobileA-map{
  .change-view{position: absolute; z-index: 10; cursor: pointer;  .fullbox(20px); top:auto; .grid(3,1,20px);
    .tabs-btn{display:block; position: relative; text-align: center; 
      .techButtonB1{display:block;
        .text{.ff("cn1"); }
      }
    }
    
  }

}
</style>
