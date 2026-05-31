import React, { useState, useEffect } from 'react';
import CardVeiculo from './CardVeiculo'; 
import './inicio.css'

function Inicio(){
  const [listaVeiculos, setListaVeiculos] = useState([]);

  useEffect(() => {
        fetch('http://localhost:5000/veiculos')
            .then(res => res.json())
            .then(data => {
      
                if (!data.erro) {
                    setListaVeiculos(data);
                }
            })
            .catch(err => console.error("Erro ao buscar veículos:", err));
    }, []);
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
                        {listaVeiculos.length > 0 ? (
                            listaVeiculos.map(carro => (
                                <CardVeiculo 
                                    key={carro.id}
                                    id={carro.id}
                                    img={`http://localhost:5000/uploads/${carro.capa}`}
                                    titulo={`${carro.marca} ${carro.modelo}`}
                                    preco={carro.valor} 
                                />
                            ))
                        ) : (
                            <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
                                <h4>Nenhum veículo cadastrado no momento.</h4>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Inicio;