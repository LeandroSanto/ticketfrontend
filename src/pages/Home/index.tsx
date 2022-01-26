import { OrdersCards } from "../../components/OrdersCard";

import './styles.css';

export function Home() {
  return(
    <div className="homeContainer">
      <div className="openOrders">
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {0}/>
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {0}/>
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {0}/>
      </div>
      <div className="processingOrders">
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {1}/>
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {1}/>
      </div>
      <div className="pausedOrders">
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {2}/>
      </div>
      <div className="closedOrders">
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {3}/>
      </div>
      <div className="doomedOrders">
        <OrdersCards os={22010001} client="Claudia Contabilidade" status= {4}/>
      </div>
    </div>
  )
}