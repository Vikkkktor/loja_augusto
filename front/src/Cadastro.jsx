import React, { useState, useEffect } from 'react';

function Cadastro(props){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const cadastrarUsuario = (e) => {
        e.preventDefault();
        setMensagemErro('');

        if (!nome || !email || !senha || !setConfirmaSenha) {
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }

        const cpfLimpo = cpf.replace(/\D/g, ''); 
        if (cpfLimpo.length !== 11) {
            setMensagemErro('O CPF deve conter 11 numeros.');
            return;
        }

        if (senha !== confirmaSenha) {
            setMensagemErro('As senhas devem ser iguais');
            return;
        }


        fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nome, email, cpf: cpfLimpo, senha})
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
                setConfirmaSenha('');
                setCPF('');

            window.location.href = '/login'; 
                
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

                    <input type="password" placeholder='Confirme a senha' onChange={(e) => setConfirmaSenha(e.target.value)}></input>

                    <button type="submit" form="form1" value="Submit">Cadastrar</button>

                </form> 
        </div>
    );
}

export default Cadastro;