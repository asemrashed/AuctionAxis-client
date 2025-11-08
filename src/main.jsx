import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/home/Home.jsx'
import AllProduct from './pages/allProduct/AllProduct.jsx'
import MyProducts from './pages/myProducts/MyProducts.jsx'
import MyBids from './pages/myBids/MyBids.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import CreateProduct from './pages/createProduct/CreateProduct.jsx'
import AuthProvider from './context/AuthProvider'
import PrivetRoute from './routes/PrivetRoute.jsx'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children:[
      {
        index: true,
        loader: () => fetch('http://localhost:5000/latest-product').then(res => res.json()),
        Component: Home,
      },
      {
        path: "/products",
        loader: () => fetch('http://localhost:5000/products').then(res=> res.json()),
        Component: AllProduct
      },
      {
        path: '/products/:id',
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`).then(res => res.json()),
        Component: ProductDetailsPage
      },
      {
        path: "/myBids",
        element: <PrivetRoute> <MyBids/> </PrivetRoute>
      },
      {
        path: "/myProducts",
        element: <PrivetRoute> <MyProducts/> </PrivetRoute>
      },
      {
        path: "/createProduct",
        element: <PrivetRoute> <CreateProduct/> </PrivetRoute>
      }
    ]
  },
  {
    path:'/auth',
    Component: AuthLayout,
    children:[
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>
)
