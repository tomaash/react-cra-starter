import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { AppStore } from '~/stores/AppStore';

@inject('appStore')
@observer
export class ListPage extends Component<{ appStore?: AppStore }> {

  render() {
    const { users } = this.props.appStore
    return (
      <>
        <h1>List</h1>
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
              );
            })}
          </TableBody>
        </Table>
      </>
    );
  }
}

