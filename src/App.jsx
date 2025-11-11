import CardProduto from './CardProduto';
import logo from './logo.jpg';
import './App.css';

function App() {

    const ListaCarros = [
      {
        id: 1,
        titulo: "chevette 2001",
        preco: "32.000",
        imagem: "https://www.chavesnamao.com.br/imn/1200x0800/N/75/veiculos/18960/7968767/chevrolet-chevette-em-curitiba-pr-10045068d579-00.jpg"
      },
      {
        id: 2,
        titulo: "F-250",
        preco: "160.000",
        imagem: "https://www.chavesnamao.com.br/imn/0000x0000/N/75/veiculos/99015/8042126/ford-f-250-em-belo-horizonte-mg-9c9dca5f.jpg"
      },
      {
        id: 3,
        titulo: "Kombi",
        preco: "35.000",
        imagem: "https://www.chavesnamao.com.br/imn/0000x0000/N/75/veiculos/119008/8053610/volkswagen-kombi-em-jundiai-sp-fa95dbc0.jpg"
      },
      {
        id: 4,
        titulo: "Saveiro",
        preco: "40.000",
        imagem: "https://www.chavesnamao.com.br/imn/1200x0800/N/75/veiculos/160100/7976622/volkswagen-saveiro-em-osorio-rs-c0fbbf7f.jpg"
      },
      {
        id: 5,
        titulo: "Silverado",
        preco: "170.000",
        imagem: "https://www.chavesnamao.com.br/imn/1200x0800/N/75/veiculos/993908/8014587/chevrolet-silverado-em-jundiai-sp-9a87d524.jpg"
      },
      {
        id: 6 ,
        titulo: "Pampa",
        preco: "30.000",
        imagem: "https://www.chavesnamao.com.br/imn/1200x0800/N/75/veiculos/189768/7951309/ford-pampa-em-belo-horizonte-mg-a346f9d0.jpg"
      }
    ]

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
              <h1 className="fw-light"><b>OLDCARS</b></h1>
              <p className="lead text-body-secondary">
                Confira nossos carros em destaque.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {ListaCarros.map(carro => (
                <CardProduto 
                  key={carro.id}
                  img={carro.imagem}
                  nome={carro.titulo}
                  preco={carro.preco}
                />
              ))}
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
