import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        if (!email.trim() || !contraseña.trim()) {
            setError(true);
            return;
        }

        if (!email.includes('@')) {
            alert('El campo de email es inválido');
            return;
        }

        if (contraseña.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        alert('¡Datos ingresados correctamente!');

        setError(false);
        setEmail('');
        setContraseña('');
    };

    return (
        <div className="logincontainer">
            <form className="loginform" onSubmit={validarDatos}>
                <h1>Login</h1>
                {error && <p style={{ color: 'red' }}>Todos los campos son obligatorios</p>}
                
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder="Ingresa tu email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Ingresa tu contraseña" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)}
                />
                
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;