/* Created by raunak on 20/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import AddToCart from '../actions/AddToCart'
import CartItem from './CartItem'


class Cart extends React.Component {


    RenderList() {
        const cityData = this.props.MyCart;
        let cityName = Object.keys(cityData)[0];
        let foodType = Object.keys(cityData[cityName])[0];
        let foodTime = Object.keys(cityData[cityName][foodType])[0];
        let foodOutlet = [];
        for (let outlet in cityData[cityName][foodType][foodTime]) {
            //console.log("fasfasdf");

            foodOutlet.push(outlet);
        }

        console.log(foodOutlet);
        let quantity = 0;
        let individualPrice = 0;

        let renderList = foodOutlet.map((outlet) => {
            quantity = cityData[cityName][foodType][foodTime][outlet]['quantity'];
            individualPrice = cityData[cityName][foodType][foodTime][outlet]['price'];

            return (<div>
                <CartItem outlet={outlet} foodType={foodType} foodTime={foodTime} price={individualPrice}
                          quantity={quantity}/>
            </div>);

        });
        return renderList;
    }


    render() {
        return (<div>{this.RenderList()}
            <button onClick={() => {
                this.orderFunction()
            }}>Order Now
            </button>
        </div>)
    }

}

function mapStateToProps(state) {
    return ({
        MyCart: state.AddToCart
    })
}


export default connect(mapStateToProps, {AddToCart: AddToCart})(Cart)