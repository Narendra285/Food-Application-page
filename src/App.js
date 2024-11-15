
import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './component/Footer/Footer';
import Payment from './pages/Payment/Payment';
import LoginPopup from './component/LoginPopup/LoginPopup'
import Navbar from './component/Navbar/Navbar';


const App=()=>{
  const [showLogin,setShowLogin] = useState(false);
  return(
    <>
    {showLogin && LoginPopup}
    <div className="app">
    <Navbar setShowLogin = {setShowLogin}/>
    <Routes className ="routes">
      <Route path = "/" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path ="/Order" element={<PlaceOrder />}/>
      <Route path="/Payment" element={<Payment/>} />


    </Routes>
    </div>
    <Footer />
    <LoginPopup />
    </>
  );
};
export default App;

