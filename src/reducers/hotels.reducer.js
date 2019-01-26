import { FETCH_HOTELS, FETCH_HOTELS_DETAILS } from '../constants/action-types.constants';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_HOTELS:
            return action.payload;

        case FETCH_HOTELS_DETAILS:
            return action.payload;

        default:
            return state;
    }
}
