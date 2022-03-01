import { Button } from "../Button";

import './styles.css'

interface HeaderProps{
    title: string,
    user: string,
}

export const Header:React.FunctionComponent<HeaderProps> = ({title, user})=>{
  return(
    <div className="headerContainer">
      <div id='titleBox'>
        <h1>{title}</h1>
      </div>
      <div id='userBox'>
        {user}
        <Button name='logout' label='Sair da seção' />
      </div>
    </div>
  )
}