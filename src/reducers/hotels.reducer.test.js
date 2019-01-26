import hotels from './hotels.reducer';
import { FETCH_HOTELS, FETCH_HOTELS_DETAILS } from '../constants/action-types.constants';


describe('Hotels Reducer', () => {
    let initalState;
    beforeEach(() => {
        initalState = {};
    });

    it('returns new state with list of hotels', () => {
        const data = {
            type: FETCH_HOTELS,
            payload: [
                {
                    "id": 37681,
                    "name": "Hilton Sharm",
                    "totalReviews": 1678,
                    "totalScore": 8.5,
                    "pricePerNight": 180,
                    "photo": "http://picsum.photos/100/100/?image=109"
                },
            ]
        }
        const result = hotels(initalState, data);
        expect(result).toEqual(data.payload);
    });

    it('returns new state with hotel details', () => {
        const data = {
            type: FETCH_HOTELS_DETAILS,
            payload: {
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
        const result = hotels(initalState, data);
        expect(result).toEqual(data.payload);
    });

    it('returns default state when other action is provided', () => {
        const data = {
            type: 'other action',
            payload: 'payload'
        }
        const result = hotels(initalState, data);
        expect(result).toEqual(initalState);
    });
});