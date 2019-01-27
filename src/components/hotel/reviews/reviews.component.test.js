import React from 'react';
import { shallow, configure } from 'enzyme';
import { Reviews } from './reviews.component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Reviews Component', () => {
    let wrapper, instance, props;
    props = {
        list: [
            {
                "review": "review1",
                "score": 5
            },
            {
                "review": "review3",
                "score": 4.6
            },
            {
                "review": "review2",
                "score": 4.9
            },

        ]
    }
    beforeAll(() => {
        wrapper = shallow(<Reviews {...props} />, { lifecycleExperimental: true });
        instance = wrapper.dive().instance();

    });

    it('Get next page when click on next button', () => {
        expect(instance.state.currentPage).toBe(1);
        instance.handleNavigation('next');
        expect(instance.state.currentPage).toBe(2);
    });

    it('Get previous page when click on back button', () => {
        instance.setState({
            currentPage: 3,
        })
        instance.handleNavigation('prev');
        expect(instance.state.currentPage).toBe(2);
    });

    it('Navigate to the clicked page', () => {
        const pageNumber = 2;
        const event = {
            target: {
                id: pageNumber,
                name: 'inputName'
            }
        }
        instance.handlePageClick(event);
        expect(instance.state.currentPage).toBe(pageNumber);
    });

    it('sort reviews asc order', () => {
        const sortType = 'asc';
        instance.sort(sortType);
        expect(instance.state.activeReviewsList[0].score).toBe(props.list[1].score);
        expect(instance.state.activeReviewsList[1].score).toBe(props.list[2].score);
        expect(instance.state.activeReviewsList[2].score).toBe(props.list[0].score);
        expect(instance.state.sortType).toBe(sortType);
    });

    it('sort reviews desc order', () => {
        const sortType = 'desc';
        instance.sort(sortType);
        expect(instance.state.activeReviewsList[0].score).toBe(props.list[0].score);
        expect(instance.state.activeReviewsList[1].score).toBe(props.list[2].score);
        expect(instance.state.activeReviewsList[2].score).toBe(props.list[1].score);
        expect(instance.state.sortType).toBe(sortType);
    });
});