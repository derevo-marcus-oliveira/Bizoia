// Frameworks
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider, useFetcher } from "react-router-dom";

// Rotas
import Root from './Routers/Root';

// Arquivos / Componentes
import Itens from './Routers/Itens';
import Home from './Routers/Home';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement: <h1>ERRO</h1>,
        action: () => {    
             
          return redirect("/categoria/"+$("#search").val())
        },
      },
      {
        path: "categoria/:type",
        element: <Itens/>,
        errorElement: <h1>ERRO</h1>,
        loader: async ({params}) => {  
          await $.ajax({
            url: "http://localhost:3000/Itens",
            method: "GET",
            success: (response) => {              
              params.data = []
              if(response.filter((p) => p.type == params.type).length != 0){
                params.data.push(response.filter((p) => p.type == params.type));
              }
              else {
                response.map((p) => { 
                  debugger
                  var re = new RegExp(params.type, 'i')
                  if(p.type.search(re) != -1){
                    params.data.push(p);
                  }
                  else if(p.name.search(re) != -1){
                    params.data.push(p);
                  }
                  // else if(p.brand.search(re) != -1){
                    //data.push(p);
                  // }
                  // else if(p.model.search(re) != -1){
                    //data.push(p);
                  // }
                  else if(params.data.length <= 0){
                    params.data = []
                  }
                })
              }
            }
          });
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