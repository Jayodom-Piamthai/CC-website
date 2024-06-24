function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand dropdown ms-3">
                        <button className="btn navbar-brand dropdown-toggle no-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-bars fa-xl"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item text-center" style={{ fontSize: "24px" }} href="#">ACTIVITY & INFORMATION</a></li>
                            <li><a className="dropdown-item text-center" style={{ fontSize: "24px" }} href="#">VISION</a></li>
                            <li><a className="dropdown-item text-center" style={{ fontSize: "24px" }} href="applying">APPLYING</a></li>
                            <li><a className="dropdown-item text-center" style={{ fontSize: "24px" }} href="#">ACCOMPLISHMENT</a></li>
                            <li><a className="dropdown-item text-center" style={{ fontSize: "24px" }} href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="navbar-brand mx-auto">
                        <img src={require("../picture/Logo.png")} alt="" width="50%" height="50%" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;