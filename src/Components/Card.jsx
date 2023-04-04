import { useNavigate   } from "react-router-dom";

function Card({ props }) {
    const navigate = useNavigate();
    
    return (        
        <div className="card" onClick={() => {  navigate("detalhe/"+props.id) }}>
            <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name}</p>
            </div>
        </div>  
             
    )
}

export default Card;