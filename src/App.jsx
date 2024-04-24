import React from 'react';
import {BrowserRouter as Router , Route , Routes , Outlet} from 'react-router-dom'

import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts"
import Hero from "./components/Hero/Hero"
import Service from "./components/Services/Service"
import Shoppage from './pages/Shoppage/Shoppage'
import Homepage from './pages/Homepage/Homepage'
import Navbar2 from "./components/Navbar/Navbar2"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import Footer from "./components/Footer/Footer"
import Footer2 from "./components/Footer/Footer2"
import FeaturedProductGrid from "./components/FeaturedProductGrid/FeaturedProductGrid"
import SignUp from "./components/SignUp/SignUp"
import Navbar from "./components/Navbar/Navbar"
import TopCategories from "./components/TopCategories/TopCategories"
import LoginForm from './components/LoginForm/LoginForm';
import Wishlist from './components/Wishlist/Wishlist';


import Layout from './components/Layout/Layout';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './pages/Login'
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { NavbarProvider } from './components/Navbar/NavbarContext';
import Cart from './components/Cart/Cart';

const App = () => {
  
  return (
    <Router>
      <NavbarProvider>
            <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          
            <Homepage />
         
        }
      />
      <Route
        path="/shop"
        element={
          
            <Shoppage />
          
        }
      />
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/products/cart" element={<Cart/>} />
      <Route path="/products/wishlist" element={<Wishlist/>} />
      <Route
        path="/login"
        element={
          
            <LoginForm/>
          
        }
      />
      <Route
        path="/login/signup"
        element={
          
            <SignUp />
          
        }
      />
      <Route
        path="/register"
        element={
          
            <Register />
          
        }
      />
      <Route
        path="/*"
        element={
          
            <NotFound />
          
        }
      />
      </Route>
    </Routes>
    </NavbarProvider>
  </Router>
  );
};

export default App

/*
  <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          
            <Homepage />
         
        }
      />
      <Route
        path="/shop"
        element={
          
            <Shoppage />
          
        }
      />
      <Route
        path="/login"
        element={
          
            <LoginForm />
          
        }
      />
      <Route
        path="/login/signup"
        element={
          
            <SignUp />
          
        }
      />
      </Route>
    </Routes>
  </Router>
      
      */