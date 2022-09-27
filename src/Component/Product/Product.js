import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faStar} from '@fortawesome/free-solid-svg-icons';
import product1 from '../../assets/jacket-1.png';
import './Product.css';
const Product = () => {
    return (
        <div>
            <div className="product">
                
                <div >
<img className="product-image"   src={product1} alt='product'/>

                </div>
                <div className="product-info">
                    <p>Title</p>
                    <p className="product-price">$50</p>
                    <p className="product-rating"><FontAwesomeIcon icon={ faStar} /> <FontAwesomeIcon icon={ faStar} /> <FontAwesomeIcon icon={ faStar} /> <FontAwesomeIcon icon={ faStar} /> <FontAwesomeIcon icon={ faStar} />    </p>
                </div>

   <button>Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;