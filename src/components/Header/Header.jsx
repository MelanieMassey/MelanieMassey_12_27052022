// import { Link } from "react-router-dom"
import './Header.css'
import logo from '../../assets/logo.png'

/**
 * @param
 * @returns {Element}
 */
function Header() {
    return(
        <header className='mainHeader'>
            <img src={logo} className="logo" alt="logo de SportSee" />
            <a href=''>Accueil</a>
            <a href=''>Profil</a>
            <a href=''>Réglage</a>
            <a href=''>Communauté</a>
        </header>
    )
}

export default Header;