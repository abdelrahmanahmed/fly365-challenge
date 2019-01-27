import React from 'react';
import { shallow, configure } from 'enzyme';
import { Gallery } from './gallery.component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Gallery Component', () => {
    let wrapper, instance, props;
    props = {
        list: [
            { photo: 'photoLink1', thumbnail: 'thumbnailLink1' },
            { photo: 'photoLink2', thumbnail: 'thumbnailLink2' },
            { photo: 'photoLink3', thumbnail: 'thumbnailLink3' },
        ]
    }
    beforeEach(() => {
        wrapper = shallow(<Gallery {...props} />);
        instance = wrapper.dive().instance();

    });

    it('initialize Gallery component State', () => {
        expect(instance.state.activePhoto).toBe(props.list[0].photo);
        expect(instance.state.galleryList).toBe(props.list);
    });

    it('doenst render Gallery component if no list is provided', () => {
        let CustomeProps = {
            list: []
        }
        let customeWrapper = shallow(<Gallery {...CustomeProps} />);
        let customeInstance = customeWrapper.dive().instance();

        expect(customeInstance.state.activePhoto).toBe(null);
        expect(customeInstance.state.galleryList).toEqual([]);
    });

    it('Change active photo', () => {
        expect(instance.state.activePhoto).toBe(props.list[0].photo);
        instance.changeActivePhoto(1);
        expect(instance.state.activePhoto).toBe(props.list[1].photo);
    });

});