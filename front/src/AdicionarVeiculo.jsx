import React, { useState } from 'react';
import './AdicionarVeiculo.css';

function AdicionarVeiculo(props){

    const [imagens, setImagens] = useState([]);
    const [indiceAtivo, setIndiceAtivo] = useState(0);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');   
    const [valor, setValor] = useState(''); 
    const [ano, setAno] = useState('');
    const [km, setKM] = useState('');
    const [combustivel, setCombustivel] = useState('');
    const [cambio, setCambio] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const cadastrarVeiculo = (event) => {
        event.preventDefault();
        
        if (imagens.length < 5) {
            alert(`Você precisa adicionar no mínimo 5 imagens. (Atual: ${imagens.length})`);
            return;
        }

        if (!marca || !ano || !km || !combustivel || !cambio) {
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }

        const usuarioIdLogado = localStorage.getItem('usuarioId');

        if (!usuarioIdLogado) {
            setMensagemErro('Você precisa estar logado na sua conta para cadastrar um veículo.');
            return; 
        }

        const formData = new FormData();
        formData.append('usuarioId', usuarioIdLogado);                
        formData.append('modelo', modelo);        
        formData.append('marca', marca);
        formData.append('valor', valor);                
        formData.append('ano', ano);
        formData.append('km', km);
        formData.append('combustivel', combustivel);
        formData.append('cambio', cambio);
        formData.append('descricao', descricao);

        imagens.forEach((img) => {
            formData.append('imagens', img.file); 
        });

        fetch('http://localhost:5000/veiculos', {
            method: 'POST',
            body: formData
            })
            .then(async (res) => {
                const resu = await res.json();

                if (!res.ok){
                    throw new Error(resu.erro || "Erro ao cadastrar o veiculo")
                }
                return resu;
            })
            .then((data) => {
            alert(`Veiculo cadastrado com sucesso!`);
                setMarca('');
                setModelo('');
                setModelo('');
                setAno('');
                setKM('');
                setCombustivel('');
                setCambio('');

                window.location.href = '/'; 
            })
            .catch((err) => {
            setMensagemErro(err.message);
            
        });
    }  

    const processarArq = (arq) => {
        const novosArq = Array.from(arq).filter(arq => arq.type.startsWith('image/'));

       if (novosArq.length === 0) {
            alert('Selecione arquivos de imagem válidos.');
            return;
        }

        const novasImagens = novosArq.map(arq => ({
            id: Math.random().toString(36).substr(2, 9),
            file: arq, 
            preview: URL.createObjectURL(arq) 
        }));

        setImagens((imagensAnter) => {
            const listaAtualizada = [...imagensAnter, ...novasImagens];
            if (imagensAnter.length === 0) {
                setIndiceAtivo(0);
            }
            return listaAtualizada;
        });
    };

    const removerImagem = (idParaRemover, event) => {
        event.stopPropagation(); 

        setImagens((prevImagens) => {
            const listaFiltrada = prevImagens.filter(img => img.id !== idParaRemover);
            
            setIndiceAtivo((prevIndice) => {
                if (listaFiltrada.length === 0) return 0;
                if (prevIndice >= listaFiltrada.length) return listaFiltrada.length - 1;
                return prevIndice;
            });

            return listaFiltrada;
        });
    };

    const handleInputChange = (event) => {
        const arq = event.target.files;
        processarArq(arq);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const arq = event.dataTransfer.files;
        processarArq(arq);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return(
        <div className="form"> 
                <form className="forms" id="form1" onSubmit={cadastrarVeiculo}>
                {mensagemErro && <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{mensagemErro}</p>}
                    <select required value={marca} onChange={(e) => setMarca(e.target.value)}>
                        <option value='default' selected>MARCA</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Mercedez-benz">Mercedez-benz</option>
                        <option value="Audi">Audi</option>
                        <option value="Ford">Ford</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Honda">Honda</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="BMW">BMW</option>
                    </select>

                    <input type="text" placeholder='Modelo' required value={modelo} onChange={(e) => setModelo(e.target.value)}></input>

                    <input type="int" placeholder='Valor' required value={valor} onChange={(e) => setValor(e.target.value)}></input>

                    <input type="int" placeholder='Ano' required value={ano} onChange={(e) => setAno(e.target.value)}></input>

                    <input type="int" placeholder='KMs rodados' required value={km} onChange={(e) => setKM(e.target.value)} ></input>

                    <select required value={combustivel} onChange={(e) => setCombustivel(e.target.value)}>
                        <option value='default' selected>COMBUSTÍVEL</option>
                        <option value='Alcool'>Alcool</option>
                        <option value='Gasolina'>Gasolina</option>
                        <option value='Diesel'>Diesel</option>
                    </select>

                    <select required value={cambio} onChange={(e) => setCambio(e.target.value)}>
                        <option value='default' selected>CAMBIO</option>
                        <option value='Manual'>Manual</option>
                        <option value='Automatico'>Automático</option>
                    </select>

                    <textarea id="descricao" rows="5" cols="40" placeholder="Descrição do Veiculo" onChange={(e) => setDescricao(e.target.value)}></textarea>

                    <div className="upload" onDrop={handleDrop} onDragOver={handleDragOver}>
                        <input type="file" accept="image/*" onChange={handleInputChange}/>
                    </div>

                    {imagens.length > 0 && (
                        <div className="galeria-container">
                            
                            <div className="foto-principal-wrapper">
                                <img src={imagens[indiceAtivo]?.preview} alt="Foto principal" className="foto-principal"/>
                            </div>

                            <div className="thumbnails">
                                {imagens.map((img, index) => (
                                    <div key={img.id} onClick={() => setIndiceAtivo(index)} className={`thumbnail-wrapper ${index === indiceAtivo ? 'ativa' : ''}`}>
                                        <img src={img.preview} alt={`Miniatura ${index + 1}`} className="thumbnail-img"/>
                                        <button type="button" className="btn-remover" onClick={(e) => removerImagem(img.id, e)}>X</button>
                                    </div>
                                ))}
                            </div>     
                        </div>
                    )}

                    <button type="submit">CADASTRAR VEÍCULO</button>
                
                </form> 
        </div>
    );

}

export default AdicionarVeiculo;