import './Login.css';
import { Link } from 'react-router-dom';

function Login(props){
    return(
        <div className="col"> 
                <form className="forms" id="form1">

                    <input type="text" placeholder='Email ou Nome de Usuário'></input>


                    <input type="text" placeholder='Senha'></input>

                    <button type="submit" form="form1" value="Submit">Entrar</button>

                </form> 
            <div className='criar-conta'>
                <Link to="/Cadastro" className="link-cadastro">Ainda não tem um conta? Criar</Link>
            </div>
        
            </div>
    );
}

export default Login;