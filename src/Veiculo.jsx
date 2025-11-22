import './Veiculo.css';
import carros from './carros';
import setaD from './seta-direita.png';
import setaE from './seta-esquerda.png';
import dataF from './ano.png';
import kmRo from './km_rodados.png';
import comb from './combustivel.png';
import cambi from './cambio.png';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Veiculo() {
    const { id } = useParams();
    const carro = carros.find((item) => item.id === parseInt(id));
    const [indiceFoto, setIndice] = useState(0);

    const[cep, setCEP] = useState("");
    const[cidade, setCidade] = useState("");
    const[uf, setUF] = useState("");

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

    const definirLogo = (titulo) => {
        const nomeFormatado = titulo.toLowerCase();

        if (nomeFormatado.includes("chevrolet")){
            return "https://www.chavesnamao.com.br/imn/0060x0042/D/cdn/portal/vehicle/logo/carro/chevrolet.png";
        }else if(nomeFormatado.includes("volkswagen")){
            return "https://www.chavesnamao.com.br/imn/0060x0042/D/cdn/portal/vehicle/logo/carro/volkswagen.png";
        }else if(nomeFormatado.includes("ford")){
            return "https://www.chavesnamao.com.br/imn/0060x0042/D/cdn/portal/vehicle/logo/carro/ford.png";
        }

        return "";
    }


        const buscarCEP = async () => {
            const CEPnum = cep.replace(/\D/g, '');
            if (CEPnum.length !== 8) {
                alert("CEP inválido: Deve conter apenas 8 números.");
                return;
            }

            const resposta = await fetch(`https://viacep.com.br/ws/${CEPnum}/json/`);
            const dados = await resposta.json();

            if (dados.erro) {
                alert("CEP não encontrado!");
                return;
            }

            setCidade(dados.localidade);
            setUF(dados.uf);

        }



  return(
        <div className="page">
            
            <div className="foto-carro">  
                <img src={setaE} onClick={voltarFoto} className='setas seta-esquerda'/>
                <img src={setaD} onClick={passarFoto} className='setas  seta-direita'/>
                <img src={carro.imagens[indiceFoto]} alt={carro.titulo} className="imagem-principal"/>                   
            </div> 
          
            <div className='descricao-carro'>
               
                <div className='conteudo-descricao'>
                   
                    <img src={definirLogo(carro.titulo)} className="Logo"/>
                    <b><p>{carro.titulo}</p></b>
                    
                    <div className='caracteristicas'>

                        <div className='item-info'> 
                            <img src={dataF} className='simbolos'/>
                            <span><b>{carro.ano}</b></span>
                        </div>

                         <div className='item-info'> 
                            <img src={kmRo} className='simbolos'/>
                            <span><b>{carro.km_rodados}</b></span>
                        </div>

                          <div className='item-info'> 
                            <img src={comb} className='simbolos'/>
                            <span><b>{carro.combustivel}</b></span>
                        </div>

                          <div className='item-info'> 
                            <img src={cambi} className='simbolos'/>
                            <span><b>{carro.cambio}</b></span>
                        </div>

                        
                    </div>
                    
                    <p>{carro.descricao}</p>
                

                <div className='botoes'>
                    <div className='linha-pesquisa'>
                        <button className='botao-whatsapp'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        Negociar
                      </button>
                        <input  type='text' className='entrada-cep' value={cep} onChange={(e) => setCEP(e.target.value)} placeholder="CEP"/>
                        <button className="botao-pesquisar" onClick={buscarCEP}>Pesquisar</button>
                 </div>
                 <div className='linha-resultado'>
                    <span>Cidade: {cidade}</span>
                    <br></br><span>uf: {uf}</span>
                </div>

                </div>

                </div>   

            </div>
        
        </div>
  );
}

export default Veiculo;