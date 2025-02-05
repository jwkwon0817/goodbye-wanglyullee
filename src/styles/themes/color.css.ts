import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const pastelVars = createGlobalThemeContract({
  surface: {
    pink: 'pastel-pink',
    blue: 'pastel-blue',
    green: 'pastel-green',
    yellow: 'pastel-yellow',
  },
  shadow: {
    pink: 'pastel-pink-shadow',
    blue: 'pastel-blue-shadow',
    green: 'pastel-green-shadow',
    yellow: 'pastel-yellow-shadow',
  },
});

createGlobalTheme(':root', pastelVars, {
  surface: {
    pink: '#F54C7C',
    blue: '#376BE7',
    green: '#2DDA67',
    yellow: '#EFBB00',
  },
  shadow: {
    pink: '#D53361',
    blue: '#305DCA',
    green: '#2EC661',
    yellow: '#C8A834',
  },
});
