import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Checkout.css'
const Checkout = () => {
    return (
        <div className="checkout">
           <div className="checkout-left">

<h2 className="checkout-title">Your Cart</h2>

<CheckoutProduct></CheckoutProduct>
           </div>
<div className="checkout-right">

</div>

        </div>
    );
};

export default Checkout;