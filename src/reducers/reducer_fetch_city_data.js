/**
 * Created by raunak on 20/6/17.
 */
import {FETCH_CITY_DATA} from '../actions/FetchCityData'

export default function  (state = {}, action) {
    switch(action.type){
        case FETCH_CITY_DATA:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state
    }
    return state;
}