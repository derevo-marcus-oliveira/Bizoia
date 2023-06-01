// Frameworks
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider, useFetcher } from "react-router-dom";
import axios from 'axios';

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
    element: <Root />,
    loader: async ({ params }) => {
      
      var dados = "";

      await axios.get("http://localhost:4003/BuscarEnum")
      .then((response) => {
        dados = response;
      });

      return dados;
    },

    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <h1>ERRO</h1>,
        action: () => {

          return redirect("/categoria/" + $("#search").val())
        }
      },
      {
        path: "categoria/:type",
        element: <Itens />,
        errorElement: <h1>ERRO</h1>,
        loader: async ({ params }) => {
          

          var novoParams = params.type.search(",") > -1 ? params.type.split(",") : params.type

          await axios.get("http://localhost:4003/Buscar", )
            
            .then((response) => {
              debugger
              params.Dados = [];
              if(Array.isArray(novoParams)){
                
                novoParams.forEach(element => {
                  debugger
                  params.Dados.push( response.data.filter((p) => p.marca == element))
               }); 
              }
              else{
                if (response.data.filter((p) => p.tipo == params.type).length != 0) {
                  params.Dados = response.data.filter((p) => p.tipo == params.type);
                }
                else {
                  response.data.map((p) => {
                    var re = new RegExp(params.type, 'i')
                    if (p.tipo.search(re) != -1) {
                      params.Dados.push(p);
                    }
                    else if (p.nome != null && p.nome.search(re) != -1) {
                      params.Dados.push(p);
                    }
                    else if (p.marca != null && p.marca.search(re) != -1) {
                      data.push(p);
                    }
                    else if (p.modelo != null && p.modelo.search(re) != -1) {
                      data.push(p);
                    }
                    else if (params.Dados.length <= 0) {
                      params.Dados = []
                    }
                  })
                }
              }
              
            })          
            .catch((error) => {
              
              console.log("Erro", error)
            })



          return params;
        }
      },
      {
        path: "categoria/:type/detalhe/:id",
        element: <Detalhe />,

        errorElement: <h1>ERRO</h1>,
        loader: async ( {params} ) => {
      
           
          
          params.Dados = [];
          await axios.get("http://localhost:4003/Buscar")
        
          .then((response) => {
            
            response.data.map((p) => {
              if (p.id == params.id) {
                params.Dados = p;
              }              
            })
          })
          .catch((error) => {
            
            console.log("Erro", error)
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
