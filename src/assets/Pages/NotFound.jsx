import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='notfound'>
            <h1>404 - Página No Encontrada</h1>
            <Link to="/">Volver a la página principal</Link>
        </div>
    );
}

export default NotFound;