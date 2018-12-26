import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
export class Foo extends Component {
  @observable a = 1
  render() {
    return (
      <div className='p-8'>
        <h1 className='text-blue'>foo: {this.a}</h1>
        <button onClick={() => { this.a++ }}>Click me</button>
      </div >
    );
  }
}

