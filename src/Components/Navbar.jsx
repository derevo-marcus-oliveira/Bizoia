import { Form, Link, redirect } from "react-router-dom";

import e from "../../data/enum/enum.json"


function Navbar() {

    document.addEventListener("click", (item) => {
        if ($(item.target).parents(".navbar").length == 0) {
            $(".navbar-collapse").removeClass("show");
        }
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Bizóia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categoria
                                </a>
                                <ul className="dropdown-menu">
                                    {e.Routers.map((p) => (
                                        <li key={p.id}>
                                            <Link className="dropdown-item" to={"categoria/" + p["name-router"]}>{p.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <Form className="d-flex" method="post">
                            <input type="text" id="search" required className="form-control" aria-label="Search" placeholder="Search" />
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