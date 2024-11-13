import React, { useState, useContext } from 'react'; 
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { register } = useContext(UserContext); 
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmacionContraseña, setConfirmacionContraseña] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (contraseña !== confirmacionContraseña) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            await register(email, contraseña);
            setError('');
            navigate('/profile');
        } catch (err) {
            setError(err.message || 'Error en el registro');
        }
    };

    return (
        <div className="logincontainer">
            <form className="loginform" onSubmit={handleSubmit}>
                {error ? <p className="alert">{error}</p> : null}

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
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Register;