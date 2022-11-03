import {Colors as RNEColors, darkColors, lightColors} from '@rneui/themed';

const greens: Partial<RNEColors> = {
  green: '#109b56',
  green1: '#129b56',
  green2: '#36a668',
  green3: '#39d787',
  green4: '#39d787',
  green5: '#1ED66C',
};

export const Colors: {dark: RNEColors; light: RNEColors} = {
  dark: {
    ...darkColors,
    ...greens,
  },
  light: {
    ...lightColors,
    ...greens,
    primary: '#5e8fd7',
    error: '#fe5465',
  },
};

declare module '@rneui/themed' {
  export interface Colors {
    green: string;
    green1: string;
    green2: string;
    green3: string;
    green4: string;
    green5: string;
  }
}
