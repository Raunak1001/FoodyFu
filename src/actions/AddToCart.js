/**
 * Created by raunak on 26/6/17.
 */
import React from 'react'
export const ADD_TO_CART="Add to Cart";

export default function AddToCart(currentOrder) {

    return{
        type:ADD_TO_CART,
        payload:currentOrder
    }

}