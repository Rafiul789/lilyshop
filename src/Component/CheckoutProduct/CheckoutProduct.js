import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faStar} from '@fortawesome/free-solid-svg-icons';
import './CheckoutProduct.css';

const CheckoutProduct = () => {
    return (
        <div className="CheckoutProduct"  >
 <img src="" alt="" className="checkout-product" />
         <div className="product-info">
            <p className="product-title">

            </p>
<p className="product-price">
    $
</p>
<div className="product-rating">
<FontAwesomeIcon icon={ faStar} /> 
</div>

<button>Remove Item </button>
            </div>       
   


        </div>
    );
};

export default CheckoutProduct;