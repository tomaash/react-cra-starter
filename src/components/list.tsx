import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { AppStore } from '~/stores/AppStore';
import { useCurrentRoute, CurrentRoute } from 'react-navi'
import { Route } from 'navi';
import { withCurrentRoute } from '~/hookUtils';
// import { navigation } from '~/app'


@inject('appStore')
@observer
export class List extends Component<{ appStore?: AppStore, currentRoute?: Route }> {

  render() {
    const { currentRoute } = this.props.appStore
    const result = currentRoute.data
    const { data } = result
    return (
      <>
        <h1>{currentRoute.title}</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => {
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

