import React from 'react';
import './Home.css';
import Product from '../Product/Product'
import product1 from '../../assets/jacket-1.png'
import product2 from '../../assets/jacket-2.png'
import product3 from '../../assets/jacket-3.png'
import product4 from '../../assets/jacket-4.png'
const Home = () => {
    return (
        
            <div className="home">
<div className="home-container">
    <img src='' alt="" className="home-image" />
    <div className="home-row">
        <Product 
        id="1"
        title='Winter Jacket Women'
        price={11.96}
        rating={5}
        image={product1}
        />
        <Product
        id="2"
        title='Winter Jacket Men'
        price={15.86}
        rating={5}
        image={product2}
        />
        <Product id="3"
        title='Winter Jacket Women'
        price={9.86}
        rating={4}
        image={product3}  />
    </div>
    <div className="home-row">
        <Product
        id="4"
        title='Winter Jacket Men'
        price={10.66}
        rating={4}
        image={product4}
        
        />
        <Product id="4"
        title='Winter Jacket Men'
        price={10.66}
        rating={4}
        image={product4} />
    </div>
    <div className="home-row">
    
        <Product id="4"
        title='Winter Jacket Men'
        price={10.66}
        rating={4}
        image={product4}  />
        
    </div>
</div>

            </div>     
    );
};

export default Home;