import {style} from "@vanilla-extract/css";
import {radiusVars} from "@tapie-kr/inspire-react";
import {pastelVars} from "../../styles/themes/color.css.ts";

export const base = style({
    padding: 15,
    gap: 4,
    width: 290,
    borderRadius: radiusVars.smooth,
})

export const pink = style({
    background: pastelVars.pink,
    boxShadow: `0px 5px 0px 0px ${pastelVars.pink}`,
})

export const blue = style({
    background: pastelVars.blue,
    boxShadow: `0px 5px 0px 0px ${pastelVars.blue}`,
})

export const green = style({
    background: pastelVars.green,
    boxShadow: `0px 5px 0px 0px ${pastelVars.green}`,
})

export const yellow = style({
    background: pastelVars.yellow,
    boxShadow: `0px 5px 0px 0px ${pastelVars.yellow}`,
})

export const from = style({
    opacity: 0.8
})