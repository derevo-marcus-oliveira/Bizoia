import Accordion from "../Components/Accordion"
import Scrollspy from "../Components/Scrollspy"
import { useLoaderData } from "react-router-dom";
import React from 'react'
import Carousel from "../Components/Carousel";

function Detalhe() {
    
    const dados = useLoaderData().Dados;

    debugger
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="view-G col-8">
                            <Carousel id={"view1"} img={dados.imagens}/>
                        </div>
                        <div className="view-G col-4">
                            {/* <i className="bi bi-alarm"></i> */}
                            <div className="qualquer"></div>
                        </div>
                    </div>
                    <h1 class="display-3">Especificações</h1>
                    <Accordion props={dados}/>
                    <Scrollspy />
                </div>
            </div>
        </div>
    )
}

export default Detalhe