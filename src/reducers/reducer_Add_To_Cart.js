/**
 * Created by raunak on 26/6/17.
 */
import {ADD_TO_CART} from '../actions/AddToCart'

export default function  (state = {}, action) {
    switch(action.type){
        case ADD_TO_CART:
            console.log(action.payload.data);
            return action.payload;
        default:
            return state
    }
}