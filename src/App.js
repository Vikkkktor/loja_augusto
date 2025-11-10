import CardProduto from './CardProduto';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header data-bs-theme="dark"> 
        <div className="collapse text-bg-dark" id="navbarHeader"> 
          <div className="container"> 
           <div className="row"> 
              <div className="col-sm-8 col-md-7 py-4"> 
                <h4>About</h4> 
                <p className="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
              </div> 
           </div> 
          </div>
        </div> 
          <div className="navbar navbar-dark bg-dark shadow-sm"> 
            <div className="container"> 
                <a href="#" className="navbar-brand d-flex align-items-center">
                  <img src={logo} alt="logo" width="80" height="80" className="me-2" /></a> 
            </div> 
          </div>    
      </header>


      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Vitrine de Produtos</h1>
              <p className="lead text-body-secondary">
                Confira nossos produtos em destaque.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>
          </div>
        </div>
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
  );
}

export default App;
