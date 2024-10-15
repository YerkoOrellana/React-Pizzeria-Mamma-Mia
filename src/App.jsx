import './App.css';
import Navbar from './assets/componentes/Navbar';
import Home from './assets/componentes/Home';
// import Cart from './assets/componentes/Cart';
import Pizza from './assets/componentes/Pizza';
import Footer from './assets/componentes/Footer';
// import Register from './assets/componentes/Register';
// import Login from './assets/componentes/Login';

function App() {

  return (
    
      <div className="App">
        <Navbar/>
        <Pizza/>
        {/* <Register/>
        <Login/>
        <Home/>
        <Cart/> */}
        <Footer/>
      </div>
  );
}

export default App;