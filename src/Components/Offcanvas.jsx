


function Offcanvas() {
    return (
        <>
            {/* <button onClick={() => { ($(".offcanvas-backdrop").length > 1) ? $(".offcanvas-backdrop")[0].remove() : true }} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
            

            <div className="offcanvas offcanvas-end" tabIndex={"-1"} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </>
    )
}

export default Offcanvas;