
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {BrowserRouter as Router,Route,Switch} from  'react-router-dom';
import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <div >
      <Router>
<Switch>
  <Route path='/checkout' >
<Header></Header>
<Checkout></Checkout>
  </Route>
<Route path='/'>
<Home></Home>
</Route>

</Switch>

      </Router>
  
   
    </div>
  );
}

export default App;
