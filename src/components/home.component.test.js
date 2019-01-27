import React from 'react';
import { shallow, configure } from 'enzyme';
import { Home, mapStateToProps } from './home.component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Home Component', () => {
    let wrapper, instance, props;
    props = {
        fetchHotels: jest.fn(),
        updateNumberOfNights: jest.fn(),
        hotels: [
            {
                "id": 37681,
                "name": "hotelTest1",
                "totalReviews": 1111,
                "totalScore": 8.5,
                "pricePerNight": 50,
                "photo": "photoLink"
            },
            {
                "id": 43246,
                "name": "hotelTest2",
                "totalReviews": 2222,
                "totalScore": 8.5,
                "pricePerNight": 20,
                "photo": "photoLink"
            },
        ]
    }
    beforeAll(() => {
        wrapper = shallow(<Home {...props} />);
        instance = wrapper.dive().instance();

    });

    it('Fetch hotels list on component initialization', () => {
        expect(props.fetchHotels.mock.calls.length).toBe(1);
    });

    it('Change number of nights', () => {
        const numberOfNights = 2;
        const event = {
            target: {
                name: 'numberOfNights',
                value: numberOfNights,
            }
        }
        instance.handleNumberOfNightsChange(event);
        expect(props.updateNumberOfNights.mock.calls.length).toBe(1);
        expect(props.updateNumberOfNights.mock.calls[0][0]).toBe(numberOfNights);
    });

    it('get Review based on score', () => {
        let score = 2;
        let result = instance.getReview(score);
        expect(result).toBe('Bad');

        score = 5;
        result = instance.getReview(score);
        expect(result).toBe('Good');

        score = 7;
        result = instance.getReview(score);
        expect(result).toBe('Good');

        score = 7.5;
        result = instance.getReview(score);
        expect(result).toBe('Very Good');

        score = 9;
        result = instance.getReview(score);
        expect(result).toBe('Excellent');
    });

    describe('Map state function', () => {
        it('Map hotels list and numberOfNights', () => {
            const propsFromRedux = {
                hotels: {
                    list: [
                        {
                            "id": 37681,
                            "name": "hotelTest1",
                            "totalReviews": 1111,
                            "totalScore": 8.5,
                            "pricePerNight": 50,
                            "photo": "photoLink"
                        },
                    ],
                    numberOfNights: 1,
                }
            }
            const result = mapStateToProps(propsFromRedux);
            expect(result.hotels).toEqual(propsFromRedux.hotels.list);
            expect(result.numberOfNights).toEqual(propsFromRedux.hotels.numberOfNights);
        });

        it('Map hotels details', () => {
            const propsFromRedux = {
                hotels: {
                    details: {
                        "id": 37681,
                        "name": "Hilton Sharm",
                        "reviews": [
                            {
                                "review": "I really liked my stay in hilton sharm",
                                "score": 5
                            },
                        ],
                        "pictures": [
                            {
                                "thumbnail": "http://picsum.photos/100/100/?image=11",
                                "photo": "http://picsum.photos/1015/1015/?image=11"
                            },
                        ]
                    }
                }
            }
            const result = mapStateToProps(propsFromRedux);
            expect(result.hotelDetails).toEqual(propsFromRedux.hotels.details);
        });

        it('set details to undefind and hotels to empty array if not value is passed', () => {
            const propsFromRedux = {
                hotels: {
                    list: []
                },
                numberOfNights: 1,
            }
            const result = mapStateToProps(propsFromRedux);
            expect(result.hotelDetails).toEqual(undefined);
            expect(result.hotels).toEqual([]);
        });
    });






});