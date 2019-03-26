import React, { Component } from 'react'
import logo from './logo.svg'
import { RouteComponentProps } from '@reach/router'

export class Home extends Component<RouteComponentProps> {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/app.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export const bar = 'quux'
export const foo = 'quux2'

export default bar