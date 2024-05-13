function test() {

    return (
        <>
        <i className="fa-solid fa-bars"></i>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand text-center">TEST</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="dropdownMenuButton2">
                                        <li><a className="dropdown-item active" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="">
                <div id="myCarousel" className="carousel slide mt-5 " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../picture/11.jpg")} className="d-block w-100" alt="..." width="1200px" height="600px" />

                            <div className="container">
                                <div className="carousel-caption text-start" >
                                
                                    <h1>Example headline.</h1>
                                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../picture/11.jpg")} className="d-block w-100" alt="..." width="1200px" height="600px" />

                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../picture/11.jpg")} className="d-block w-100" alt="..." width="1200px" height="600px" />

                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>Page 1</h1>
                                    <p>EIEI</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <footer className="container">
                    <p className="float-end"><a href="#">Back to top</a></p>
                    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>

            </div>

            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </>
    )
}

export default test;