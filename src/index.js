import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
const dev = false;

import configureStore from './store/configureStore'
import App from './containers/App'
const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
if(dev){
    module.hot.accept();
}
