import React from 'react'
import { shallow } from 'enzyme'
import { Profile } from '../Profile'
import { squashHtmlTags, renderText } from '~/utils/testUtils'

describe('<Settings />', () => {
  it('renders settings component', () => {
    const text = renderText(<Profile />)
    expect(squashHtmlTags(text)).toMatchSnapshot()
  })

  it('simulates click events', () => {
    let counter
    const wrapper = shallow(<Profile />)
    counter = wrapper.find('[data-testid="counter"]')
    expect(counter).toIncludeText('0')
    wrapper.find('[data-testid="button"]').simulate('click')
    counter = wrapper.find('[data-testid="counter"]')
    expect(counter).toIncludeText('1')
  })
})
