import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faStar} from '@fortawesome/free-solid-svg-icons';

import './Product.css';
const Product = ({id,title,image,rating,price}) => {
    return (
        <div>
            <div className="product">
                
                <div >
<img className="product-image"   src={image} alt='product'/>

                </div>
                <div className="product-info">
                    <p>{title}</p>
                    <p className="product-price">${price}</p>
                    <p className="product-rating"> {rating}{Array(rating).fill().map(()=>( <FontAwesomeIcon icon={ faStar} /> ))}    </p>
                </div>

   <button className="product-button"  >Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;