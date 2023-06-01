
function Filter({ dados }) {
    
    var brand = []

    dados.map((item) => {
        if (brand.filter(d => d == item.marca).length == 0) {

            brand.push(item.marca);
        }
    })

    return (
        <>
            <h4>Marcas</h4>
            {brand.map((item, id) => (
                <div className="form-check form-switch" key={id}>
                    <input className="form-check-input" type="checkbox" role="switch" id={item} />
                    <label className="form-check-label" htmlFor={item}>{item}</label>
                </div>
            ))}

        </>
    )
}

export default Filter;