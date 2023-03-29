
function Offcanvas({children, type}) {
    var re = new RegExp(type, 'i')
    
    document.querySelectorAll(".form-check-input").forEach((p) => { p.checked = false })

    return (
        <div className="offcanvas offcanvas-end text-bg-dark" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Filtrar</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {"placa-mae".search(re) != -1 ? (
                    <>
                        <h4>Marcas</h4>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="Afox" />
                            <label className="form-check-label" htmlFor="Afox">Afox</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="Aorus" />
                            <label className="form-check-label" htmlFor="Aorus">Aorus</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="ASRock" />
                            <label className="form-check-label" htmlFor="ASRock">ASRock</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="Asus" />
                            <label className="form-check-label" htmlFor="Asus">Asus</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="Biostar" />
                            <label className="form-check-label" htmlFor="Biostar">Biostar</label>
                        </div>
                    </>
                ) : "memoria-ram".search(re) != -1 ? (
                    <>
                        <h4>Capacidade</h4>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="32GB" />
                            <label className="form-check-label" htmlFor="32GB">32GB</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="16GB" />
                            <label className="form-check-label" htmlFor="16GB">16GB</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="8GB" />
                            <label className="form-check-label" htmlFor="8GB">8GB</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="4GB" />
                            <label className="form-check-label" htmlFor="4GB">4GB</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="2GB" />
                            <label className="form-check-label" htmlFor="2GB">2GB</label>
                        </div>
                    </>
                ) : "placa-video".search(re) != -1 ? (
                    <>
                        <h4>GeForce RTX série 30</h4>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="RTX3050" />
                            <label className="form-check-label" htmlFor="RTX3050">RTX 3050</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="RTX3060" />
                            <label className="form-check-label" htmlFor="RTX3060">RTX 3060</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="RTX3070" />
                            <label className="form-check-label" htmlFor="RTX3070">RTX 3070</label>
                        </div>
                        <h4>Radeon RX série 6000</h4>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="RX6400" />
                            <label className="form-check-label" htmlFor="RX6400">RX 6400</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="RX6500XT" />
                            <label className="form-check-label" htmlFor="RX6500XT">RX 6500 XT</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="RX6600XT" />
                            <label className="form-check-label" htmlFor="RX6600XT">RX 6600 XT</label>
                        </div>
                    </>
                ) : "processador".search(re) != -1 ? (
                    <>
                        <h4>Marcas</h4>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="compabilidadeAMD" />
                            <label className="form-check-label" htmlFor="compabilidadeAMD">AMD</label>
                        </div>
                    </>
                ) : ( 
                    <>
                        <h4>Marcas</h4>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="compabilidadeAMD" />
                            <label className="form-check-label" htmlFor="compabilidadeAMD">AMD</label>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Offcanvas;