import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";

// Essa será a rota principal ou seja a rota rais
function Root () {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <div className="container">
            </div>
                
        </>
    )
}

export default Root;