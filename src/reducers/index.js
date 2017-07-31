/**
 * Created by raunak on 20/6/17.
 */
import {combineReducers} from 'redux'
import ReducerFetchCityData from './reducer_fetch_city_data'
import ReducerAddToCart from './reducer_Add_To_Cart'

const rootReducers=combineReducers({
    CityData:ReducerFetchCityData,
    AddToCart:ReducerAddToCart


});
export default rootReducers;