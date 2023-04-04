import { createTheme } from '@mui/material/styles';

export interface EmotionTheme {
  msPalette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      darkest: string;
      inactiveTab: string;
      contrastText: string;
    };
    tertiary: {
      main: string;
      light: string;
      lightest: string;
      highlight: string;
      dark: string;
      contrastText: string;
    };
    error: {
      main: string;
      light: string;
      contrastText: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    caution: {
      main: string;
      light: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
      hint: string;
    };
    allocations: {
      used: string;
      available: string;
      currentMonth: string;
      future: string;
      borderDark: string;
      borderLight: string;
    };
  };
  msTypography: {
    htmlFontSize: number;
    fontSize: number;
    fontFamily: string;
    h1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    h2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    h3: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    h4: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    h5: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    h6: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    subtitle1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    subtitle2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    body1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    body2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    button: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    caption: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
    overline: {
      fontFamily: string;
      fontWeight: number;
      fontSize: number;
    };
  };
  breakpoints: {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
  titleFont: string;
  bodyFont: string;
  container: string;
  card: string;
  tooltipHover: string;
}

// NOTE: theme has to be optional otherwise the
// styled component is looking for it as a prop inside the component
// you then need to optional chain like so
// EX: props.theme?.etc
export interface EmotionThemeOnlyProps {
  theme?: EmotionTheme;
}

const titleFont = '"Roboto Condensed", sans-serif';
const bodyFont = '"Roboto", sans-serif';

// Breakpoints:
// 1081
// 850
// 620
// 450

const msPalette = {
  primary: {
    main: '#216299',
    light: '#007EC8',
    dark: '#1B4E7A',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#EDF2F6',
    light: '#F8F9FB',
    dark: '#D3DCE5',
    darkest: '#7D92AB',
    inactiveTab: '#636363',
    contrastText: '#216299',
  },
  tertiary: {
    main: '#102338',
    light: '#152D49',
    lightest: '#216299',
    highlight: '#65ACE9',
    dark: '#08111A',
    contrastText: '#CDD6DF',
  },
  error: {
    main: '#D90000',
    light: '#FFF5F5',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#81DB00',
    light: '#00BBF1',
    dark: '#D90000',
    contrastText: '#FFFFFF',
  },
  caution: {
    main: '#B26B00',
    light: '#FEF6DC',
  },
  info: {
    main: '#5E5E5E',
    light: '#CFD3D4',
    dark: '#97999B',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#11243A',
    light: '#0E1821',
    dark: '#000000',
    contrastText: '#FFFFFF',
  },
  text: {
    primary: '#000000',
    secondary: '#216299',
    contrastText: '#FFFFFF',
    hint: '#5E5E5E',
  },
  allocations: {
    used: '#34c590',
    available: '#7fe6c0',
    currentMonth: '#bde4dd',
    future: '#e2e9ef',
    borderDark: '#69bf9f',
    borderLight: '#d2d9df',
  },
};

const msTypography = {
  htmlFontSize: 14,
  fontSize: 14,
  fontFamily: bodyFont,
  h1: {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 32,
  },
  h2: {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 24,
  },
  h3: {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 18,
  },
  h4: {
    fontFamily: bodyFont,
    fontWeight: 700,
    fontSize: 20,
  },
  h5: {
    fontFamily: bodyFont,
    fontWeight: 400,
    fontSize: 16,
  },
  h6: {
    fontFamily: bodyFont,
    fontWeight: 400,
    fontSize: 11,
  },
  subtitle1: {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 13,
  },
  subtitle2: {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 11,
  },
  body1: {
    fontFamily: bodyFont,
    fontWeight: 400,
    fontSize: 14,
  },
  body2: {
    fontFamily: bodyFont,
    fontWeight: 400,
    fontSize: 12,
  },
  button: {
    fontFamily: bodyFont,
    fontWeight: 700,
    fontSize: 13,
  },
  caption: {
    fontFamily: bodyFont,
    fontWeight: 400,
    fontSize: 9,
  },
  overline: {
    fontFamily: titleFont,
    fontWeight: 400,
    fontSize: 9,
  },
};

const breakpoints = {
  xl: 1081,
  lg: 850,
  md: 620,
  sm: 450,
  xs: 250,
};

export const msTheme: EmotionTheme = {
  msPalette,
  msTypography,
  breakpoints,
  titleFont,
  bodyFont,
  container: `
    width: 100%;
    max-width: 1110px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 850px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media (max-width: 620px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  `,
  card: `
    background: white;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.09);
    border: 1px solid rgba(0, 0, 0, 0.08);
  `,
  tooltipHover: `
    &:hover {
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
    }
  `,
};

const muiTheme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  palette: msPalette,
  typography: msTypography,
  shadows: Array(25).fill('none') as [
    'none',
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ],
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          textTransform: 'uppercase',
        },
        h2: {
          textTransform: 'uppercase',
        },
        h3: {
          textTransform: 'uppercase',
        },
        h4: {
          textTransform: 'uppercase',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: '999999 !important',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: msPalette.primary.main,
        },
        indicator: {
          backgroundColor: msPalette.success.light,
          height: '4px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '18px 15px',
          minWidth: '0 !important',
          width: 'auto',
          color: msPalette.primary.contrastText,
          opacity: 1,
          ...msTypography.body2,
          '&.Mui-selected': {
            fontWeight: 700,
            color: msPalette.primary.contrastText,
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          color: msPalette.info.main,
          textDecoration: 'none',
          ...msTypography.overline,
        },
        separator: {
          fontSize: 11,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: msPalette.warning.main,
          margin: '0 !important',
        },
        popper: {
          zIndex: 99999,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '4px',
          maxWidth: '5px',
          backgroundColor: '#FFFFFF00',
          display: 'block',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#FFFFFF00',
        },
        '*:hover': {
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: msPalette.secondary.dark,
            display: 'block',
          },
        },
        '*::-webkit-scrollbar-thumb:window-inactive': {
          backgroundColor: 'transparent',
          display: 'none',
        },
      },
    },
  },
});
export default muiTheme;