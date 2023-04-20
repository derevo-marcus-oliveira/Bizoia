import { useNavigate } from "react-router-dom";

function Card({ props }) {
    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => { navigate("detalhe/" + props.id) }}>
            <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text">{props.marca} - <span>{props.modelo}</span></p>
                <div>
                    {props.info.map((p) => (
                        <>
                            <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{p[0]}</label>
                            <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                                <div className="progress-bar  progress-bar-striped progress-bar-animated" style={{ "width": p[1]+"%" }}></div>
                            </div>
                        </>
                    ))}                   
                    
                </div>
               
            </div>
        </div>

    )
}

export default Card;