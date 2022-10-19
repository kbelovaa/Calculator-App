import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'Components/Header';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}
