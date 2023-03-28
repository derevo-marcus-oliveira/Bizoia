import { Form } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            
            <div className="row">
                <div className="p-3 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row">
                <div className="b col-8">
                    <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src="https://i.pinimg.com/736x/5c/ee/af/5ceeafdc811d2269821fb03df29374ff.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="https://i.pinimg.com/736x/5c/ee/af/5ceeafdc811d2269821fb03df29374ff.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="https://i.pinimg.com/736x/5c/ee/af/5ceeafdc811d2269821fb03df29374ff.jpg" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                <div className="b col-4">
                    {/* <i className="bi bi-alarm"></i> */}
                    <div className="qualquer"></div>
                </div>
            </div>        
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row ">
                <div className="b col-6 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="a col-6 ">
                    {/* <i className="bi bi-airplane"></i> */} 
                    <div className="qualquer"></div>     
                    <div className="row ">
               
                        <div className="a col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <div className="qualquer"></div>      
                        </div>
                        <div className="a col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <div className="qualquer"></div>      
                        </div>    
                    </div>                               
                </div> 
            </div>                   
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
        </div>
    )
}

export default Home;