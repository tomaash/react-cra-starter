import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import bar, { Home } from '~/components/home';
import { Foo } from '~/components/foo';
import { List } from '~/components/list';
import { Form } from '~/components/form';
import { Provider } from 'mobx-react';
import { AppStore } from '~/stores/AppStore';

import { lazy, mount, route, createBrowserNavigation } from 'navi'
import { View, NaviProvider } from 'react-navi'
import AppLayout from '~/components/AppLayout';
import { loadUsers } from './loaders/formLoader';

// Define your routes
const routes =
  mount({
    '/': route({
      title: 'Home',
      view: <Home />,
    }),
    '/foo': route({
      title: 'Foo',
      view: <Foo />,
    }),
    '/list': route({
      title: 'List',
      getData: () => loadUsers(),
      view: <List />,
    }),
    '/form': route({
      title: 'Form',
      view: <Form />,
    }),
  })

const foo = 'foo'

export const navigation = createBrowserNavigation({
  routes,
  context: {
    foo
  }
})

const appStore = new AppStore();
appStore.setupNavigation(navigation)

export class App extends Component {
  render() {
    return (
      <Provider appStore={appStore}>
        <NaviProvider navigation={navigation}>
          <div>
            <AppLayout>
              <Suspense fallback={null}>
                <View />
              </Suspense>
            </AppLayout>
          </div>
        </NaviProvider>
      </Provider>
    );
  }
}
