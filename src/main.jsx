import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donations from './Components/Donations/Donations';
import Statistics from './Components/Statistics/Statistics'
import Details from './Components/Details/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/donations',
        element:<Donations></Donations>,
        loader:()=> fetch('/Donations.json')
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/fund/:id',
        element:<Details></Details>,
        loader:()=> fetch('../Donations.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
