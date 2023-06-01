import Filter from "./Filter";
import Buttons from "./Buttons";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Offcanvas({ type, dados }) {

    useEffect(() => {
        $(".offcanvas-body input").on("click", (item) => {
            
            if (item.target.checked == true) {
                
                arr.push(item.target.id)
            }
        })    
    })
    
    return (
        <div className="offcanvas offcanvas-end text-bg-dark" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Filtrar</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <Filter dados={dados} />
                <br></br>
                <div >
                    <Link to={"/categoria/" + arr.join()}>
                        Adicionar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas;