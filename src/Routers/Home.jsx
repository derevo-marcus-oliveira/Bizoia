
import "./Home.css"

function Home() {
    return (
        <>

            <div className="container-fluid text-center">
                <div class="row">
                    <div class="col" style={{padding: "122px 0"}}>
                        <i class="bi bi-airplane"></i>
                    </div>
                    <div class="col" style={{padding: "122px 0"}}>
                        
                    </div>
                    <div class="col" style={{padding: "122px 0"}}>
                        <i class="bi bi-alarm"></i>
                    </div>
                </div>
                <div class="row align-items-start">                    
                    <div class="col-3" style={{padding: "122px 0"}}>
                        <i class="bi bi-android"></i>
                    </div>
                    <div class="col" style={{padding: "118px 0"}}>                        
                        <div class="col">
                            <h1>Pesquise e Compare</h1>
                        </div>         
                        <div class="col">
                            <input type="text" className="form-control form-control-lg" placeholder="Search"/>
                        </div>                         
                    </div>
                    <div class="col-3" style={{padding: "122px 0"}}>
                        <i class="bi bi-arrow-clockwise"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col" style={{padding: "122px 0"}}>
                        <i class="bi bi-arrow-through-heart"></i>
                    </div>
                    <div class="col" style={{padding: "122px 0"}}>
                        <i class="bi bi-balloon"></i>
                    </div>
                    <div class="col" style={{padding: "122px 0"}}>
                        <i class="bi bi-bell-slash"></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;