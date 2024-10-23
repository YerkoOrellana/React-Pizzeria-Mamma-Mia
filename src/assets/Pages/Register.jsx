import React, { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmacionContraseña, setConfirmacionContraseña] = useState('');

    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        if (!email.trim() || !contraseña.trim() || !confirmacionContraseña.trim()) {
            setError(true);
            return;
        }

        if (!email.includes('@')) {
            alert('Por favor, ingresa un email válido.');
            return;
        }

        if (contraseña.length < 6) {
            alert('Tu contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (confirmacionContraseña !== contraseña) {
            alert('Ambas contraseñas deben ser iguales');
            return;
        }

        alert('Registro ingresado de manera exitosa!');

        setError(false);
        setEmail('');
        setContraseña('');
        setConfirmacionContraseña('');
    };

    return (
        <div className="logincontainer">
            <form className="loginform" onSubmit={validarDatos}>
                <h1>Register</h1>

                {error && <p style={{ color: 'red' }}>Todos los campos son obligatorios</p>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />

                <label htmlFor="confirmacionContraseña">Confirm Password</label>
                <input
                    type="password"
                    id="confirmacionContraseña"
                    placeholder="Confirm your password"
                    value={confirmacionContraseña}
                    onChange={(e) => setConfirmacionContraseña(e.target.value)}
                />

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;