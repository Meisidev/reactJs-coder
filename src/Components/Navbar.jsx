import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import logo from './images/logo.png'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid bg-dark text-center">
                            <Link className="navbar-brand" to={"/"}><img src={logo} width={'48px'} alt= {'logo'}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href={"/"}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-light" href={"/"}>Novedades</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Juegos
                                    </a>
                                    <ul className="dropdown-menu bg-dark">
                                        <li><NavLink className="dropdown-item text-light" activeClassName={'active'} to={"/category/rpg"}>RPG</NavLink></li>
                                        <li><NavLink className="dropdown-item text-light" activeClassName={'active'} to={"/category/shooter"}>Shooter</NavLink></li>
                                        <li><NavLink className="dropdown-item text-light" activeClassName={'active'} to={"/category/battleroyale"}>Battle Royale </NavLink></li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-light" href='/'>Contacto</a>
                                    </li>
                                </ul>
                                <div className='col d-flex align-items-center justify-content-end'>
                                <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Juegos" aria-label="Search"/>
                                <button className="btn btn-outline-success text-primary" type="submit">Buscar</button>
                                </form>
                                </div>
                                <div className="col d-flex align-items-center justify-content-end">
                                    <CartWidget />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Navbar;