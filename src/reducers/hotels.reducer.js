import { FETCH_HOTELS, FETCH_HOTELS_DETAILS, UPDATE_NUMBER_OF_NIGHTS } from '../constants/action-types.constants';

const initalState = {
    numberOfNights: 1
}

export default function (state = initalState, action) {
    switch (action.type) {
        case FETCH_HOTELS:
            return Object.assign({}, state, {
                list: action.payload.data
            });

        case FETCH_HOTELS_DETAILS:
            return Object.assign({}, state, {
                details: action.payload.data
            });

        case UPDATE_NUMBER_OF_NIGHTS:
            return Object.assign({}, state, {
                numberOfNights: action.payload
            });

        default:
            return state;
    }
}
