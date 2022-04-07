import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'
import Contact from './pages/ContactUs/Contact'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import FaQ from './pages/FAQ/FaQ'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import Page404 from './pages/Page404/Page404'
import StoreLocator from './pages/StoreLocator/StoreLocator'
import OrderCompleted from './pages/OrderCompleted/OrderCompleted'
import ShippingAndReturns from './pages/ShippingAndReturns/ShippingAndReturns'
import Auth from './pages/Auth/Auth'
import Checkout from './pages/Checkout/Checkout'
import Account from './pages/Account/Account'
import Address from './pages/Account/components/Address/Address'
import Order from './pages/Account/components/Order/Order'
import Wishlist from './pages/Account/components/Wishlist/Wishlist'
import PersonalInfo from './pages/Account/components/PersonalInfo'
import Payment from './pages/Account/components/Payment/Payment'
import Product from './pages/Product/Product'
// import { AppProvider } from './core'

function App() {

  return (
    // <AppProvider store={store}>
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faq' element={<FaQ />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-post' element={<BlogPost />} />
          <Route path='/store-locator' element={<StoreLocator />} />
          <Route path='/order-completed' element={<OrderCompleted />} />
          <Route path='/shipping-and-returns' element={<ShippingAndReturns />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product' element={<Product />} />
          <Route path='/account' element={<Account path="/account" />} >
            <Route index element={<PersonalInfo />} />
            <Route path='order' element={<Order />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='address' element={<Address />} />
            <Route path='payment' element={<Payment />} />
          </Route>
        </Route>
        <Route path='/coming-soon' element={<ComingSoon />} />
      </Routes>
    </div>
    // </AppProvider>
  )
}

export default App
