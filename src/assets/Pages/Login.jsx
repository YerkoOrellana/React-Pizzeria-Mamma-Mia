import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, contraseña);
            setError('');
            navigate('/profile');
        } catch (err) {
            setError(err.message);
        };
    };

    return (
        <div className="logincontainer">
            <form className="loginform" onSubmit={handleSubmit}>
                {error ? <p style={{ color: 'red' }}>{error}</p> : null}
                
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
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Login;