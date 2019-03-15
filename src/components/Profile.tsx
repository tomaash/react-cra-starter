import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { RouteComponentProps } from '@reach/router'
import { Button } from '@material-ui/core'

interface ProfileProps extends RouteComponentProps {
  username?: string
}

@observer
export class Profile extends Component<ProfileProps> {
  @observable a = 0
  render() {
    return (
      <div className='p-8'>
        <h1>Hello, {this.props.username}</h1>
        <h3 className='text-red-dark'>You have clicked {this.a} times</h3>
        <br />
        <Button
          color='primary'
          variant='raised'
          onClick={() => {
            this.a++
          }}
        >
          Click me
        </Button>
      </div>
    )
  }
}
