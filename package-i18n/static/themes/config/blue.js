import {$c} from "ayin-color"
const {fade,hslh,hsls,hsll,scale,darken,lighten}=$c
const theme = {//---------------------------------------------blue
  button: {
    bd: fade('cbl8',.8),
    bg: fade('bll8',.8),
    bd_hov: fade('cbl7',.7),
    bg_hov: fade('bll7',.7),
    bd_act: fade('cbl6',.9),
    bg_act: fade('bll6',.9),
    bd_dis: fade('cbd7',.6),
    bg_dis: fade('bld7',.6),
    deco_A:$c.cbl6,
    deco_B:$c.cyl5,
    glow:$c.cbl4
  },
  font: {
    stronger: $c.wh,
    strong: $c.cbl2,
    normal: $c.cbl4,
    weak: $c.cbm6,
    weaker: $c.cbr8,

    stronger_alt: $c.cyl1,
    strong_alt: $c.cyl2,
    normal_alt: $c.cyl4,
    weak_alt: $c.cym6,
    weaker_alt: $c.cyr8
  },
  tech: {
    bg: $c.bll9,
    bd: $c.bll7,
    deco_A: $c.cbl5,
    deco_B: $c.cyl5,
    glow: $c.cyl5,
    
    panelTitle_deco: $c.cbl5,
    systemTitle_BG: $c.blA16,
    systemTitle_deco_A: $c.bll7,
    systemTitle_deco_B: $c.cyl6,
    systemTitle_FC_A: $c.cyl3,
    systemTitle_FC_B: $c.cbl5,
    
    vectorBG_A: $c.blA17,
    vectorBG_B: $c.blA19,
    vectorBG_C: $c.bk,
    
    vectorBG_X: $c.bll7,
    vectorBG_X_op:0.15,
    vectorBG_A_pos:"10%",
    vectorBG_B_pos:"50%",
    vectorBG_C_pos:"100%",
    vectorRG_pos:"bottom"
    // vectorBG_D: $c.rel5
    // deco_C: $c.aql5,
  },
  chart: {
    mapBG_A: $c.blA13,
    mapBG_B: $c.blA18,
    mapBG_hov_A: $c.cbA10,
    mapBG_hov_B: $c.blA15,
    mapBD_A: $c.cbA12,
    mapBD_B: $c.cbA13,
    mapGlow: $c.cbl7,
    line_AX: $c.cbA15,
    line_SP: $c.blA17,
    visual: [$c.fade("cbA13",.7),$c.fade("blA19",.7)],
    palette_A: [$c.aql5,$c.cyl5,$c.bll5],
    palette_B: [$c.vrl4,$c.yel3,$c.aql4,$c.cyl4,$c.bll6]
  },
  popup: {
    bd: fade('cbl8',.9),
    bg: fade('bll9',.9),
    bd_light: fade('cbl8',.5),
    bg_light: fade('bll8',.9),
    bg_blur: fade('blm9',.7),
    glow: fade('cyl5',.4),
    mask:fade('blA19',.7)
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
    thumb: $c.blA15,
    track: $c.blA19
  },
}
export default theme
