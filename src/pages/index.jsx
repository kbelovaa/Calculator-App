import React from 'react';
import ReactDOM from 'react-dom/client';
import AppConnect from 'Components/AppConnect';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'Store';
import theme from 'Constants/themeColors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppConnect />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
