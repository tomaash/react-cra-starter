import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
import { AppStore } from '~/stores/AppStore'
import { RouteComponentProps } from '@reach/router'

interface ListPageProps extends RouteComponentProps {
  appStore?: AppStore
}

@inject('appStore')
@observer
export class ListPage extends Component<ListPageProps> {
  componentDidMount() {
    this.props.appStore.loadUsers()
  }
  render() {
    const { users } = this.props.appStore
    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.last_name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </>
    )
  }
}
