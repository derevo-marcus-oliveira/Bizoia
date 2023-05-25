

function Accordion({ props }) {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {props.Expecificacoes.map((p, id) => (
                <div className="accordion-item" key={id}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+id} aria-expanded="false" aria-controls={"flush-collapse" + id}>
                            {p.nome}
                        </button>
                    </h2>
                    <div id={"flush-collapse"+id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">{p.info}</div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Accordion