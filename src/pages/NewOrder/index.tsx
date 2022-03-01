<<<<<<< HEAD
import { Button } from "../../components/Button";
import { Header } from "../../components/Header/Index";
import { Input } from "../../components/Input";
import Select from "../../components/Select";
import { TextArea } from "../../components/TextArea";

import './styles.css';

export function NewOrder(){
  return(
    <div className="newOrderContainer">
      <Header title='Nova Ordem de Serviço' user='Leandro' />
      
      <Select 
        name='orderType' 
        label='Tipo de Atendimento' 
        options={ [ 
          {value:'remote', label:'Atendimento Remoto'},  
          {value:'laboratory', label:'Laboratório'}, 
          { value:'external', label:'Atendimento Externo'} 
        ]} />
      <Input name='orderTitle' label='Titulo da Solicitação' type='text' />
      <TextArea name='description' label="Descrição" />

      <footer>
        <Button name='save' label='Salvar Informações'/>
      </footer>
    </div>
  )
=======
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
>>>>>>> 1e2db42517d77b56086aca7abaea2999ab2fdf0a
}