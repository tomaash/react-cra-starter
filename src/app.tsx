import React, { Component, Suspense } from 'react'
import logo from './logo.svg'
import { Home } from '~/components/Home'
import { Profile } from '~/components/Profile'
import { ListPage } from '~/components/ListPage'
import { Settings } from './components/Settings'
import { AppStore } from '~/stores/AppStore'

import { createHistory, LocationProvider, Link, Router } from '@reach/router'

import { toJS } from 'mobx'
import { AppMenu } from './components/AppMenu'
import { Provider, observer } from 'mobx-react'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faBookOpen,
  faTasks,
  faSearchDollar,
  faMoneyCheckAlt,
  faHandHoldingUsd,
  faUserFriends,
  faUser,
  faThList,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBookOpen,
  faTasks,
  faSearchDollar,
  faMoneyCheckAlt,
  faHandHoldingUsd,
  faUserFriends,
  faUser,
  faThList,
  faPlusSquare
)

export const history = createHistory(window as any)
const appStore = new AppStore()
appStore.setupHistory(history)

@observer
export class App extends Component {
  render() {
    return (
      <Provider appStore={appStore}>
        <LocationProvider history={history}>
          <div className='flex flex-col h-screen overflow-hidden'>
            <AppMenu />
            <Router className='flex-grow overflow-y-auto'>
              <Home path='/' />
              <Profile path='profile/:username' />
              <ListPage path='list' />
              <Settings path='settings' />
            </Router>
            <div className='p-2 bg-grey-light text-center text-sm'>
              status bar
            </div>
          </div>
        </LocationProvider>
      </Provider>
    )
  }
}
