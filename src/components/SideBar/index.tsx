import { Link } from "react-router-dom"
import { MaterialIcons, Feather } from 'react-web-vector-icons';

import { Button } from "../Button";

import './styles.css';

export function SideBar(){
return(
  <div className="sideBarContainer">
    <nav>
      <Link to='/' id='link'><MaterialIcons name="dashboard" color="#fff" />Dashboard</Link>
      <Link to='/newclient'id='link'><Feather name='users' color='#fff'/>Novo Cliente</Link>
      <Link to='/neworder' id='link'><Feather name="edit" color="#fff" />Novo Chamado</Link>
    </nav>
    <footer id='sideBarFooter'>
      <Button name='logout' label='Sair' />
    </footer>
  </div>
  )
}