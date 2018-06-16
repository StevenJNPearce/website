import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import Jobs from '@containers/Jobs/index'
import Hero from '@components/Hero'

describe('<Jobs />', () => {
  let component = typeof Jobs

  beforeEach(() => {
    component = mount(
      <Jobs />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists());
  });

})