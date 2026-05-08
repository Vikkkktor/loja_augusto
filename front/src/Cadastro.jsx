import { Link } from 'react-router-dom';

function Cadastro(props){
    return(
        <div className="col"> 
                <form className="forms" id="form1">

                    <input type="text" placeholder='Nome de Usuário'></input>

                    <input type="text" placeholder='CPF'></input>

                    <input type="text" placeholder='Email'></input>

                    <input type="text" placeholder='Senha'></input>

                    <input type="text" placeholder='Confirme a senha'></input>


                    <button type="submit" form="form1" value="Submit">Cadastrar</button>

                </form> 
        </div>
    );
}

export default Cadastro;