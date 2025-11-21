import './Veiculo.css';
import carros from './carros';
import setaD from './seta-direita.png';
import setaE from './seta-esquerda.png';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Veiculo() {
    const { id } = useParams();
    const carro = carros.find((item) => item.id === parseInt(id));
    const [indiceFoto, setIndice] = useState(0);

    if (!carro) {
    return <h2>Carro não encontrado!</h2>;
  }

    const passarFoto = () =>{
        if (indiceFoto === carro.imagens.length - 1){
            setIndice(0);
        }else{
            setIndice(indiceFoto + 1);
        }
    };

    const voltarFoto = () =>{
        if (indiceFoto === 0){
            setIndice(carro.imagens.length -1);
        }else{
            setIndice(indiceFoto - 1);
        }
    };

  return(
        <div className="page">
            <div className="foto-carro">  
                <img src={setaE} onClick={voltarFoto} className='setas seta-esquerda'/>
                <img src={setaD} onClick={passarFoto} className='setas  seta-direita'/>
                <img src={carro.imagens[indiceFoto]} alt={carro.titulo} className="imagem-principal"/>                   
            </div> 
            <div className='descricao-carro'>
                <p>{carro.titulo}</p>
                <p>{carro.descricao}</p>
            </div>
        </div>
  );
}

export default Veiculo;