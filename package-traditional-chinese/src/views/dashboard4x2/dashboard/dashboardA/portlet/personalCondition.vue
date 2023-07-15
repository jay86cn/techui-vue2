<template>
  <div class="personal-condition">
    <div class="item" v-for="(item,index) in counter">
      <div class="title">
        <span class="desc">{{item.title}}</span>
        <DigitalTransform  class="counter" :value="item.num" :interval="globalConfig.animation?500:0" :dislocation="true" ></DigitalTransform>
        <span class="unit">人</span>
      </div>
      <div class="iconList">
        <img v-for="(img,i) in 12" :class="i<(item.num/item.total*10)?'normal':'fade'" :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import base64Img from "./images/base64Img"
export default {
  name: "personalCondition",
  mixins: [],
  //props: ['boxStyle'],
  data() {
    return {
      counter:[
        {title:"實施作業人數",num:26205,total:38452,img:base64Img.person,},
        {title:"帶班領導人數",num:4386,total:7652,img:base64Img.person,},
      ],
    };
  },
  computed: {},
  methods: {
  },
  mounted() {
    // this.$timer("getValue",()=>{
    //   this.counter[0].num=26205
    //   this.counter[1].num=4386
    // },2000)
  }
};
</script>
<style lang="less">
.personal-condition{height: 85%; padding:13% 20px 0 20px;
  .item{height: 50%;
    .title{line-height: 2; margin:10px 0 0 0; text-align: right; position: relative; font-size: 16px; .ff("cn1");
      .desc{.poa; left:0; top:0;}
    }
    .iconList{padding:0 0 0 0;
      img{width: 8.333333%; height:30px; object-fit: contain; opacity: .3; .ani(1s);
        &.fade{opacity: .3;}
        &.normal{opacity:1;}
      }
    }
    &:nth-child(1){
      .title{.fc(var(--font-normal));}
    }
    &:nth-child(2){
      .title{.fc(var(--font-normal));}
    }
  }
}

.theme-blue{}
.theme-green{.iconList{img{filter:hue-rotate(-35deg);}}}
.theme-dark{.iconList{img{filter:saturate(60%);}}}
</style>
