import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import * as serviceWorker from './serviceWorker'

require('./styles/index.css')

declare let module: { hot: any }

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').App
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
