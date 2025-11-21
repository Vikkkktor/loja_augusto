import './CardVeiculo.css';
import { Link } from 'react-router-dom';



function CardVeiculo(props){
    return(
        <div className="col"> 
            <div className="card shadow-sm"> 
                <Link to={`/veiculo/${props.id}`}>
                <img
                    src={props.img}
                    className= "bd-placeholder-img card-img-top" 
                    alt={props.titulo}
                    width="100%" 
                    height="300"
                />    
                <div className="card-body">                
                    <div className="d-flex justify-content-between align-items-center">                       
                         <p className="propriedades-veiculo"><b>{props.titulo}</b></p> 
                         <p className="propriedades-veiculo"><b>R${props.preco}</b></p>
                    </div> 
                 </div> 
                </Link>
            </div>
        </div>
    );
}

export default CardVeiculo;