import { radiusVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';
import { pastelVars } from '../../styles/themes/color.css.ts';

export const base = style({
  padding: 15,
  gap: 4,
  width: 290,
  borderRadius: radiusVars.smooth,
  cursor: 'pointer',
  transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',
  ':hover': {
    opacity: 0.9,
  },
  ':active': {
    transform: 'translateY(5px)',
  },
});

export const pink = style({
  background: pastelVars.surface.pink,
  boxShadow: `0px 5px 0px 0px ${pastelVars.shadow.pink}`,
});

export const blue = style({
  background: pastelVars.surface.blue,
  boxShadow: `0px 5px 0px 0px ${pastelVars.shadow.blue}`,
});

export const green = style({
  background: pastelVars.surface.green,
  boxShadow: `0px 5px 0px 0px ${pastelVars.shadow.green}`,
});

export const yellow = style({
  background: pastelVars.surface.yellow,
  boxShadow: `0px 5px 0px 0px ${pastelVars.shadow.yellow}`,
});

export const from = style({
  opacity: 0.8,
  userSelect: 'none',
});

export const content = style({
  cursor: 'text',
});
