/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  
  const setup = () => {
    return shallow(<App />);
  }

  const findByAtr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
  }

  it('renders without crashing', () => {
    const wrapper = setup();
    const appComponent = findByAtr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });

  it('renders header element', () => {
    const wrapper = setup();
    const headerElem = findByAtr(wrapper, 'element-header');
    expect(headerElem.length).toBe(1);
  });

  it('renders overview element', () => {
    const wrapper = setup();
    const overviewElem = findByAtr(wrapper, 'element-overview');
    expect(overviewElem.length).toBe(1);
  });


});
