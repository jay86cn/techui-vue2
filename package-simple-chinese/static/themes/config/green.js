import {$c} from "ayin-color"
const {fade,hslh,hsls,hsll,scale,darken,lighten}=$c
const theme = {//---------------------------------------------green
  button: {
    bd: fade('acl8',.8),
    bg: fade('cbr8',.8),
    bd_hov: fade('acl7',.7),
    bg_hov: fade('cbl7',.7),
    bd_act: fade('acl7',.9),
    bg_act: fade('cbl7',.9),
    bd_dis: fade('acd7',.5),
    bg_dis: fade('cbd7',.5),
    deco_A:$c.aql6,
    deco_B:$c.cyl5,
    glow:$c.acl6
  },
  font: {
    stronger: $c.wh,
    strong: $c.acl2,
    normal: $c.acl4,
    weak: $c.acr7,
    weaker: $c.acm8,

    stronger_alt: $c.cyl1,
    strong_alt: $c.cyl2,
    normal_alt: $c.cyl4,
    weak_alt: $c.cym6,
    weaker_alt: $c.cyr8
  },
  tech: {
    bg: $c.cbD18,
    bd: $c.cyA15,
    deco_A: $c.aql6,
    deco_B: $c.cyl7,
    glow: $c.cyl5,
    
    panelTitle_deco: $c.acA15,
    systemTitle_BG: $c.cyB18,
    systemTitle_deco_A: $c.acB16,
    systemTitle_deco_B: $c.acA13,
    systemTitle_FC_A: $c.cyA08,
    systemTitle_FC_B: $c.acA15,
    vectorBG_A: $c.cyD17,
    vectorBG_B: $c.acD19,
    vectorBG_C: $c.acF19,
    vectorBG_X: $c.bll7,
    vectorBG_X_op:0.15,
    vectorBG_A_pos:"10%",
    vectorBG_B_pos:"50%",
    vectorBG_C_pos:"100%",
    vectorRG_pos:"bottom"
    // deco_C: $c.aql5,
  },
  chart: {
    mapBG_A: $c.cyA15,
    mapBG_B: $c.cyD18,
    mapBG_hov_A: $c.acl7,
    mapBG_hov_B: $c.acl8,
    mapBD_A: $c.acA10,
    mapBD_B: $c.acA15,
    mapGlow: $c.cyA18,
    line_AX: $c.acl8,
    line_SP: $c.acl9,
    visual: [$c.fade("cyA13",.7),$c.fade("acA19",.7)],
    palette_A: [$c.yel3,$c.aql4,$c.cyl4,$c.bll6],
    palette_B: [$c.vrl4,$c.yel3,$c.aql4,$c.cyl4,$c.bll6]
  },
  popup: {
    bd: fade('cyl8',.9),
    bg: fade('cbr9',.9),
    bd_light: fade('cyl8',.6),
    bg_light: fade('cyd8',.7),
    bg_blur: fade('cyd9',.5),
    glow: fade('acl7',.5),
    mask:fade('cbr9',.7)
  },
  auxilary:{
    success_FC:$c.acl4,
    success_BD:fade('acl8',.8),
    success_BG:fade('cbr9',.9),
    success_FC_light:$c.acl2,
    success_BD_light:fade('acl7',.7),
    success_BG_light:fade('acl7',.9),

    warning_FC:$c.yer5,
    warning_BD:fade('yem5',.5),
    warning_BG:fade('yed9',.8),
    warning_FC_light:$c.yel2,
    warning_BD_light:fade('yem4',.5),
    warning_BG_light:fade('yem3',.4),

    danger_FC:$c.rer4,
    danger_BD:fade("rel5",.5),
    danger_BG:fade("red9",.8),
    danger_FC_light:$c.rel2,
    danger_BD_light:fade("rel4",.5),
    danger_BG_light:fade("rel3",.4),

    info_FC:$c.cbl4,
    info_BD:fade('bll7',.7),
    info_BG:fade('bll9',.9),
    info_FC_light:$c.cbl2,
    info_BD_light:fade('cbl6',.7),
    info_BG_light:fade('cbl7',.7),
  },
  scroll:{
    thumb: $c.acA15,
    track: $c.acA19
  },
}
export default theme
