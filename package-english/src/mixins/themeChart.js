
export default {
  props:{},
  data(){
    return {
      oriColors:[],
      mapColorOri:[$c.bll7,$c.bll9,$c.cbl6,$c.bll8,$c.cbl3,$c.cbl5,$c.cbl7]
    }
  },
  computed:{
    
    
  },
  watch:{
    // "globalConfig.theme"(val){
    //   this.themeInit()
    // },
    "globalConfig.theme"(val){
      this.$nextTick(()=>{
        this.themeInit()
      })
    },
  },
  methods:{
    getPalette(op){
      if(!op.palette){
        op.palette=this.themePalette.chart.palette_A
      }else if(op.palette=="alt"){
        op.palette=this.themePalette.chart.palette_B
      }
      return this.colorPicker(op)
    },
    themeInit(){
      const {chartTheme}=this
      if(chartTheme){
        chartTheme()
      }
      this.$nextTick(()=>{
        const {processOption}=this
        if(processOption){
          this.processOption()
        }
        this.chartOption.update=true;
      })
    },
    getColor(val){//改造charttheme，生成一个全局的chart 配色工具
      let {chart,font,tech}=this.themePalette
      switch(val){
        case "mapBGA":
          return chart.mapBG_A
          break;
        case "mapBGB":
          return chart.mapBG_B
          break;
        case "mapBGHA":
          return chart.mapBG_hov_A
          break;
        case "mapBGHB":
          return chart.mapBG_hov_B
          break;
        case "mapBDA":
          return chart.mapBD_A
          break;
        case "mapBDB":
          return chart.mapBD_B
          break;
        case "mapSD":
          return chart.mapGlow
          break;
        case "staFC":
          return font.normal
          break;
        case "staFCS":
          return font.strong
          break;
        case "staFCW":
          return font.weak
          break;
        case "staFCSr":
          return font.stronger
          break;
        case "staFCWr":
          return font.weaker
          break;
        case "actFC":
          return font.normal
          break;
        case "actFCS":
          return font.strong
          break;
        case "lineAX":
          return chart.line_AX
          break;
        case "lineSP":
          return chart.line_SP
          break;
        case "techBG":
          return tech.bg
          break;
        case "techDecoA":
          return tech.deco_A
          break;
        case "techDecoB":
          return tech.deco_B
          break;
        default:
          console.log("getColor Val",val);
          return $c.rel5
      }
    },
    saveOldColor(){
      const {chartTheme,chartData}=this
      if(chartData&&chartData.colors){
        this.oriColors=JSON.parse(JSON.stringify(chartData.colors));
      }else if(chartData&&chartData.length>1){
        this.oriColors=JSON.parse(JSON.stringify(chartData[0].colors));
      }
    }
  },
  mounted() {
    const {chartTheme}=this
    this.saveOldColor();
    if(chartTheme){
      chartTheme()
    }
  },
}