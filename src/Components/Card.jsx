import { useNavigate } from "react-router-dom";

function Card({ props }) {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => { navigate("detalhe/" + props.id) }}>
            <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name}</p>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar  progress-bar-striped progress-bar-animated" style={{ "width": "75%" }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar  progress-bar-striped progress-bar-animated bg-warning" style={{ "width": "75%" }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ "width": "75%" }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ "width": "75%" }}></div>
                    </div>
                </div>
                
                
                
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar " style={{ "width": "75%" }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar bg-warning" style={{ "width": "75%" }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar bg-danger" style={{ "width": "75%" }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{props.name}</label>
                    <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                        <div className="progress-bar bg-success" style={{ "width": "75%" }}></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;