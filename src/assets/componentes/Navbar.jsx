import { useContext } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
    const { calculateTotal } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);

    const total = calculateTotal();

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

                        {token ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        🦸‍♂️ Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>
                                        🔒 Logout
                                    </button>

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
                                <li>
                                    <Link className="nav-link" to='/profile'>
                                        🙆‍♂️ Profile
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