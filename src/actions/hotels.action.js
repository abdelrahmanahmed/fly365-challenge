import Axios from 'axios';
import { FETCH_HOTELS, FETCH_HOTELS_DETAILS } from '../constants/action-types.constants';
import { config } from '../config/app';

export function fetchHotels() {
    const reqConfig = {
        url: `${config.url}/hotels`,
        method: 'get',
    };
    const request = Axios(reqConfig);
    return {
        type: FETCH_HOTELS,
        payload: request
    };
}

export function fetchHotelDetails(id) {
    const reqConfig = {
        url: `${config.url}/hotelDetails/${id}`,
        method: 'get',
    };
    const request = Axios(reqConfig);
    return {
        type: FETCH_HOTELS_DETAILS,
        payload: request
    };
}



