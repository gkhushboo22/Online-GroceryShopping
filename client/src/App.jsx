import React from 'react'
import Navbar from './Component/Navbar'
import {Toaster} from 'react-hot-toast'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import { useAppContext } from './Content/AppContext'
import Login from './Component/Login'
import AllProducts from './Pages/AllProducts'
import ProductsCategory from './Pages/ProductsCategory'
import ProductsDetails from './Pages/ProductsDetails'
import Cart from './Pages/Cart'
import AddAddress from './Pages/AddAddress'
import MyOrders from './Pages/MyOrders'
import SellerLogin from './Component/Seller/sellerLogin'
import SellerLayout from './Pages/seller/SellerLayout'
import Addproducts from './Pages/seller/Addproducts'
import ProductList from './Pages/seller/ProductList'
import Orders from './Pages/seller/Orders'
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin , isSeller} = useAppContext();
  return (
    <div>
      {isSellerPath? null:<Navbar/>}
      {showUserLogin? <Login/> : null }
      <Toaster/>
      <div className={`${ isSellerPath? "" : "px-6 md:px-16 lg:px-24 xl:px-32 "}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/products/:category" element={<ProductsCategory/>}/>
          <Route path="/products/:category/:id" element={<ProductsDetails/>}/>
          <Route path="/add-address" element={<AddAddress/>}/>
          <Route path="/my-orders" element={<MyOrders/>}/>
          <Route path='/seller' element={isSeller ? <SellerLayout/>: <SellerLogin/>}>
              <Route index element={isSeller? <Addproducts/> : null}/>
              <Route path='product-list' element={<ProductList/>}/>
              <Route path='orders' element={<Orders/>}/>

          </Route>
        </Routes>
      </div>
     { !isSellerPath && <Footer/>}

    </div>
  )
}

export default App
