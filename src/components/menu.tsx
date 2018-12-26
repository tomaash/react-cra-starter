import React, { Component } from 'react';
import { UISrefActive, UISref } from '@uirouter/react';

export class AppMenu extends Component {

    render() {
        return (
            <div>
                <UISrefActive class="active">
                    <UISref to="home">
                        <a>Home</a>
                    </UISref>
                </UISrefActive>
                <UISrefActive class="active">
                    <UISref to="foo">
                        <a>Foo</a>
                    </UISref>
                </UISrefActive>
                <UISrefActive class="active">
                    <UISref to="list">
                        <a>List</a>
                    </UISref>
                </UISrefActive>
                <UISrefActive class="active">
                    <UISref to="form">
                        <a>Form</a>
                    </UISref>
                </UISrefActive>
            </div>
        );
    }

}