import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Blog from './pages/blog/Blog'
import BlogPost from './pages/blogpost/BlogPost'
import Contact from './pages/contact-us/Contact'
import About from './pages/about/About'
import FaQ from './pages/faq/FaQ'
import ComingSoon from './pages/comingsoon/ComingSoon'
import StoreLocator from './pages/locator/StoreLocator'
import OrderCompleted from './pages/order-completed/OrderCompleted'
import ShippingAndReturns from './pages/shipping-and-returns/ShippingAndReturns'
import Checkout from './pages/checkout/Checkout'
import Account from './pages/account/Account'
import Address from './pages/account/address/Address'
import Order from './pages/account/order/Order'
import PersonalInfo from './pages/account/PersonalInfo'
import Payment from './pages/account/payment/Payment'
import Product from './pages/Product/Product'
import Wishlist from './pages/account/Wishlist/Wishlist'
import ProductDetail from './pages/product/[slug]'
import Home from './pages/Home'
import { AUTH_PATH, HOME_PATH, PRODUCT_DETAIL_PATH, PRODUCT_PATH } from './constants/path'
import Auth from './pages/Auth'
import { AppProvider } from './core'
import store from './store'
import vi from './locals/vi.json'
import en from './locals/en.json'
import Page404 from './pages/Page404/Page404'

function App() {

  return (
    <AppProvider store={store} translate={{ en, vi }} local='en'>
      {/* <div className="App"> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faq' element={<FaQ />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-post' element={<BlogPost />} />
          <Route path='/store-locator' element={<StoreLocator />} />
          <Route path='/order-completed' element={<OrderCompleted />} />
          <Route path='/shipping-and-returns' element={<ShippingAndReturns />} />
          <Route path={AUTH_PATH} element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path={PRODUCT_PATH} element={<Product />} />
          <Route path={PRODUCT_DETAIL_PATH} element={<ProductDetail />} />
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
      {/* </div> */}
    </AppProvider>
  )
}

export default App
