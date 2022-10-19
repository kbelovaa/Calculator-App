import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from 'Components/Layout';
import Calculator from 'Components/Calculator';
import Settings from 'Components/Settings';
import Context from 'Utils/context';
import { AppWrapper, GlobalStyle } from './styled';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Context.Provider
        value={{
          onShowHistory: this.props.onShowHistory,
          onGetTheme: this.props.onGetTheme,
          onAddExpression: this.props.onAddExpression,
          onClearExpressions: this.props.onClearExpressions,
        }}
      >
        <AppWrapper selectedTheme={this.props.onGetTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Calculator />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </AppWrapper>
      </Context.Provider>
    );
  }
}

App.propTypes = {
  onShowHistory: PropTypes.array,
  onGetTheme: PropTypes.string,
  onAddExpression: PropTypes.func,
  onClearExpressions: PropTypes.func,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
