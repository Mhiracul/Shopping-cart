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
//import ProtectedRoute from '../src/pages/ProtectedRoute';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Wish from './pages/wishlist/Wish';
import ProductDetails from './pages/shop/ProductDetails';
import Privacy from './pages/shop/Privacy';
import Checkout from './pages/checkout/Checkout';
function App() {

  return (
    <div className='App'>
      
      <ShopContextProvider>
     <Router>
     <Nav/>
      
     <Routes>
     <Route path="/" element={ <Shop/> } />
     <Route path="/home" element={ <Home/> } />     
     <Route path="/privacy" element={ <Privacy/> } />     

     <Route path="/product/:id" component={<ProductDetails/>} />

      <Route path="/cart" element={ <Cart/> } />
      <Route path="/account" element={ <Login/> } />

      <Route path="/signUp" element={ <SignUp/> } />
      <Route path="/checkout" element={ <PaymentPage/> } />
      <Route path="/Check" element={ <Checkout/> } />
      <Route path="/wish" element={ <Wish/> } />
      
     </Routes>
     <Footer />
     </Router>
     </ShopContextProvider>
    </div>
  )
}

export default App;

