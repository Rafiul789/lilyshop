
import './App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
function App() {
  return (
    <div >
     <div className="heading-logo">
      <StoreIcon className="header-image"   fontSize="large"/>
      <h2 className="header-title" >Lilyshop</h2>
     </div>
<div className="search-bar">
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
  <div className="navigation-item">
  <ShoppingCartIcon fontSize="large" />
<span className="navigation-itemTwo">0</span>
  </div>
</div>
    </div>
  );
}

export default App;
