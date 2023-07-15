<template>
  <div class="change-view">
    <div class="tabs-btn-wrap" @click="itemClick(item)" v-for="(item,index) in view.data" >
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
        height:46,
        backgroundOpacity:1
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
.dashboard4X2A-map{
  .change-view{position: absolute; z-index: 10; cursor: pointer; bottom:34%; right:25.8%; transform: scale(.8);
    .tabs-btn-wrap{display:block; position: relative; text-align: center;  margin:20px 0;
      .techButtonB1{width:150px; display:block;
        .text{.ff("cn1"); font-size: 18px;}
      }
      
    }
  }
}

</style>
