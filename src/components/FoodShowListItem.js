/**
 * Created by raunak on 26/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'

class FoodShowListItem extends React.Component {

    constructor(props){
        super(props);
        console.log(props.outlet);
        this.state={'outlet':props.outlet,
        'foodType':props.foodType,
            'foodTime':props.foodTime
        };
        console.log(this.state,'asf');
    }



    getMenue(outlet){

        const cityData = this.props.cityData;
        let cityName = Object.keys(cityData)[0];
        let foodType = this.state.foodType;
        let foodTime = this.state.foodTime;

        let menueString='';
        for (let i in cityData[cityName][foodType][foodTime][this.state.outlet]['menue'] )
        {
            menueString+=cityData[cityName][foodType][foodTime][this.state.outlet]['menue'][i]+",  ";
        }
        return menueString;

    }

    render(){
        return (
            <div>
                <div>{this.state.outlet}</div>
                <div>{this.getMenue(this.state.outlet)}</div>
                <button onClick={()=>{this.props.changValue(this.state.outlet)}}>Add</button>
            </div>

        );
    }



}

function mapStateToProps(state) {
    return ({
        cityData: state.CityData
    })
}

export default connect(mapStateToProps)(FoodShowListItem)
