import "./Card.css"

function Card({ props }) {
    
    return (
        
        <div className="card" >
            <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name}</p>
            </div>
        </div>  
        
    )
}

export default Card;