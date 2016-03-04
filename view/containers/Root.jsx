import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux';


export default ({ store, renderProps }) =>
    <Provider store={ store }>
        <Router { ...renderProps } />
    </Provider>

