import { Header } from "../../components/Header/Index";
import { OrdersCards } from "../../components/OrdersCard";

import './styles.css';

export function Home() {
  return(
    <>
    <Header pagename='Dashboard' username="Leandro" />
    <div className="homeContainer">
      <Header title='Dashboard' user="Leandro" />
      <div className='dashboard'>
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
    </div>
    </>
  )
}