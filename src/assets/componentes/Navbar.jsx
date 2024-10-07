import React from "react";

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
                            <a className="nav-link" aria-current="page" href="#">
                                🍕 Home
                            </a>
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
                                    <a className="nav-link" href="#">
                                        🔐 Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        🔐 Register
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <span className="navbar-text">
                    🛒 Total: ${total.toLocaleString('es-CL')}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;