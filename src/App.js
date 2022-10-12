
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Routes>

  <Route path='/checkout' element={<Checkout />}>
  </Route>
<Route path='/' element={<Home />}>

</Route>

      </Routes>
  
      
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
