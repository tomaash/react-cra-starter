import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import { Home } from '~/components/home';
import { Foo } from '~/components/foo';
// import { List } from '~/components/list';
import { Form } from '~/components/form';
import { AppStore } from '~/stores/AppStore';

import { loadUsers } from './loaders/formLoader';

import {
  createHistory,
  LocationProvider,
  Link,
  Router
} from "@reach/router"

import { toJS } from 'mobx';
import { AppMenu } from './components/AppMenu';
import { Provider, observer } from 'mobx-react';

export const history = createHistory(window as any)


const appStore = new AppStore();
appStore.setupHistory(history)

@observer
export class App extends Component {
  render() {
    console.log(toJS(appStore.currentRoute))
    return (
      <Provider appStore={appStore}>
        <LocationProvider history={history}>
          <AppMenu />
          {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="foo/123">Foo</NavLink>
          </nav> */}
          <Router>
            <Home path="/" />
            <Foo path="foo/:id" />
          </Router>
        </LocationProvider>
      </Provider>
    );
  }
}
