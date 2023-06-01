import Accordion from "../Components/Accordion"
import Scrollspy from "../Components/Scrollspy"
import { useLoaderData } from "react-router-dom";
import React from 'react'
import Carousel from "../Components/Carousel";

function Detalhe() {

    const dados = useLoaderData().Dados;
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row ">
                        <div className="view-G col-8">
                            <Carousel id={"view1"} img={dados.imagens} />
                        </div>
                        <div className="view-G col-4 " >
                            {/* <i className="bi bi-alarm"></i> */}
                            <div className="align-self-center" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
                                <h4 style={{ margin: 12 }}>{dados.nome}</h4>
                                <h6 style={{ marginLeft: 12 }}>Marca: {dados.marca}</h6>
                                <h6 style={{ marginLeft: 12 }}>Modelo: {dados.modelo}</h6>
                            </div>
                        </div>
                    </div>
                    <h1 className="display-3">Especificações</h1>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {dados.especificacoes.map((p, id) => (
                            <div className="accordion-item" key={id}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + p.especificacao.replace(/ /g, "")} aria-expanded="false" aria-controls={"flush-collapse" + p.especificacao.replace(/ /g, "")}>
                                        {p.especificacao}
                                    </button>
                                </h2>
                                <div id={"flush-collapse" + p.especificacao.replace(/ /g, "")} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">{p.especificacao_descricao}</div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <h1 className="display-3">Avaliações</h1>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {dados.commentarios.length > 0 ? dados.commentarios.map((p, id) => (
                            <div className="accordion-item" key={id}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + p.usuario_nome} aria-expanded="false" aria-controls={"flush-collapse" + p.usuario_nome}>
                                        {p.usuario_nome}
                                    </button>
                                </h2>
                                <div id={"flush-collapse" + p.usuario_nome} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">{p.comentario}</div>
                                </div>
                            </div>
                        )) : (
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"} aria-expanded="false" aria-controls={"flush-collapse"}>
                                        Sem comentários
                                    </button>
                                </h2>
                                <div id={"flush-collapse"} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"></div>
                                </div>
                            </div>
                        )}

                    </div>
                    <h1 className="display-3">Produtos compatíveis</h1>

                </div>
            </div>
        </div>
    )
}

export default Detalhe