//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import { ShopContextProvider } from './Contexts/ShopContext'
//import Categories from './components/Categories'
import Login from './pages/account/Login';
import SignUp from './pages/account/SignUp';
import PaymentPage from './pages/Payment/PaymentPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
     <Router>
     <Nav/>
     
     <Routes>
      <Route path="/" element={ <Shop/> } />
      <Route path="/cart" element={ <Cart/> } />
      <Route path="/account" element={ <Login/> } />

      <Route path="/signUp" element={ <SignUp/> } />
      <Route path="/Payment" element={ <PaymentPage/> } />
     </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  )
}

export default App;

