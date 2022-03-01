<<<<<<< HEAD
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
=======
import Avatar from '@mui/material/Avatar';
import { Button } from '../Button';

import './styles.css';

interface Headerprops{
  pagename: string,
  username: string,
}

export const Header:React.FunctionComponent<Headerprops> = ({pagename, username}) => {
  return(
    <div className="headerContainer">
      <div id="titlePage">
        <h1>{pagename}</h1>
      </div>
      <div id="loginBox">
        <Avatar alt={username}>{username}</Avatar>
>>>>>>> 1e2db42517d77b56086aca7abaea2999ab2fdf0a
      </div>
    </div>
  )
}