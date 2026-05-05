import CardVeiculo from './CardVeiculo'; 
import './inicio.css'
import carros from './carros.jsx';

function Inicio(){

return(
  
        <main>
                <section className="header-mensagem">
                  <div className="row py-lg-5">
                    <div>
                      <h1><b>OLDCARS</b></h1>
                      <p>
                        Confira nossos carros em destaque.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                  <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {carros.map(carro => (
                        
                            <CardVeiculo 
                              key={carro.id}
                              id={carro.id}
                              img={carro.imagens[0]}
                              titulo={carro.titulo}
                              preco={carro.preco}
                            />
                          
                         ))}
                      </div>
                  </div>
                </div>
        </main>
    );
}

export default Inicio;