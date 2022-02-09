import { Header } from "../../components/Header/Index";
import { Input } from "../../components/Input";

export function NewOrder(){
  return(
    <>
      <Header pagename='Nova Ordem de Serviço' username="Leandro" />
      <div className="newOrderContainer">
        <Input label='Cliente' name='client' type='text' />
      </div> 
    </>
)
}