/**
 * Created by raunak on 20/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import FoodTypeListItem from './FoodTypeListItem'
class FoodTypeList extends React.Component {

    RenderList() {

        const cityData = this.props.cityData;
        let cityName = Object.keys(cityData)[0];
        let foodType = [];
        for (let type in cityData[cityName]) {
            foodType.push(type);
        }
        let renderList = foodType.map((type) => {
            return (
                <FoodTypeListItem type={type}/>

            )
        });
        console.log(renderList);

        return renderList;


    }


    render() {


        return (<div>
            {this.RenderList()}
        </div>)
    }


}

function mapStateToProps(state) {
    return ({
        cityData: state.CityData
    })
}

export default connect(mapStateToProps)(FoodTypeList)