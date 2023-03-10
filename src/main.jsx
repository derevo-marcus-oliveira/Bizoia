import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Itens from './Routers/Itens';
import App from './App';
import DetalheItem from './Routers/DetalheItem';
import Home from './Routers/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        children: [
          
        ]
      },
      {
        path: "/itens",
        element: <Itens/>,
        children: [
          
        ]
      },
      { 
        path: "/itens/:type",
        element: <Itens/>,
        loader: async ({ params }) => {
          
          return params.type
        } 
      }    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);