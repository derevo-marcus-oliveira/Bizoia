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
import enumerador from "../enumerador/enumerador.json"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    action: async () => {         
      
      let filter = $(".filter").val();
      return redirect("/itens/"+filter);
    },
    children: [
      {
        path: "/",
        element: <Home/>,
        action: async () => {         
          
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
          debugger

          var tipo = enumerador.tipoProduto.filter((i)=> params.type === i.type)
          
          params.name = tipo[0].name

          await $.ajax({
            url: "http://localhost:3000/Itens",
            method: "GET",
            success: (respose) => {              
              let filter = [];          
              $.each(respose, (index, item) => {                
                if(item.type.search(params.type) >= 0){
                  filter.push(item);
                }
              })              
              if(filter.length == 0){
                params.dados = respose;
              }
              else{                
                params.dados = filter;
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