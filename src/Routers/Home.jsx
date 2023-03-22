import { Form } from "react-router-dom";

function Home() {
    return (
        <div className="container-fluid  home">
            <div className="row">
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4" style={{ padding: "60px 0" }}>
                    {/* <i className="bi bi-airplane"></i> */}
                    
                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4" style={{ padding: "60px 0" }}>

                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4" style={{ padding: "60px 0" }}>
                    {/* <i className="bi bi-alarm"></i> */}
                </div>
            </div>
            <div className="row ">
                <div className="col-sm-1 col-md-1 col-lg-3 col-xl-3 col-xxl-3" style={{ padding: "40px 0" }}>
                    {/* <i className="bi bi-android"></i> */}
                </div>
                
                <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 " style={{ padding: "40px 0" }}>
                        <div className="col-12 text-center" style={{ padding: "122px 0" }}>
                            <h1>Pesquise e Compare</h1>
                        </div>           

                        
                        
                </div>

                <div className="col-sm-1 col-md-1 col-lg-3 col-xl-3 col-xxl-3" style={{ padding: "40px 0" }}>
                    {/* <i className="bi bi-arrow-clockwise"></i> */}
                </div>
            </div>
            <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ padding: "60px 0" }}>
                    {/* <i className="bi bi-arrow-through-heart"></i> */}
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ padding: "60px 0" }}>
                    {/* <i className="bi bi-balloon"></i> */}
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" style={{ padding: "60px 0" }}>
                    {/* <i className="bi bi-bell-slash"></i> */}
                </div>
            </div>
        </div>
    )
}

export default Home;