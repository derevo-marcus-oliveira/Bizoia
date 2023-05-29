import { Form } from "react-router-dom";
import Carousel from "../Components/Carousel";

function Home() {
    
var img = [
    "https://i.ibb.co/bH3D3c7/5.png",
    "https://i.ibb.co/W0n0gXT/4.png",
    "https://i.ibb.co/FJBHxby/3.png"
]

    return (
        <div className="container">
            
            <div className="row">
                <div className="p-3 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row">
                <div className="view-G col-8">
                    <Carousel id={"view1"} img={img}/>  
                </div>  
                <div className="view-G col-4">
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
                <div className="view-G col-6 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-6 ">
                    {/* <i className="bi bi-airplane"></i> */} 
                    <div className="qualquer"></div>     
               
                    <div className="row ">
                        <div className="view-M col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <Carousel id={"view2"} img={img}/>  
                        </div>
                        <div className="view-M col-6">
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
            <div className="row ">
                <div className="view-M col-3 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-3 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-3 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-3 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                
            </div>                   
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row ">
                <div className="view-M col-6 ">
                    {/* <i className="bi bi-airplane"></i> */} 
                    <div className="row ">              
                        <div className="view-M col-6 ">
                            {/* <i className="bi bi-airplane"></i> */}
                            <div className="qualquer"></div>                   
                        </div>
                        <div className="view-M col-6 ">
                            {/* <i className="bi bi-airplane"></i> */}
                            <div className="qualquer"></div>                   
                        </div>
                    </div>
                </div>
                <div className="view-M col-6 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-3 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-3 ">
                    <div className="view-P col-12 ">
                        {/* <i className="bi bi-airplane"></i> */}
                        <div className="qualquer"></div>                   
                    </div>
                    <div className="view-P col-12 ">
                        {/* <i className="bi bi-airplane"></i> */}
                        <div className="qualquer"></div>                   
                    </div>               
                </div>
                
                <div className="view-P col-6 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <div className="qualquer"></div>     
                    <div className="row">
                        <div className="view-P col-6 ">
                            {/* <i className="bi bi-airplane"></i> */}
                            <Carousel id={"view3"} img={img}/>               
                        </div>
                        <div className="view-P col-6 ">
                            {/* <i className="bi bi-airplane"></i> */}
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