import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { AppStore } from '../stores/AppStore';

@inject('appStore')
@observer
export class List extends Component<{ appStore: AppStore }> {

  componentDidMount() {
    this.props.appStore.loadMerchants();
  }

  render() {
    const { merchants } = this.props.appStore;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Headline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {merchants.map(item => {
            return (
              <TableRow key={item._links.self.href}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.headline}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

