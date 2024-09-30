import './App.css';
import Navbar from './assets/componentes/Navbar';
import Home from './assets/componentes/Home';
import Footer from './assets/componentes/Footer';
import Register from './assets/componentes/Register';
import Login from './assets/componentes/Login';

function App() {

  return (
    
      <div className="App">
        <Navbar/>
        <Register/>
        {/* <Login/> */}
        {/* <Home/> */}
        <Footer/>
      </div>
    
  );
}

export default App;