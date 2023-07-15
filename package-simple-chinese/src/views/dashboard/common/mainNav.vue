<template>
  <div class="nav-wraper">

    <ul class="main-nav">
      <li class="item" v-for="(item,index) in navList" @click="showSubNav(item,index)">
        <i :class="'icon '+item.icon"></i>
        <span class="desc">{{item.title}}</span>
      </li>
    </ul>
    <div class="sub-nav" v-if="navList[navCurrent].children && navShow">
      <i class="fal fa-times close-nav" @click="hideSubNav"></i>
      <div class="sub-nav-inner">
        <div class="item1st" v-for="(item1st,i1st) in navList[navCurrent].children">
          <div class="desc desc1st"><i :class="item1st.icon"></i> {{item1st.title}}</div>
          <div class="item2nd" v-for="(item2nd,i2nd) in item1st.children" v-if="item1st.children">
            <div class="desc desc2nd" :class="item2nd.link?'link':''" @click="navTo(item2nd)">
              {{item2nd.title}}
              <span class="new" v-if="item2nd.new">New</span>  
              <span class="hot" v-if="item2nd.hot">Hot</span>  
              <span class="beta" v-if="item2nd.beta">beta</span>  
            </div>
            <div class="item3rd" v-for="(item3rd,i3rd) in item2nd.children" v-if="item2nd.children">
              <div class="desc desc3rd" @click="navTo(item3rd)">
                {{item3rd.title}}
                <span class="new" v-if="item3rd.new">New</span>  
                <span class="hot" v-if="item3rd.hot">Hot</span>  
                <span class="beta" v-if="item3rd.beta">Beta</span>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "navcomp",
  mixins: [],
  components: {},
  //props: ['boxStyle'],
  data() {
    return {
      navShow:false,
      navCurrent:0,
      navList:[
        {title:"总览",label:"total",icon:"fal fa-house-user",router:"/home"},
        {title:"监管监察",label:"total1",icon:"fal fa-chart-column",children:[
          {title:"基础管理子系统",icon:"fal fa-light-emergency",children:[
            {title:"煤矿基础信息概况",children:[
              {title:"基础信息",router:"/dashboardA"}
            ]},
            {title:"安全生产信息查询",children:[
              {title:"基础信息查询",link:"http://a.com"},
              {title:"历史数据查看",link:"http://a.com"},
              {title:"矿井状况查看",link:"http://a.com"},
            ]},
            {title:"企业煤矿管理",link:"http://a.com"},
            {title:"煤矿监管人员信息",children:[
              {title:"人员信息填报",link:"http://a.com"},
              {title:"人员统计表",link:"http://a.com"},
              {title:"人员明细表",link:"http://a.com"},
            ]},
            {title:"通知管理",link:"http://a.com",hot:true},
          ]},
          {title:"监察业务系统",icon:"fal fa-chart-mixed",children:[
            {title:"监察执法子系统",children:[
              {title:"监察执法总览",router:"/dashboardB"},
              {title:"监察计划",link:"http://a.com",beta:true},
              {title:"执法查询",link:"http://a.com"},
              {title:"执法统计",link:"http://a.com"},
              {title:"执法知识库",link:"http://a.com"},
              {title:"系统管理",link:"http://a.com",beta:true},
            ]},
            {title:"执法监督子系统",children:[
              {title:"监管执法总览",router:"/dashboardC"},
              {title:"监察计划查询",link:"http://a.com"},
              {title:"事故信息",link:"http://a.com"},
              {title:"行政复议",link:"http://a.com"},
              {title:"量化评分",link:"http://a.com"},
              {title:"制度管理",link:"http://a.com",new:true},
            ]},
            {title:"安全核准子系统",children:[
              {title:"个人事项",link:"http://a.com"},
              {title:"全部业务",link:"http://a.com"},
              {title:"核准列表",link:"http://a.com",new:true},
              {title:"通知列表",link:"http://a.com"},
              {title:"统计分析",link:"http://a.com"},
            ]},
            {title:"设计审查子系统",children:[
              {title:"个人事项",link:"http://a.com"},
              {title:"全部业务",link:"http://a.com",beta:true},
              {title:"核准列表",link:"http://a.com"},
              {title:"通知列表",link:"http://a.com"},
              {title:"统计分析",link:"http://a.com"},
            ]},
            {title:"安全生产许可证子系统",link:"http://a.com"},
            {title:"退出煤矿管理子系统",link:"http://a.com"},
          ]},
          {title:"监管业务系统",icon:"fal fa-monitor-waveform",children:[
            {title:"监管执法子系统",children:[
              {title:"监管计划",link:"http://a.com"},
              {title:"执法查询",link:"http://a.com",hot:true},
              {title:"执法统计",link:"http://a.com"},
            ]},
            {title:"安全生产标准化子系统",children:[
              {title:"等级申报管理",link:"http://a.com"},
              {title:"检查考核",link:"http://a.com"},
              {title:"公示公告",link:"http://a.com",new:true},
              {title:"隐患分析",link:"http://a.com"},
              {title:"动态管理",link:"http://a.com"},
            ]},
            {title:"生产能力核定子系统",link:"http://a.com"},
          ]}
        ]},
        {title:"监测预警",label:"total1",icon:"fal fa-square-bolt",children:[
          {title:"基础管理子系统",icon:"fal fa-light-emergency",children:[
            {title:"煤矿基础信息概况",children:[
              {title:"基础信息",link:"http://a.com"}
            ]},
            {title:"通知管理",link:"http://a.com",hot:true},
          ]},
          {title:"监察业务系统",icon:"fal fa-chart-mixed",children:[
            {title:"监察执法子系统",children:[
              {title:"监察执法总览",link:"http://a.com"},
              {title:"监察计划",link:"http://a.com",beta:true},
              {title:"执法查询",link:"http://a.com"},
              {title:"执法统计",link:"http://a.com"},
            ]},
            {title:"执法监督子系统",children:[
              {title:"监管执法总览",link:"http://a.com"},
              {title:"监察计划查询",link:"http://a.com"},
              {title:"事故信息",link:"http://a.com"},
              {title:"行政复议",link:"http://a.com"},
            ]},
            {title:"安全生产许可证子系统",link:"http://a.com"},
            {title:"退出煤矿管理子系统",link:"http://a.com"},
          ]},
          {title:"监管业务系统",icon:"fal fa-monitor-waveform",children:[
            {title:"监管执法子系统",children:[
              {title:"监管计划",link:"http://a.com"},
              {title:"执法查询",link:"http://a.com",hot:true},
              {title:"执法统计",link:"http://a.com"},
            ]},
            {title:"生产能力核定子系统",link:"http://a.com"},
          ]}
        ]},
        {title:"政务管理",label:"total1",icon:"fal fa-landmark",children:[
          
        ]},
        {title:"应急救援",label:"total1",icon:"fal fa-life-ring",children:[
          
        ]},
        {title:"决策支撑",label:"total1",icon:"fal fa-handshake",children:[
          
        ]}

      ],
    };
  },
  computed: {},
  methods: {
    showSubNav(item,index){
      if(item.children&&item.children.length>0){
        this.navCurrent=index;
        this.navShow=true;
      }
    },
    hideSubNav(){
      this.navCurrent=0
      this.navShow=false
    },
    navTo(item){
      if(item.router){
        this.navShow=false
        this.$router.push(item.router);
      }else if(item.link){
        this.navShow=false
        window.open(item.link)
      }
      
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="less">

.main-nav{.poa; left:50%; .fixc("x"); top:65px; z-index: 20;
  .item{display:inline-block; text-align: center; width: 90px; .fc(@cbr6); .ani; cursor: pointer;
    .icon{display:block; font-size: 30px; }
    .desc{display: block; padding:5px 0 0 0;}
    &:hover{.fc(@cbl3);}
  }
}

.sub-nav{.poa; .fullbox(130px); top:150px; .bgc(fade(@blm8,95%)); z-index: 20; .bd(@bll9,2px); .bdr(10px);
  .close-nav{.poa; right:20px; top:20px; font-size: 52px;  width: 60px; height: 60px; .bgc(fade(@bk,30%)); text-align: center; line-height: 60px; .bdr(5px); .fc(@orl5); cursor: pointer; .ani;
    &:hover{.bgc(@rel4);.fc(@wh);}
  }
  .sub-nav-inner{display:flex; .poa; left:50%; top:30px; .fixc("x");
    .desc{
      .new{.fc(@wh); .bgc(@cbm6); padding:0 5px;}
      .hot{.fc(@wh); .bgc(@rem6); padding:0 5px;}
      .beta{.fc(@wh); .bgc(@aqm6); padding:0 5px;}
    }
    .item1st{margin:0 0 0 80px; min-width: 400px; 
      .desc1st{.fc(@cbl6); font-size: 20px; .bdb(@cbl6); padding:20px 0; margin:0 0 20px 0;
        .fal{font-size: 32px; padding:0 10px 0 0;}
      }
    }
    .item2nd{margin:0 0 10px 0;
      .desc2nd{.fc(@cbl6); font-size: 18px; line-height: 2;  padding:0 5px;
        &.link{ cursor: pointer; display:inline-block;
          &:hover{.bgc(@cbl7); .fc(@wh);}
        }
      }
    }
    .item3rd{display: inline-block; padding:5px 10px 5px 0 ; min-width: 80px;
      .desc3rd{.fc(@cbl3);font-size: 16px; line-height: 1.5; cursor: pointer; padding:5px 10px;
        &:hover{.bgc(@cbl7); .fc(@wh);}
      }
    }
  }
}
</style>
