


function Carousel({ id, img }) {
    
    return (

        <div id={"carouselExampleInterval"} className={"carousel slide " + id} data-bs-ride="carousel">

            <div className="carousel-inner">
                {img ? (
                    <div>

                        {img.map((p, id) => (
                            (id == 0) ? (
                                <div className="carousel-item active"  data-bs-interval="2000" key={id}>
                                    <img src={p.url} className="d-block w-100" alt="..." />
                                </div>
                            ) : (
                                <div className="carousel-item"  data-bs-interval="2000" key={id}>
                                    <img src={p.url} className="d-block w-100" alt="..." />
                                </div>
                            )

                        ))}
                    </div>
                ) : (
                    <>

                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="https://i.pinimg.com/736x/5c/ee/af/5ceeafdc811d2269821fb03df29374ff.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQh5g9ZRjOlonwUfjVXkn0rBY8AQ2uNw0CQ&usqp=CAU" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_elzz8mhD5TRzPhlHUshZvgb3zQ5smRaAg&usqp=CAU" className="d-block w-100" alt="..." />
                        </div>
                    </>
                )}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={"." + id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"." + id} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;