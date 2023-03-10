
import db from "../../db/database2.json"
import "./Itens.css"
import { useFetcher, useNavigate, useLoaderData  } from "react-router-dom";


function Itens() {

    return (
            <div class="row">
                {useLoaderData().map((item) => (    
                    <div key={item.id} className="card col col-4" style={{width:"20rem"}}>
                        <img src={item.ImagemPricipal} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Descricao</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Itens
