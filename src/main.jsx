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
import Detalhe from './Routers/Detalhe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: async ({params}) => {

      var dados = "";

      await $.ajax({
        url: "http://localhost:3000/Enumeradores",
        method: "GET",
        success: (response) => {   
          dados = response;
        }
      });
      return dados;
    },
    
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement: <h1>ERRO</h1>,
        action: () => {    
             
          return redirect("/categoria/"+$("#search").val())
        }
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
              
              params.Dados = [];
              if(response.filter((p) => p.tipo == params.type).length != 0){
                params.Dados = response.filter((p) => p.tipo == params.type);
              }
              else {                 
                response.map((p) => {                   
                  var re = new RegExp(params.type, 'i')
                  if(p.tipo.search(re) != -1){
                    params.Dados.push(p);
                  }
                  else if(p.nome.search(re) != -1){
                    params.Dados.push(p);
                  }
                  else if(p.marca.search(re) != -1){
                    data.push(p);
                  }
                  else if(p.modelo.search(re) != -1){
                    data.push(p);
                  }
                  else if(params.Dados.length <= 0){
                    params.Dados = []
                  }
                })
              }
            }
          });
          
          return params;
        }
      },
      {
        path: "categoria/:type/detalhe/:id",
        element: <Detalhe/>,
        errorElement: <h1>ERRO</h1>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);