import React from 'react'
import { useLoaderData } from "react-router-dom";
import Buttons from '../Components/Buttons';
import Card from '../Components/Card';
import Offcanvas from '../Components/Offcanvas';

function Itens() {

    const arr = useLoaderData();


    return (
        <div className="container">

            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
                <div className="p-3 col-10 ">
                    <h5>Pesquisa: <span>{arr.type}</span></h5>
                </div>

                <div className="p-2 col-2">
                    <div className="col-12 text-end">
                        <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => { ($(".offcanvas-backdrop").length > 1) ? $(".offcanvas-backdrop")[0].remove() : true }}>
                            <i className="bi bi-filter-circle"></i> Filtro
                        </button>
                    </div>
                    
                    <Offcanvas>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="compabilidadeAMD" />
                            <label className="form-check-label" htmlFor="compabilidadeAMD">Compatibilidade AMD</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="compabilidadeIntel" />
                            <label className="form-check-label" htmlFor="compabilidadeIntel">Compatibilidade Intel</label>
                        </div>
                        <div>
                            <label htmlFor="customRange1" className="form-label">Preço de</label>
                            <input type="range" className="form-range" min={"1"} max={"100"} id="customRange1"/>
                        </div>
                    </Offcanvas>
                </div>
            </div>
            <div className="row">
                {(arr.data.length > 0) ? arr.data.map((d) => (
                    <div key={d.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                        <Card props={d} />
                    </div>
                )) : (
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center" style={{padding: "300px 0"}}>
                        <h3>Nothing found</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Itens;