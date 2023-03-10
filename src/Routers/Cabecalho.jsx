import { Form, Link } from "react-router-dom";


function Cabecalho() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Bizoia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"itens/placaMae"}>Placa mãe</Link></li>
                                    <li><Link className="dropdown-item" to={"itens/processador"}>Processador</Link></li>
                                    <li><Link className="dropdown-item" to={"itens/memoriaRAM"}>Memória RAM</Link></li>
                                </ul>
                            </li>                          
                        </ul>
                        {/* Usar Forms do react */}
                        <Form className="d-flex" role="search" method="post">
                            <input className="form-control me-2 filter" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </Form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Cabecalho;