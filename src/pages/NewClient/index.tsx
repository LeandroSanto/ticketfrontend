import { Input } from "../../components/Input";

export function NewClient() {
  return(
    <div className="newClientContainer">
      <Input name='client' label='Nome do Cliente:' type='text' />
      <Input name='cpfcnpj' label='CPF/CNPJ:' type='text' />
      <Input name='type' label='Tipo de Cliente:' type='text' />
      <Input name='phone' label='Telefone:' type='text' />
      <Input name='address' label='Endereço:' type='text' />
      <Input name='email' label='E-mail:' type='text' />
    </div>
  )
}