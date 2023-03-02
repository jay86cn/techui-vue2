<template>
  <div class="change-view">
    <div class="tabs-btn" @click="itemClick(item)" v-for="(item,index) in view.data">
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
.screenMobileA-map{
  .change-view{position: absolute; z-index: 10; cursor: pointer;  .fullbox(20px); top:auto; display: grid; grid-template-columns: repeat(3,1fr); grid-template-rows:repeat(1,1fr); grid-gap: 20px;
    .tabs-btn{display:block; position: relative; text-align: center; 
      .techButtonB2{
        .text{.ff("cn1"); }
      }
    }
    
  }

}
</style>
