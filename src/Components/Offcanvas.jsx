import Filter from "./Filter";
import Buttons from "./Buttons";


function Offcanvas({ type, dados }) {

    return (
        <div className="offcanvas offcanvas-end text-bg-dark" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Filtrar</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <Filter type={type} dados={dados} />
                <br></br>
                <div >
                    <Buttons.Primary interation='offcanvas' methods={() => { }}>
                        Adicionar
                    </Buttons.Primary>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas;