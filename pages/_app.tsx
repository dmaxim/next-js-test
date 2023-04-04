import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react';
import theme, { msTheme} from '../theme';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <MuiThemeProvider theme={theme} >
    <ThemeProvider theme={msTheme}>
      <Component {...pageProps} />
    </ThemeProvider>    
    

  </MuiThemeProvider>
  )
}
