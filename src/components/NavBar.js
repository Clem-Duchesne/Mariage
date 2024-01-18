import React from "react";
import './../styles/NavBar.css';
import Logo from './../assets/logo.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

  

function NavBar() {
  const { t } = useTranslation();

  return (
    <div className='navbar'>
      <div className="navbar__left-side">
        <img src={Logo} alt="Logo" className='navbar__logo'></img>
        <LanguageSelector/>
      </div>
      <div className="navbar__right-side">
        <nav>
          <ul className="navbar-onglets">
            <li><Link to="/" className="navbar-onglets__element">{t("Navbar.Home")}</Link></li>
            <li><Link to="/Schedule" className="navbar-onglets__element">{t("Navbar.Schedule")}</Link></li>
            <li><Link to="/BridesmaidGroomsmen" className="navbar-onglets__element">{t("Navbar.BridesmaidGroosmen")}</Link></li>
            <li><Link to="/Transport" className="navbar-onglets__element">{t("Navbar.Transport")}</Link></li>
            <li><Link to="/RSVP" className="navbar-onglets__element">{t("Navbar.RSVP")}</Link></li>
            <li><Link to="/FAQ" className="navbar-onglets__element">{t("Navbar.FAQ")}</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
