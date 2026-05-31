import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(props){
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const efetuarLogin = (e) => {

        e.preventDefault();
        setMensagemErro('');

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        })
        .then(async (res) => {
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.erro || "Erro ao fazer login");
            }
            return data;
        })
        .then((data) => {
            alert("Login realizado com sucesso!");
            
            localStorage.setItem('usuarioId', data.user.id);
            localStorage.setItem('usuarioNome', data.user.nome);

            window.location.href = '/'; 
        })
        .catch((err) => {
            setMensagemErro(err.message);
        });
    };

    return(
        <div className="col"> 
        {mensagemErro && <p style={{ color: 'red', textAlign: 'center' }}>{mensagemErro}</p>}
                <form className="forms" id="form1" onSubmit={efetuarLogin}>

                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>


                    <input type="password" placeholder='Senha' onChange={(e) => setSenha(e.target.value)}></input>

                    <button type="submit" form="form1" value="Submit">Entrar</button>

                </form> 
            <div className='criar-conta'>
                <Link to="/Cadastro" className="link-cadastro">Ainda não tem um conta? Criar</Link>
            </div>
        
            </div>
    );
}

export default Login;