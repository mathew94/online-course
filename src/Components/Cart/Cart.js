import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    } 

    return (
        <div className='cart'>
            <h3>Courses Enrolled : {cart.length}</h3>
            <h5>Total Price : ${total}</h5>
        </div>
    );
};

export default Cart;