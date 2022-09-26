import React from 'react';
import './Home.css';
import Product from '../Product/Product'
const Home = () => {
    return (
        <div>
            <div className="home   ">
<div className="home-container">
    <img src='' alt="" className="home-image" />
    <div className="home-row">
        <Product/>
        <Product/>
        <Product/>
    </div>
    <div className="home-row">
        <Product/>
        <Product/>
    </div>
    <div className="home-row">
    
        <Product/>
        <Product/>
    </div>
</div>

            </div>
        </div>
    );
};

export default Home;