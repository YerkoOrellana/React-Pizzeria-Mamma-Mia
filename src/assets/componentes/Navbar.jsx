import React from "react";

function Navbar() {
    
    const total = 25000;
    const token = false;

    return (
        <div className="navbar">
            <a className="active" href="#">Pizzeria Mamma Mia</a>
            <a href="#">🍕 Home</a>

            {token ? (
                <>
                    <a href="#">🔓 Profile</a>
                    <a href="#">🔒 Logout</a>
                </>
            ) : (
                <>
                    <a href="#">🔐 Login</a>
                    <a href="#">🔐 Register</a>
                </>
            )}

            <div className="carrito">
                <a href="#about">🛒 Total: ${total.toLocaleString('es-CL')}</a>
            </div>
        </div>
    );
}

export default Navbar;


