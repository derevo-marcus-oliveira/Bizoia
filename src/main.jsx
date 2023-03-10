import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  redirect  
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
    action: async () => {         
      debugger
      let filter = $(".filter").val();
      return redirect("/itens/"+filter);
    },
    children: [
      {
        path: "/",
        element: <Home/>,
        action: async () => {         
          debugger
          let filter = $(".filter").val();
          return redirect("/itens/"+filter);
        }
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
        loader: async ({params}) => {
          
          await $.ajax({
            url: "http://localhost:3000/Itens",
            method: "GET",
            success: (respose) => {
              debugger
              let filter = [];
          
              $.each(respose, (index, item) => {
                debugger
                if(item.type.search(params.type) >= 0){
                  filter.push(item);
                }
              })
              
              if(filter.length == 0){
                params = respose;
              }
              else{
                
                params = filter;
              }
            }
          })

          return params;
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