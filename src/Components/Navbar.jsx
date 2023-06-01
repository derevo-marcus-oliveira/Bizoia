import { Form, Link, redirect, useLoaderData } from "react-router-dom";

function Navbar() {
    
    const e = useLoaderData();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{fontSize: "2.5em"}} to={"/"}>Bizóia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "1.25em"}}>
                                    Categoria
                                </a>
                                <ul className="dropdown-menu">
                                    {e.data.map((p) => (
                                        <li key={p.id}>
                                            <Link className="dropdown-item" to={"categoria/" + p["tipo"]}>{p.descricao}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <Form className="d-flex" method="post">
                            <input type="text" id="search" required className="form-control" aria-label="Search" placeholder="Search" style={{width: 460}}/>
                            <button className="btn btn-outline-success" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </Form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;