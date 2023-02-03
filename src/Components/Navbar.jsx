import logo from './images/logo.png'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid bg-dark text-center">
                            <a className="navbar-brand" href={"/"}><img src={logo} width={'48px'}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href={"/"}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-light" href={"/"}>Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Juegos
                                    </a>
                                    <ul className="dropdown-menu bg-dark">
                                        <li><a className="dropdown-item text-light" href={"/"}>Accion</a></li>
                                        <li><a className="dropdown-item text-light" href={"/"}>Terror</a></li>
                                        <li><a className="dropdown-item text-light" href={"/"}>Aventura </a></li>
                                        <li><a className="dropdown-item text-light" href={"/"}>Disparos</a></li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-light">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn btn-outline-success text-primary" type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Navbar