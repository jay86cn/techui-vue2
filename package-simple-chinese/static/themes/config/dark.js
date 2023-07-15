import {$c} from "ayin-color"
const {fade,hslh,hsls,hsll,scale,darken,lighten}=$c
const theme = {//---------------------------------------------dark
  button: {
    bd: fade('cbd7',.8),
    bg: fade('bld8',.8),
    bd_hov: fade('cbd6',.7),
    bg_hov: fade('bld7',.7),
    bd_act: fade('cbd6',.9),
    bg_act: fade('bld7',.9),
    bd_dis: fade('cbd7',.3),
    bg_dis: fade('bld7',.3),
    deco_A:$c.cbl7,
    deco_B:$c.cyl5,
    glow:$c.cbr4
  },
  font: {
    stronger: $c.wh,
    strong: $c.cbr2,
    normal: $c.cbr4,
    weak: $c.cbd7,
    weaker: $c.cbd8,

    stronger_alt: $c.cyl1,
    strong_alt: $c.cyl2,
    normal_alt: $c.cyl4,
    weak_alt: $c.cym6,
    weaker_alt: $c.cyr8
  },
  tech: {
    bg: $c.blF18,
    bd: $c.hsll("bld9",.3),
    deco_A: $c.cbl8,
    deco_B: $c.cyl8,
    glow: $c.cyl5,
    
    panelTitle_deco: $c.blr8,
    systemTitle_BG: $c.hsll("bld8",.15),
    systemTitle_deco_A: $c.bld7,
    systemTitle_deco_B: $c.bld5,
    systemTitle_FC_A: $c.wh,
    systemTitle_FC_B: $c.bld6,
    
    vectorBG_A: $c.blF17,
    vectorBG_B: $c.blF19,
    vectorBG_C: $c.bk,
    vectorBG_X: $c.bll7,
    vectorBG_X_op:0.1,
    vectorBG_A_pos:"10%",
    vectorBG_B_pos:"50%",
    vectorBG_C_pos:"100%",
    vectorRG_pos:"bottom"
    // vectorBG_D: $c.rel5
    // deco_C: $c.aql5,
  },
  chart: {
    mapBG_A: $c.bld7,
    mapBG_B: $c.bld8,
    mapBG_hov_A: $c.bld6,
    mapBG_hov_B: $c.bld7,
    mapBD_A: $c.bld6,
    mapBD_B: $c.bld7,
    mapGlow: $c.bld9,
    line_AX: fade("bld7",.7),
    line_SP: fade("bld8",.5),
    visual: [$c.fade("cbr7",.7),$c.fade("bld9",.7)],
    palette_A: [$c.aqr5,$c.cyr5,$c.bll7],
    palette_B: [$c.vrr5,$c.yed3,$c.aqd5,$c.blm7]
  },
  popup: {
    bd: fade('blr8',.9),
    bg: fade('bld9',.9),
    bd_light: fade('blr8',.6),
    bg_light: fade('bld8',.9),
    bg_blur: fade('cyF17',.5),
    glow: fade('bll7',.5),
    mask:fade('blr9',.7)
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
    thumb: $c.blF15,
    track: $c.blF19
  },
}
export default theme
