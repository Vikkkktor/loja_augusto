import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Veiculo from './Veiculo';
import Inicio from './Inicio';
import CardVeiculo from './CardVeiculo';
import logo from './logo.jpg';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>

        <div className="App">
          <header className="header-logo"> 
            <div id="navbarHeader"> 
              <div className="container"> 
              </div>
            </div> 
              <div> 
                <div className="container"> 
                      <Link to="/" className="navbar-brand"><img src={logo} alt="logo" width="80" height="80" className="me-2" /></Link>
                      
                </div> 
              </div>    
          </header>
          
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}/>
            
            <Route path="/veiculo/:id" element={<Veiculo />}/>
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
