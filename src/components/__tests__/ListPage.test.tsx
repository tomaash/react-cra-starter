import React from 'react'
import { mount } from 'enzyme'
import { squashHtmlTags, renderText, startPolly } from '~/utils/testUtils'
import { ListPage } from '../ListPage'
import { AppStore } from '~/stores/AppStore'
import { Provider } from 'mobx-react'
import { when } from 'mobx'

describe('<ListPage />', () => {
  startPolly(__dirname)

  it('renders component', () => {
    const componentSetup = (
      <Provider appStore={new AppStore()}>
        <ListPage />
      </Provider>
    )

    const text = renderText(componentSetup)
    expect(squashHtmlTags(text)).toMatchSnapshot()
  })

  it('waits for data load', async () => {
    const appStore = new AppStore()
    const componentSetup = (
      <Provider appStore={appStore}>
        <ListPage />
      </Provider>
    )

    const wrapper = mount(componentSetup)
    await when(() => !!appStore.users.length)
    expect(squashHtmlTags(wrapper.html())).toMatchSnapshot()
  })
})
