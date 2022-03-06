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
}