import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Cadastro(props){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const cadastrarUsuario = (e) => {
        e.preventDefault();
        setMensagemErro('');

        if (!nome || !email || !senha) {
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }

        fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nome, email, cpf, senha})
            })
            .then(async (res) => {
                const resu = await res.json();

                if (!res.ok){
                    throw new Error(resu.erro || "Erro ao cadastrar o usuário")
                }
                return resu;
            })
            .then((data) => {
            alert(`Usuário ${data.nome} cadastrado com sucesso!`);
                setNome('');
                setEmail('');
                setSenha('');
                setCPF('');
            })
            .catch((err) => {
            setMensagemErro(err.message);
        });
    }  


    return(
        <div className="col"> 
        {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
                <form className="forms" id="form1" onSubmit={cadastrarUsuario}>

                    <input type="text" placeholder='Nome de Usuário' required value={nome} onChange={(e) => setNome(e.target.value)}></input>

                    <input type="text" placeholder='CPF' required value={cpf} onChange={(e) => setCPF(e.target.value)}></input>

                    <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <input type="password" placeholder='Senha' required value={senha} onChange={(e) => setSenha(e.target.value)} ></input>

                    <input type="password" placeholder='Confirme a senha'></input>

                    <button type="submit" form="form1" value="Submit">Cadastrar</button>

                </form> 
        </div>
    );
}

export default Cadastro;