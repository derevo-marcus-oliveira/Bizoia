
function Offcanvas({children}) {
    return (
        <div className="offcanvas offcanvas-end bg-dark-subtle" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Filtro</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {children}
            </div>
        </div>
    )
}

export default Offcanvas;