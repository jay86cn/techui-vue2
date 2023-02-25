<template>
    <div class="border-demo" :style="svgBG1">  
      <!-- :class="ct" -->
      <template v-if="pageConfig.ani.current=='aniOn'">
        <silkWaveBG v-if="theme=='blue'"></silkWaveBG>
        <blurLineBG v-if="theme=='green'"></blurLineBG>
        <starTravelBG v-if="theme=='dark'"></starTravelBG>
      </template>
      <div class="border-toggle">
        <el-radio-group v-for="(radioG,index) in pageConfig" :key="index" v-model="radioG.current" size="mini">
          <el-radio-button :label="item.label" :key="item.label" v-for="item in radioG.children">{{item.title}}</el-radio-button>
        </el-radio-group>
        
      </div>
      <div class="border-wrap" v-if="show">
        <!-- ayin border -->
        <div class="border-group" v-for="(item,index) in aYinBorders">
          <div class="group-name">
            <span class="title">{{item.name}}</span>
            <span class="subTitle" v-if="!dhccMode">{{item.subTitle}}</span>
            <span class="desc">{{item.desc}}</span> 
          </div>
          <div class="group-content">
            <div :class="`border-item border-${pageConfig.height.current}`" v-for="itemB in item.children">
              <component :is='itemB.border' :config="itemB.config" :update="update">
                <div class="border-name" v-if="pageConfig.config.current=='cfgOn'">{{itemB}}</div>
              </component>
            </div>
          </div>
        </div>
        
      </div>
    </div>
</template>
<script>

export default {
  name: "blockCenter",
  mixins: [],
  components: {
    blurLineBG:() => import('./blurLineBG'),
    starTravelBG:() => import('./starTravelBG'),
    silkWaveBG:() => import('./silkWaveBG'),
  },
  data() {
    return {
      show:false,
      update:0,
      dhccMode:true,
      pageTheme:{
        colorBL:[
          $c.blr9,
          $c.cbl5,
          $c.cbl6,
          $c.cbl8,
          $c.bll9,
          $c.bll8,
          $c.bll7
        ],
      },
      aYinBorders:[],
      pageConfig:{
        col:{current:4,children:[
          {title: "Three col", label: 3},
          {title: "Four col", label: 4},
        ]},
        height: {current: "short", children: [
          {title: "High", label: "high"},
          {title: "Short", label: "short"},
        ]},
        ani:{current:"aniOn",children:[
          {title: "Ani On", label: "aniOn"},
          {title: "Ani Off", label: "aniOff"},
        ]},
        config:{current:"cfgOn",children:[
          {title: "Config On", label: "cfgOn"},
          {title: "Config Off", label: "cfgOff"},
        ]}
      }
    };
  },
  computed: {
   tipState(){
    return this.$vuex.state.globalConfig.tip
   },
   theme(){
    return this.$vuex.state.globalConfig.theme
   },
  },
  watch:{
    
  },
  methods: {
    
    initBorderConfig(){
      let borders=[
        //---------------- ayin tech border 
        {name:"aYin Tech Border",subTitle:"Design&Dev By aYin",desc:"Inspired by @jiaminghi/data-view open source components, the following technological borders are designed and developed. The theme of the border is switched in conjunction with the global theme, and can be switched through the control panel button in the upper right corner.",children:[
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:100,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            directionAlt:true
          }},
          
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            decorationColor:[$c.bll3,$c.rel5],
            titleColor:$c.rel2,
            title:"No.1",
          }},

          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
          }},

          {border:"aYinTechBorderB1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},

          {border:"aYinTechBorderB2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
            dur:3
          }},
          {border:"aYinTechBorderB3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderB4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderB5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
        ]},
        
        // ---------------- aYinTechBorderA1 
        {name:"aYinTechBorderA1",children:[
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            rotate:'x',
            decorationAlt:true
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            rotate:'y',
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            rotate:'z',
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5
            title:"Block Title",
            titleWidth:100,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Test Long Title",
            decorationAlt:true,
            rotate:'x'
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Test Long Long Long Title",
            titleWidth:190,
            decorationAlt:true,
            rotate:'y'
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:100,
            rotate:'z'
          }},
          
        //---------------- aYinTechBorderA1 directionAlt
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            directionAlt:true,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            directionAlt:true,
            rotate:'x'
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            directionAlt:true,
            rotate:'y'
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            directionAlt:true,
            rotate:'z'
          }},
        //---------------- aYinTechBorderA1 directionAlt hasTitle
        {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:100,
            directionAlt:true,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Test Long Title",
            decorationAlt:true,
            directionAlt:true,
            rotate:'x'
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Test Long Long Long Title",
            titleWidth:190,
            decorationAlt:true,
            directionAlt:true,
            rotate:'y'
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:100,
            directionAlt:true,
            rotate:'z'
          }},


        //---------------- aYinTechBorderA1 other
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // glowColor:$c.fade($c.cyl5,.3),
            borderWidth:3,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // glowColor:$c.fade($c.cyl5,.3),
            border:false,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.bll3,.3),
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:100,
            decoration:false,
            glow:true,
          }},
          {border:"aYinTechBorderA1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            directionAlt:true,
            glow:true,
            glowRange:20
          }},
        ]},

        //---------------- aYinTechBorderA2
        {name:"aYinTechBorderA2",children:[
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            decorationColor:[$c.bll3,$c.orl3],
            // titleColor:$c.bll9,
            title:"壹号",
          }},
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            decorationColor:[$c.bll3,$c.cbl5],
            // titleColor:$c.bll9,
            title:"贰号",
            rotate:'x'
          }},
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            decorationColor:[$c.bll3,$c.rel4],
            // titleColor:$c.bll9,
            title:"No.1",
            rotate:'y'
          }},
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.bll9,
            title:"No.15",
            rotate:'z'
          }},
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.bll9,
            borderWidth:3,
            title:"No.15",
          }},
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.bll9,
            border:false,
            decoration:false,
            title:"No.15",
          }},
          {border:"aYinTechBorderA2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.bll9,
            glow:true,
            title:"No.15",
          }},
        ]},

        //---------------- aYinTechBorderA3
        {name:"aYinTechBorderA3",children:[
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            decorationAlt:true
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            rotate:'x'
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            rotate:'y'
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            decoration:false,
            decorationAlt:true,
            rotate:'z'
          }},
          
          //---------------- aYinTechBorderA3 directionAlt
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            directionAlt:true,
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            directionAlt:true,
            rotate:'y'
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            decoration:false,
            directionAlt:true,
            decorationAlt:true,
            rotate:'x'
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            titleWidth:80,
            directionAlt:true,
            rotate:'z'
          }},

          
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.cyl5,
            borderWidth:3,
            title:"Block Title",
            titleWidth:80,
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.cyl5,
            border:false,
            title:"Block Title",
            titleWidth:80,
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.cyl5,
            glow:true,
            title:"Block Title",
            titleWidth:80,
            decoration:false,
          }},
          {border:"aYinTechBorderA3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            // titleColor:$c.cyl5,
            glow:true,
            title:"Block Title",
            titleWidth:80,
            decoration:false,
            directionAlt:true,
          }},
        ]},


        //---------------- aYinTechBorderB1 
        {name:"aYinTechBorderB1",children:[
          
          {border:"aYinTechBorderB1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderB1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"aYinTechBorderB1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"aYinTechBorderB1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            glow:true,
            decoration:false,
          }},
        ]},

        //---------------- aYinTechBorderB2
        {name:"aYinTechBorderB2",children:[
          {border:"aYinTechBorderB2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
            dur:3
          }},
          {border:"aYinTechBorderB2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
            rotate:'x',
            borderWidth:3,
            ani:false,
            bdFilter:true,
          }},
          
          {border:"aYinTechBorderB2",config:{
            // backgroundColor:$c.bll9,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false,
            dur:3
          }},
          {border:"aYinTechBorderB2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            decoration:false,
            glow:true,
            dur:3
          }},
        ]},

        //---------------- aYinTechBorderB3
        {name:"aYinTechBorderB3",children:[
          {border:"aYinTechBorderB3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderB3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            rotate:'x',
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"aYinTechBorderB3",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // border:false,
            rotate:'y',
            decoration:false,
            // decorationAlt:true
          }},
          {border:"aYinTechBorderB3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            // decoration:false
            rotate:'z',
            // glow:true,
            decorationAlt:true
          }},
        ]},

        //---------------- aYinTechBorderB4
        {name:"aYinTechBorderB4",children:[
          {border:"aYinTechBorderB4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderB4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"aYinTechBorderB4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"aYinTechBorderB4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            glow:true,
            decoration:false
          }},
        ]},

        //---------------- aYinTechBorderB5
        {name:"aYinTechBorderB5",children:[
          {border:"aYinTechBorderB5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"aYinTechBorderB5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:1,
            bdFilter:true,
          }},
          {border:"aYinTechBorderB5",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"aYinTechBorderB5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            decoration:false,
            glow:true,
            glowRange:13
          }},
        ]},
        
        //---------------- DataV Border Box 
        {name:"DataV Border Box",subTitle:"Mod By aYin",desc:"移植自@jiaminghi/data-view开源项目，二次开发修改了配置项以及部分外观效果。组件保留了原始命名规则，致敬作者!",children:[
          {border:"DVBorderBox1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            
            title:"Block Title",
          }},
          {border:"DVBorderBox2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            
          }},
          {border:"DVBorderBox3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            
          }},
          {border:"DVBorderBox4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.4),
            // decorationColor:[$c.bll3,$c.cyl5],
            
          }},
          {border:"DVBorderBox5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.4),
            // decorationColor:[$c.bll3,$c.cyl5],
            
          }},
          {border:"DVBorderBox6",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.4),
            // decorationColor:[$c.bll3,$c.aql5],
            
            dur:1,
          }},
          {border:"DVBorderBox7",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.4),
            // decorationColor:[$c.bll3,$c.cyl5],
            
            dur:1,
          }},
          {border:"DVBorderBox8",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.4),
            // decorationColor:[$c.bll3,$c.cyl5],
            
            dur:5,
          }},
        ]},
        //---------------- DVBorderBox1 
        {name:"DVBorderBox1",children:[
          {border:"DVBorderBox1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
          }},
          {border:"DVBorderBox1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            // borderWidth:3,
            title:"Block Title",
          }},
          {border:"DVBorderBox1",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            title:"Block Title",
            border:false
          }},
          {border:"DVBorderBox1",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            // titleColor:$c.cyl5,
            decoration:false,
            glow:true,
            titleWidth:250,
            title:"比较长的Block Title",
          }},
        ]},

        //---------------- DVBorderBox2
        {name:"DVBorderBox2",children:[
          {border:"DVBorderBox2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            
          }},
          {border:"DVBorderBox2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.1),
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3
          }},
          {border:"DVBorderBox2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"DVBorderBox2",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.1),
            // decorationColor:[$c.bll3,$c.aql5],
            glow:true,
          }},
        ]},

        //---------------- DVBorderBox3 
        {name:"DVBorderBox3",children:[
          {border:"DVBorderBox3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"DVBorderBox3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"DVBorderBox3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"DVBorderBox3",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.3),
            // decorationColor:[$c.bll3,$c.aql5],
            decoration:false,
            glow:true,
          }},
        ]},

        //---------------- DVBorderBox4 
        {name:"DVBorderBox4",children:[
          {border:"DVBorderBox4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"DVBorderBox4",config:{
            // backgroundColor:$c.bll9,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            // borderColor:$c.bll7,
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"DVBorderBox4",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"DVBorderBox4",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            glow:true,
            decoration:false
          }},
        ]},

        //---------------- DVBorderBox5
        {name:"DVBorderBox5",children:[
          {border:"DVBorderBox5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"DVBorderBox5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"DVBorderBox5",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"DVBorderBox5",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            glow:true,
            decoration:false
          }},
        ]},

        //---------------- DVBorderBox6
        {name:"DVBorderBox6",children:[
          {border:"DVBorderBox6",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.aql5],
          }},
          {border:"DVBorderBox6",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            borderWidth:3,
            bdFilter:true,
          }},
          {border:"DVBorderBox6",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.aql5],
            border:false
          }},
          {border:"DVBorderBox6",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.aql5],
            glow:true,
            dur:1,
          }},
        ]},


        //---------------- DVBorderBox7
        {name:"DVBorderBox7",children:[
          {border:"DVBorderBox7",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"DVBorderBox7",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3
          }},
          {border:"DVBorderBox7",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false
          }},
          {border:"DVBorderBox7",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            glow:true,
            decoration:false
          }},
        ]},


        //---------------- DVBorderBox8
        {name:"DVBorderBox8",children:[
          {border:"DVBorderBox8",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // decorationColor:[$c.bll3,$c.cyl5],
          }},
          {border:"DVBorderBox8",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            borderWidth:3,
            bdFilter:true,        
          }},
          {border:"DVBorderBox8",config:{
            // backgroundColor:$c.bll9,
            // decorationColor:[$c.bll3,$c.cyl5],
            border:false,
            reverse:true
          }},
          {border:"DVBorderBox8",config:{
            // backgroundColor:$c.bll9,
            // borderColor:$c.bll7,
            // glowColor:$c.fade($c.cyl5,.2),
            // decorationColor:[$c.bll3,$c.cyl5],
            glow:true,
            dur:3,
          }},
        ]},

      ]//borders list end

      borders.forEach((itemG,i)=>{
        itemG.children.forEach((item,j)=>{
          item.config.opacity=.7
        })
      })

      this.aYinBorders=borders
    }
  },
  mounted() {
    const {tipState,$notify}=this
    this.initBorderConfig()
    if(tipState){
      A("tis","notify1",()=>{
        $notify({
          title: 'Performance Tips',
          message: 'This page loads a large number of svg borders at the same time, and many borders have animation, blurred background, deformation and other effects, which may cause problems such as stuttering. This is a normal phenomenon. If you need a better access effect, please turn off the background animation. Or change to a computer with higher performance and try again. ',
          duration: 0
        });
      },3000)
      A("tis","notify2",()=>{
        $notify({
          title: 'Description of SVG Technology Border',
          message: 'All SVG technological borders support dynamic adaptation, dynamic skinning, and dynamic switching of configuration items. Configure the appearance, status, performance, animation, special effects, etc. of each border through configuration items. ',
          duration: 0
        });
      },4000)
    }
    this.$nextTick(()=>{
      this.show=true;
    })
  },
   beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify1")
    A("tic","notify2")
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.border-demo{ padding:10px 0; .bgc(var(--tech-svgBG_B)); .poa; .fullbox; 
  .border-toggle{.pof; top:0; left:50%; .fixc("x"); z-index: 10; .bd(var(--popup-bd)); .bgc(var(--popup-mask));  border-top: none; .bdr(0 0 10px 10px); padding:10px 5px; white-space: nowrap;
    .el-radio-group{margin:0 5px; 
      .el-radio-button{
        .el-radio-button__inner{.bgc(var(--button-bg)); .fc(var(--font-normal)); border-color:var(--tech-bd); box-shadow: -1px 0 0 0 var(--tech-bd);}
        &.is-active{
          .el-radio-button__inner{.bgc(var(--button-bg_act)); .fc(var(--font-strong)); border-color:var(--button-bd_act);}
        }
      }
    }
  }
  .border-wrap{  .poa; .fullbox; overflow: auto; padding:0 40px 40px 40px; z-index: 5;
    .border-group{
      .group-name{line-height: 2; .bdb(var(--tech-bd));  margin:40px 0; .thidden;
        span{padding: 0 10px 0 0;}
        .title{font-size: 32px; .fc(var(--font-normal));}
        .subTitle{font-size:12px;.fc(var(--font-weak));}
        .desc{font-size: 12; .fc(var(--font-weak));}
      }
      .group-content{ grid-gap: 40px;display: grid; 
        grid-template-columns: repeat(v-bind("pageConfig.col.current"), 1fr);
        .border-item{
          &.border-short{height:300px;}
          &.border-high{height:400px;}
          .border-name{.fc(var(--font-strong)); opacity: .2; padding:20px; .absoluteCenter; width: 300px; white-space: pre;}
        }
      }
    }
  }
}

</style>
