import * as actions from './hotels.action';
import * as actionTypes from '../constants/action-types.constants';

const promiseObject = new Promise((resolve) => {
    resolve();
});

describe('hotels action creators test suite', () => {
    it('Create an action for fetchHotels function', () => {
        const expectedAction = {
            type: actionTypes.FETCH_HOTELS,
            payload: promiseObject
        };
        expect(actions.fetchHotels()).toEqual(expectedAction);
        expect(actions.fetchHotels()).toHaveProperty('payload');
        expect(actions.fetchHotels()).toHaveProperty('payload', promiseObject);
        expect(actions.fetchHotels()).toHaveProperty('type');
        expect(actions.fetchHotels()).toHaveProperty('type', actionTypes.FETCH_HOTELS);
    });

    it('Create an action for fetchHotelDetails function', () => {
        const id = '3251';
        const expectedAction = {
            type: actionTypes.FETCH_HOTELS_DETAILS,
            payload: promiseObject
        };
        expect(actions.fetchHotelDetails(id)).toEqual(expectedAction);
        expect(actions.fetchHotelDetails(id)).toHaveProperty('payload');
        expect(actions.fetchHotelDetails(id)).toHaveProperty('payload', promiseObject);
        expect(actions.fetchHotelDetails(id)).toHaveProperty('type');
        expect(actions.fetchHotelDetails(id)).toHaveProperty('type', actionTypes.FETCH_HOTELS_DETAILS);
    });
})

