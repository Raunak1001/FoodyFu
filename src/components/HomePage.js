/**
 * Created by raunak on 20/6/17.
 */
import React from 'react'
import LocationBar from './LocationBar'
import FoodTypeList from './FoodTypeList'

export default class HomePage extends React.Component{

    render(){
        return(<div>
           <LocationBar/>
            <FoodTypeList/>

        </div>)

    }




}