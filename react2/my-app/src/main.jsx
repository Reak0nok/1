import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import { Root, loader as rootLoader } from './components/Root/Root'
import { ErrorPage404 } from './components/ErrorPage404/ErrorPage404'
import { Product } from './components/Product/Product'
import { StrictMode } from 'react'
  
const qwerty = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
    {
     path: 'products/:pructId',
     element: <Product />
     }
    ]
  },

]);   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={qwerty} />
  </StrictMode>,
)
