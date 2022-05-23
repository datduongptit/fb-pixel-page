import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/index.scss';
import 'bootstrap/scss/bootstrap.scss';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fafafa;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require('bootstrap/dist/js/bootstrap');
    }
    // Run useEffect only once
    // Read https://css-tricks.com/run-useeffect-only-once/
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
