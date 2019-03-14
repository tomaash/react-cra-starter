import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { RouteComponentProps } from '@reach/router';

interface FooProps extends RouteComponentProps {
  id?: string
}

@observer
export class Foo extends Component<FooProps> {
  @observable a = 1
  render() {
    return (
      <div className='p-8'>
        <h1>{this.props.id}</h1>
        <h1 className='text-blue'>foo: {this.a}</h1>
        <button onClick={() => { this.a++ }}>Click me</button>
      </div >
    );
  }
}

