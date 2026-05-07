import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Veiculo from './Veiculo';
import Inicio from './Inicio';
import Login from './Login';
import Cadastro from './Cadastro';
import logo from './logo.jpg';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>

        <div className="App">
          <header className="header-logo"> 
              <div> 
                  <Link to="/" className="navbar-brand"><img src={logo} alt="logo" width="80" height="80" className="me-2" /></Link>
              </div>    

              <div>
                <Link to="/login" className="botao-login">LOGIN</Link>
              </div>

          </header>
          
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}/>
            
            <Route path="/veiculo/:id" element={<Veiculo />}/>

            <Route path="/login" element={<Login />}/>

            <Route path="/cadastro" element={<Cadastro />} />

          </Routes>
        </main>


          <footer className="text-body-secondary py-5">
              <div className="container">
                  <p className="float-end mb-1">
                    <a href="#">Voltar ao topo</a>
                  </p>
                  <p className="mb-1">
                    Minha Vitrine &copy; 2025
                  </p>
              </div>
          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
