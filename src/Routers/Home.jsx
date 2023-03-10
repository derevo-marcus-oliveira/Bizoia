
import imgC from "../../img/cerebelo.jpg"
import imgB from "../../img/plante-blue.jpg"

import "./Home.css"

function Home() {
    return (

        <div class="container">
            <div class="row">
                <div class="col col-2">
                    Column
                </div>
                <div class="col col-8">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.luis.blog.br/userfiles/image/imagem-no-formato-gif.gif" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.luis.blog.br/userfiles/image/imagem-no-formato-gif.gif" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.luis.blog.br/userfiles/image/imagem-no-formato-gif.gif" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-dark" data-bs-theme="dark" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col col-2">
                    Column
                </div>
            </div>
            <div class="row">
            </div>
        </div>

    )
}

export default Home;