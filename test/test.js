import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';
import Home from '../src/containers/Home';
import NotFound from '../src/containers/NotFound';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('it renders home component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<Home />', () => {
  it('it renders home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<NotFound />', () => {
  it('it renders home component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.exists()).toBe(true);
  });
});
