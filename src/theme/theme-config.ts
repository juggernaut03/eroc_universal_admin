import type { CommonColors } from '@mui/material/styles';

import type { ThemeCssVariables } from './types';
import type { PaletteColorNoChannels } from './core/palette';

// ----------------------------------------------------------------------

type ThemeConfig = {
  classesPrefix: string;
  cssVariables: ThemeCssVariables;
  fontFamily: Record<'primary' | 'secondary', string>;
  palette: Record<
    'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error',
    PaletteColorNoChannels
  > & {
    common: Pick<CommonColors, 'black' | 'white'>;
    grey: Record<
      '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
      string
    >;
  };
};

export const themeConfig: ThemeConfig = {
  /** **************************************
   * Base
   *************************************** */
  classesPrefix: 'minimal',
  /** **************************************
   * Typography
   *************************************** */
  fontFamily: {
    primary: 'DM Sans Variable',
    secondary: 'Barlow',
  },
  /** **************************************
   * Palette
   *************************************** */
  // Brand colors taken from the JustPress website
  palette: {
    // JustPress navy (logo, footer, active tabs)
    primary: {
      lighter: '#E1EAF4',
      light: '#4A7DB5',
      main: '#184E85',
      dark: '#0F3A66',
      darker: '#012B3D',
      contrastText: '#FFFFFF',
    },
    // JustPress crimson ("See All" buttons, accent icons)
    secondary: {
      lighter: '#FFF0F2',
      light: '#E11D48',
      main: '#A41743',
      dark: '#7E0F33',
      darker: '#4F0720',
      contrastText: '#FFFFFF',
    },
    // JustPress bright blue ("Explore" buttons, badges)
    info: {
      lighter: '#EFF6FF',
      light: '#749AF4',
      main: '#2463EB',
      dark: '#1D4ED8',
      darker: '#1E3A8A',
      contrastText: '#FFFFFF',
    },
    success: {
      lighter: '#D3FCD2',
      light: '#77ED8B',
      main: '#22C55E',
      dark: '#118D57',
      darker: '#065E49',
      contrastText: '#ffffff',
    },
    warning: {
      lighter: '#FFF5CC',
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#1C252E',
    },
    error: {
      lighter: '#FFE9D5',
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
      darker: '#7A0916',
      contrastText: '#FFFFFF',
    },
    // Cool slate greys matching the website (text #0F172A, borders #DDE1E9)
    grey: {
      '50': '#FAFBFD',
      '100': '#F4F7FB',
      '200': '#E9EEF5',
      '300': '#DDE1E9',
      '400': '#C2CAD6',
      '500': '#94A3B8',
      '600': '#64748B',
      '700': '#475569',
      '800': '#0F172A',
      '900': '#020617',
    },
    common: { black: '#000000', white: '#FFFFFF' },
  },
  /** **************************************
   * Css variables
   *************************************** */
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data-color-scheme',
  },
};
