import { useNavigate } from 'react-router-dom';
import './styles.css';

interface OrderCardsProps{
  os: number,
  client: string,
  status: number,
}

export function OrdersCards(props: OrderCardsProps ) {
  const navigate = useNavigate();
  return(
    <div className="orderCardContainer" onClick={()=> navigate(`/orderpage/${props.os}`)}>
      <label  
      style={{ 
        background: 
          props.status===0?  '#595454': 
          props.status===1? '#1665f7': 
          props.status===2? '#eb5c0f':
          props.status===3? '#17da2e':
         '#da1313',
         color: 
          props.status===0?  '#fff': 
          props.status===1? '#fff': 
          props.status===2? '#000':
          props.status===3? '#000':
          '#fff',
         borderRadius: '4px',
          }} > OS: {props.os}</label>
      <label> Cliente: {props.client}</label>
      <label>
        Status: {
          props.status===0? 'Aberto':
          props.status===1? 'Em Tratamento':
          props.status===2? 'Pausado':
          props.status===3? 'Fechado':
          'Condenado'
        }</label>
    </div>
  )
}