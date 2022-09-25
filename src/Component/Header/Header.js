import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
const Header = () => {
    return (
           <div className="header">
              <div className="heading-logo">
      <StoreIcon className="header-image"   fontSize="large"/>
      <h2 className="header-title" >Lilyshop</h2>
     </div>

<div className="search-bar">
  <input type="text" className="search" />
  <SearchIcon  className="search-icon"/>
</div>

<div className="navigation">
  <div className="navigation-item">
<span className="navigation-itemOne"> Hello </span>
<span className="navigation-itemTwo">Guest</span>
  </div>
  <div className="navigation-item">
  <span className="navigation-itemOne">Your</span>
<span className="navigation-itemTwo">Shop</span>
  </div>
  <div className="cart-item">
  <ShoppingCartIcon   fontSize="large" />
<span className="navigation-itemTwo cart-count ">0</span>
  </div>
</div>
        </div>
    );
};

export default Header;