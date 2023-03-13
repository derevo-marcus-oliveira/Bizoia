
import db from "../../db/database2.json"
import "./Itens.css"
import { useLoaderData } from "react-router-dom";


function Itens({prop}) {

    debugger
    const loader = useLoaderData()


    return (
        <>
            <div className="col-12">
                <div className="p-5"></div>
            </div>
            <div className="col-12">
                <div className="p p-3">
                    <h5>Pesquisa: <span className="pesquisa">{loader.name}</span></h5>
                </div>
            </div>
            <div className="row">

                {loader.dados.map((item) => (
                    <div key={item.id} className="card col col-4" style={{ width: "20rem" }}>
                        <img src={item.ImagemPricipal} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Descricao</p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Itens
