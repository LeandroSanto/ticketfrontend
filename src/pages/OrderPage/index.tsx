import { Header } from "../../components/Header/Index";
import { OrderDescription } from "../../components/OrderComponents/OrderDescription";

import './styles.css';

interface OrderProps{
  os:number;
}

export const OrderPage:React.FunctionComponent<OrderProps>= ({os}) => {
  return(
    <div className="orderPageContainer">
      <Header title="Ordem de Serviço " os={os} user="Leandro"/>
      <div className="orderDescriprion">
        <OrderDescription />
      </div>

    </div>
  )
}