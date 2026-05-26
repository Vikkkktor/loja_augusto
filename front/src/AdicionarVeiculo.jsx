import React, { useState } from 'react';
import './AdicionarVeiculo.css';

function AdicionarVeiculo(props){
    const[previewIMG, setPreviewIMG] = useState(null);
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [km, setKM] = useState('');
    const [combustivel, setCombustivel] = useState('');
    const [cambio, setCambio] = useState('');

    const processarArq = (arq) => {
        if (arq && arq.tyoe.startsWith('image/')){
            const leitor = new FileReader();
            leitor.onload = (event) => {
                setPreviewIMG(event.target.result)
            };
            leitor.readAsDataURL(arq);
        } else{
            alert('Selecione um arquivo de imagem válido.');
        }
    };

    const handleInputChange = (event) => {
        const arq = event.target.files[0];
        processarArq(arq);
    };

    const handleDrop = (event) => {
        const arq = event.target.files[0]
        processarArq(arq);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return(
        <div className="form"> 
                <form className="forms" id="form1" onSubmit={"cadastrarVeiculo"}>

                    <select required value={marca} onChange={(e) => setMarca(e.target.value)}>
                        <option value='default' selected>--MARCA--</option>
                        <option value="volvo">Volvo</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="Ford">Ford</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Honda">Honda</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedez-benz">Mercedez-benz</option>
                    </select>

                    <input type="int" placeholder='Ano' required value={ano} onChange={(e) => setAno(e.target.value)}></input>

                    <input type="int" placeholder='KMs rodados' required value={km} onChange={(e) => setKM(e.target.value)} ></input>

                    <select required value={combustivel} onChange={(e) => setCombustivel(e.target.value)}>
                        <option value='default' selected>--COMBUSTÍVEL--</option>
                        <option value='alcool'>Alcool</option>
                        <option value='gasolina'>Gasolina</option>
                        <option value='diesel'>Diesel</option>
                    </select>

                    <select required value={cambio} onChange={(e) => setCambio(e.target.value)}>
                        <option value='default' selected>--CAMBIO--</option>
                        <option value='manual'>Manual</option>
                        <option value='automatico'>Automático</option>
                    </select>
                </form> 
        </div>
    );

}

export default AdicionarVeiculo;