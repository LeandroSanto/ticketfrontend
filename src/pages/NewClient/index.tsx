import { Button } from "../../components/Button";
import { Header } from "../../components/Header/Index";
import { Input } from "../../components/Input";

import './styles.css';

export function NewClient() {
  return(
    <>
    <Header pagename='Novo Cliente' username='Leandro' />
    <div className="newClientContainer">
      <Header title='Cadastrar Um Novo Cliente' user='Leandro' />
      <form>
        <Input name='client' label='Nome do Cliente:' type='text' />
        <Input name='cpfcnpj' label='CPF/CNPJ:' type='text' />
        <Input name='type' label='Tipo de Cliente:' type='text' />
        <Input name='phone' label='Telefone:' type='text' />
        <Input name='address' label='Endereço:' type='text' />
        <Input name='email' label='E-mail:' type='text' />
      </form>
      <footer>
        <Button name='save' label='Salvar informações'/>
      </footer>
    </div>
    </>
  )
}