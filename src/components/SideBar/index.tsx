import { Link } from "react-router-dom";
import * as fIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md"

import { Button } from "../Button";

import './styles.css';

export function SideBar(){
return(
  <div className="sideBarContainer">
    <nav>
      <Link to='/' id='link'><mdIcons.MdDashboard/> Dashboard</Link>
      <Link to='/newclient'id='link'><fIcons.FaUsers /> Novo Cliente</Link>
      <Link to='/neworder' id='link'><fIcons.FaEdit /> Novo Chamado</Link>
    </nav>
    <footer id='sideBarFooter'>
      <Button name='logout' label='Sair' />
    </footer>
  </div>
  )
}