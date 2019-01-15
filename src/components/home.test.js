import React from 'react';
import { shallow, configure } from 'enzyme';
import { Home } from './home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup() {

    // const wrapper = shallow(<Home />);
    // const instance = wrapper.dive().instance();
    // return {
    //     wrapper,
    //     instance
    // }
}

describe('Home Page', () => {
    // let wrapper, instance;
    beforeEach(() => {
        // const component = setup();
        // wrapper = component.wrapper;
        // instance = wrapper.dive().instance();
    });

    it('Initial State', () => {
        expect(false).toBe(true);

    });



});