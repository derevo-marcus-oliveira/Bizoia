
import { Form } from "react-router-dom";
import "./Home.css"

function Home() {
    return (
        <div className="container-fluid text-center home">
            <div className="row">
                <div className="col" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-airplane"></i> */}
                </div>
                <div className="col" style={{padding: "122px 0"}}>
                    
                </div>
                <div className="col" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-alarm"></i> */}
                </div>
            </div>
            <div className="row align-items-start">                    
                <div className="col-3" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-android"></i> */}
                </div>
                <div className="col" style={{padding: "118px 0"}}>                        
                    <div className="col">
                        <h1>Pesquise e Compare</h1>
                    </div>         
                    <div className="col">
                        <Form method="post">
                            <input type="text" id="search" className="form-control form-control-lg" placeholder="Search"/>
                            
                            <button className="btn btn-primary btn-search" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </Form>
                    </div>                         
                </div>
                <div className="col-3" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-arrow-clockwise"></i> */}
                </div>
            </div>
            <div className="row">
                <div className="col" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-arrow-through-heart"></i> */}
                </div>
                <div className="col" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-balloon"></i> */}
                </div>
                <div className="col" style={{padding: "122px 0"}}>
                    {/* <i className="bi bi-bell-slash"></i> */}
                </div>
            </div>
        </div>
    )
}

export default Home;