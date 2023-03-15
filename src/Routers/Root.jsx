import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Offcanvas from "../Components/Offcanvas";

// Essa será a rota principal ou seja a rota rais
function Root () {
    return(
        <>
            <Navbar/>
            <div className="container">
                <Outlet/>
                <Offcanvas/>
            </div>
        </>
    )
}

export default Root;