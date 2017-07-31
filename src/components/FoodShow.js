/**
 * Created by raunak on 20/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import FoodShowListItem from './FoodShowListItem'
import {Link} from 'react-router-dom'
import AddToCart from '../actions/AddToCart'

class FoodShow extends React.Component {

    constructor(props) {
        super(props);
        const cityData = this.props.cityData;
        this.changValue = this.changValue.bind(this);
        this.state = cityData;

    }


    changValue(outlet) {
        if (outlet != undefined) {
            const cityData = this.props.cityData;
            let cityName = Object.keys(cityData)[0];
            let foodType = this.props.match.params.foodType;
            let foodTime = this.props.match.params.foodTime;
            let json = this.state;
            json[cityName][foodType][foodTime][outlet]['quantity'] += 1;
            console.log(this.state);
        }
    }


    RenderList() {
        const cityData = this.props.cityData;
        let cityName = Object.keys(cityData)[0];
        let foodType = this.props.match.params.foodType;
        let foodTime = this.props.match.params.foodTime;
        let foodOutlet = [];
        for (let outlet in cityData[cityName][foodType][foodTime]) {
            //console.log("fasfasdf");

            foodOutlet.push(outlet);
        }

        console.log(foodOutlet);
        let quantity = 'quantity';

        let renderList = foodOutlet.map((outlet) => {

            return (<div>
                <FoodShowListItem outlet={outlet} foodType={foodType} foodTime={foodTime} changValue={(outlet) => {
                    this.changValue(outlet)
                }}/>
            </div>);

        });
        return renderList;
    }

    addToCart() {
        let json = this.state;
        let cityName = Object.keys(json)[0];
        let foodType = this.props.match.params.foodType;
        let foodTime = this.props.match.params.foodTime;
        let finJson = {};
        let finalPrice = 0;
        finJson[cityName] = {};
        finJson[cityName][foodType] = {};
        finJson[cityName][foodType][foodTime] = {};
        let selectedOutlet = {};

         for (let outlet in json[cityName][foodType][foodTime]) {
            if (json[cityName][foodType][foodTime][outlet]['quantity'] > 0) {
                selectedOutlet = json[cityName][foodType][foodTime][outlet];
                finalPrice += (selectedOutlet['quantity']) * (selectedOutlet['price']);
                finJson[cityName][foodType][foodTime][outlet] = selectedOutlet;


            }
        }
        this.props.AddToCart(finJson);
        this.props.history.push('/MyCart')
        console.log(finJson, "finJson");
        console.log(finalPrice);
    }

    render() {
        console.log(this.props.match.params.foodType, "dsfas");
        return (<div>{this.RenderList()}
            <button onClick={() => {
                this.addToCart()
            }}>AddToCart
            </button>
        </div>)
    }


}

function mapStateToProps(state) {
    return ({
        cityData: state.CityData
    })
}



export default connect(mapStateToProps,{AddToCart:AddToCart})(FoodShow)