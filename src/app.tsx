import React, { Component } from 'react';
import logo from './logo.svg';
import { UIRouter, UIRouterReact, UIView, pushStateLocationPlugin, trace } from '@uirouter/react';
import bar, { Home } from './components/home';
import { Foo } from './components/foo';
import { List } from './components/list';
import { Form } from './components/form';
import { Provider } from 'mobx-react';
import { AppStore } from './stores/AppStore';
import { AppMenu } from './components/menu';

// define your states
const states = [
  {
    name: 'home',
    url: '/home',
    component: Home,
  },
  {
    name: 'foo',
    url: '/foo',
    component: Foo,
  },
  {
    name: 'list',
    url: '/list',
    component: List
  },
  {
    name: 'form',
    url: '/form',
    component: Form,
  },
];

// select your plugins
const plugins = [pushStateLocationPlugin];

const routerConfig = (router: UIRouterReact) => {
  router.urlRouter.otherwise('/home');
  trace.enable(1);
};

export class App extends Component {
  appStore = new AppStore();

  render() {
    return (
      <Provider appStore={this.appStore}>
        <UIRouter plugins={plugins} states={states} config={routerConfig}>
          <div>
            <AppMenu />
            <UIView />
          </div>
        </UIRouter>
      </Provider>
    );
  }
}
