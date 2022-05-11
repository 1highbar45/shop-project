import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Contact from './pages/contact-us/Contact.jsx'
import About from './pages/about/About.jsx'
import FaQ from './pages/faq/FaQ.jsx'
import ComingSoon from './pages/comingsoon/ComingSoon.jsx'
import StoreLocator from './pages/locator/StoreLocator.jsx'
import OrderCompleted from './pages/order-completed/OrderCompleted.jsx'
import ShippingAndReturns from './pages/shipping-and-returns/ShippingAndReturns.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import Account from './pages/account/Account.jsx'
import Address from './pages/account/address/Address.jsx'
import Order from './pages/account/order/Order.jsx'
import PersonalInfo from './pages/account/PersonalInfo.jsx'
import Payment from './pages/account/payment/Payment.jsx'
import Product from './pages/product/Product.jsx'
import Wishlist from './pages/account/Wishlist/Wishlist.jsx'
import ProductDetail from './pages/product/[slug].jsx'
import Home from './pages/Home.jsx'
import { AUTH_PATH, BLOG_PATH, BLOG_POST_PATH, HOME_PATH, PRODUCT_DETAIL_PATH, PRODUCT_PATH } from './constants/path'
import Auth from './pages/Auth.jsx'
import { AppProvider } from './core'
import store from './store'
import vi from './locals/vi.json'
import en from './locals/en.json'
import Page404 from './pages/Page404/Page404.jsx'
import BlogPost from './pages/blog/[slug].jsx'
import Blog from './pages/blog/Blog.jsx'

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
          <Route path={BLOG_PATH} element={<Blog />} />
          <Route path={BLOG_POST_PATH} element={<BlogPost />} />
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
