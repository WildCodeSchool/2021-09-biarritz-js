import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <ul className='Header'>
            <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='/cssdefinition'>La définition de Css</NavLink></li>
            <li><NavLink  activeClassName='active'to='/htmldefinition'>La définition de HTML</NavLink></li>
            <li><NavLink activeClassName='active' to='/jsdefinition'>La définition de JS</NavLink></li>
        </ul>
    )
}

export default NavBar;
