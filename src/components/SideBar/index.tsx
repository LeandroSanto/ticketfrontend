import { Link } from "react-router-dom"

import './styles.css';

export function SideBar(){
return(
  <div className="sideBarContainer">
    <nav>
      <Link to='/'>Dashboard</Link>
      <Link to='/newclient'>Novo Cliente</Link>
    </nav>
  </div>
  )
}