
function Filter({type, dados}){

    var re = new RegExp(type, 'i');
    document.querySelectorAll(".form-check-input").forEach((p) => { p.checked = false })
    var brand = []

    dados.map((item) => {
        brand.push(item.brand);
    })


    return (
        <>
            {"placa-mae".search(re) != -1 ? (
                <>
                    <h4>Marcas</h4>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="Afox" />
                        <label className="form-check-label" htmlFor="Afox">Afox</label>
                    </div>
                    
                </>
            ) : (
                <>
                </>
            )}        
        </>
    )
}

export default Filter;