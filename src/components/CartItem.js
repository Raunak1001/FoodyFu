/**
 * Created by raunak on 26/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'


class CartItem extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.outlet, "CartItem");
        this.state = {
            'outlet': props.outlet,
            'foodType': props.foodType,
            'foodTime': props.foodTime,
            'quantity': props.quantity,
            'price': props.price
        };
        console.log(this.state, 'asf');
    }


    getMenue(outlet) {

        const cityData = this.props.MyCart;
        let cityName = Object.keys(cityData)[0];
        let foodType = this.state.foodType;
        let foodTime = this.state.foodTime;

        let menueString = '';
        for (let i in cityData[cityName][foodType][foodTime][this.state.outlet]['menue']) {
            menueString += cityData[cityName][foodType][foodTime][this.state.outlet]['menue'][i] + ",  ";
        }
        let quantity = cityData[cityName][foodType][foodTime][this.state.outlet]['quantity'];
        let individualPrice = cityData[cityName][foodType][foodTime][this.state.outlet]['price'];

        return menueString;

    }


    render() {
        return (
            <div>
                <div>{this.state.outlet}</div>
                <div>{this.getMenue(this.state.outlet)}</div>
                <div>Quantity: {this.state.quantity}</div>
                <div>Price: {(this.state.price) * (this.state.quantity)} </div>

            </div>

        );
    }

}
function mapStateToProps(state) {
    return ({
        MyCart: state.AddToCart
    })
}
export default connect(mapStateToProps)(CartItem)