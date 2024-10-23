import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    const total = 25000;
    const token = false;

    return (
        <nav id="navbar" className="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Pizzería Mamma Mia!
                </a>
                <div className="navbar-links">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                🍕 Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/profile">
                                🙋‍♂️ Profile
                            </Link>
                        </li>

                        {token ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        🔓 Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        🔒 Logout
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        🔐 Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        🔐 Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <Link className="navbar-text" to='/cart' style={{textDecoration: "none"}} >
                    🛒 Total: ${total.toLocaleString('es-CL')}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;