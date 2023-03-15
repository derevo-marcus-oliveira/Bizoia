import React from 'react'
import { useLoaderData } from "react-router-dom";
import Buttons from '../Components/Buttons';
import Card from '../Components/Card';

function Itens() {
    
    const arr = useLoaderData();


    return (
        <>
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
                <div className="p-3 col-10 ">
                    <h5>Pesquisa: <span>{arr.type}</span></h5>
                </div>
                <div className=" p-2 col-2 text-end">
                    <Buttons.Secondary>
                        <i className="bi bi-filter-circle"></i> Filtro  
                    </Buttons.Secondary>
                </div>
            </div>
            <div className="row">
                {(arr.data.length > 0) ? arr.data.map((d) => (
                    <div key={d.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                        <Card props={d} />
                    </div>
                )) : (
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center">
                        <h3>Nothing found</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default Itens;