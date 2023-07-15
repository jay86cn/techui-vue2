<template>
    <div class="pyramid-wrap">
      <div v-for="(item,index) in arry" class="item">
        <span class="desc">{{item.name}}</span>
        <span class="num">{{item.num}}</span>
      </div>
      <img :src="img" alt="">
    </div>
</template>
<script>
import base64Img from "./images/base64Img"
export default {
  name: "pyramid",
  mixins: [],
  components: {},
  //props: ['boxStyle'],
  data() {
    return {
      arry:[
        {name:"數據A",num:135},
        {name:"數據B",num:463},
        {name:"數據C",num:984},
      ],
      img:base64Img.pyramid
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
.pyramid-wrap{.poa; left:50%; top:58%; .fixc("xy");
  img{width: 200px; height: 200px; object-fit: contain;}
  .item{.poa; .fc(var(--font-normal));
    .desc{font-size: 16px;  padding:0 5px 0 0; .ff("cn1");}
    .num{font-size: 16px; .ff("en5");}
    &:nth-child(1){left:-30px; top:10px; }
    &:nth-child(2){right:-82px; top:80px;}
    &:nth-child(3){left:-83px; top:118px;}
  }
}
.theme-dark{.pyramid-wrap{ img{filter:saturate(40%);}}}
</style>
