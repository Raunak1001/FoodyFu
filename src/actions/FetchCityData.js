/**
 * Created by raunak on 20/6/17.
 */
import React from 'react'
import axios from 'axios'
const BASE_URL="http://127.0.0.1:5000/homePage";
export const FETCH_CITY_DATA="Fetch_City_Data";

export default function FetchCityData(cityName) {
const URL=`${BASE_URL}/${cityName}`;
const response=axios.get(URL);
return{
    type:FETCH_CITY_DATA,
    payload:response
}
}