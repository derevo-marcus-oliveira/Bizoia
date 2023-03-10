
import db from "../../db/database2.json"
import "./Itens.css"
import { useFetcher, useNavigate, useLoaderData  } from "react-router-dom";


function Itens() {

    return (
        <div className="Itens">
            {db.Itens.filter((p) => useLoaderData() == p.type).map((item) => (    
                <div key={item.id} className="card">
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
