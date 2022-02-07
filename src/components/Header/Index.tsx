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
        <p>{username}</p>
        <Button name='logoutButton' label='Sair' />
      </div>
    </div>
  )
}