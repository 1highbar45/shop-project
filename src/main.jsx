import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/dest/css/libs/theme.min.css'
import './assets/dest/css/stylelibs.min.css'
import store from './store'
import 'antd/dist/antd.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
)
