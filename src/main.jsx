import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Home from './pages/home/Home.jsx';
import AllCoffee from './pages/AllCoffee.jsx';
import AddCoffee from './pages/AddCoffee.jsx';
import EditCoffee from './pages/EditCoffee.jsx';
import FullDetails from './pages/FullDetails.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://server-5twdi10qv-nifazurs-projects.vercel.app/coffees'),
      },
      {
        path: '/all-coffee',
        element: <AllCoffee></AllCoffee>,
        loader: () => fetch('https://server-5twdi10qv-nifazurs-projects.vercel.app/coffees')
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/edit-coffee/:id',
        element: <EditCoffee></EditCoffee>,
        loader: ({params}) => fetch(`https://server-5twdi10qv-nifazurs-projects.vercel.app/coffees/${params.id}`)
      },
      {
        path: '/coffees/:id',
        element: <FullDetails></FullDetails>,
        loader: ({params}) => fetch(`https://server-5twdi10qv-nifazurs-projects.vercel.app/coffees/${params.id}`)
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
