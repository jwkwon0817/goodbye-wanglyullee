import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const pastelVars = createGlobalThemeContract({
  pink: 'pastel-pink',
  blue: 'pastel-blue',
  green: 'pastel-green',
  yellow: 'pastel-yellow',
});

createGlobalTheme(':root', pastelVars, {
  pink: '#F54C7C',
  blue: '#376BE7',
  green: '#2DDA67',
  yellow: '#EFBB00',
});
