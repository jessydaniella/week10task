import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Cart/cart'

export default function Cart() {
    const cartItem = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    return (
        <div>
            <p>{cartItem}</p>
            <button  onClick={() => dispatch(increment())}>Add Item to Cart</button>
            <button  onClick={() => dispatch(decrement())}>Remove Item to Cart</button>
            
        </div>
    )
}
