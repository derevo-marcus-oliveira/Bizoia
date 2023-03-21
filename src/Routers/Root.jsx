import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";

// Essa será a rota principal ou seja a rota rais
function Root () {
    return(
        <>
            <Navbar/>
                {window.location.pathname != "/" ? (
                <div className="container">
                    <Outlet/>
                </div>
                ) : (
                    <>
                        <Home/>
                    </>
                )}
                
        </>
    )
}

export default Root;