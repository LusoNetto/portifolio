import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { BrowserRouter } from 'react-router';
import { Leva } from 'leva';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Leva />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
