import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import "./../styles/RSVP.css"
import { useState, useEffect } from 'react';
import Palette from "./../assets/couleur-palette.png"
import myData from './../db/mail.json';


function RSVP() {
  const { t } = useTranslation();
  /* ProgressBar */
  const [disabledPrev, setDisabledPrev] = useState(true)
  const [disabledNext, setDisabledNext] = useState(false)
  const [progress, setProgress] = useState(1)
  const [width, setWidth] = useState(2)
  const [classCircle2, setClassCircle2] = useState("circle")
  const [classCircle3, setClassCircle3] = useState("circle")

  const nextClick = () => {
    if (progress < 3) {
      setProgress(progress + 1)
      setDisabledPrev(false)
      if (progress + 1 == 2) {
        setClassCircle2("circle active")
        setWidth(50)
        setActiveStep1("RSVP__step step")
        setActiveStep2("RSVP__step step--active")
      }
      if (progress + 1 == 3) {
        setClassCircle3("circle active")
        setDisabledNext(true)
        setWidth(100)
        setActiveStep2("RSVP__step step")
        setActiveStep3("RSVP__step step--active")
      }
    }
  }
  const prevClick = () => {
    if (progress > 1) {
      setProgress(progress - 1)
      if (progress - 1 == 1) {
        setDisabledPrev(true)
        setClassCircle2("circle")
        setWidth(2)
        setActiveStep1("RSVP__step step--active")
        setActiveStep2("RSVP__step step")
      }
      if (progress - 1 == 2) {
        setClassCircle3("circle")
        setDisabledNext(false)
        setWidth(50)
        setActiveStep2("RSVP__step step--active")
        setActiveStep3("RSVP__step step")
      }
    }
  }

  /* Step */
  const [activeStep1, setActiveStep1] = useState("RSVP__step step--active")
  const [activeStep2, setActiveStep2] = useState("RSVP__step step")
  const [activeStep3, setActiveStep3] = useState("RSVP__step step")
  const [buttonText, setButtonText] = useState("")

  const mailButtonHover = () => {
    setButtonText("khceline1@gmail.com");
  }
  const mailButtonUnHover = () => {
    setButtonText("");
  }

  /* Data */

  const realPassword = "Simba&Mushi"
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [entrees, setEntrees] = useState([{ id: 0, value: "entree1" }]);
  const [plats, setPlats] = useState([{ id: 0, value: "plat1" }]);
  const [formStyle, setformStyle] = useState("RSVP__venue-form inactive")
  const [nombre, setNombre] = useState(1)
  const [menuNumber, setMenuNumber] = useState(1)


  const choixEntree = [];
  choixEntree[0] ="entree1" 
  const handleSelectEntree = (e, i) => {
    console.log("cc");
    choixEntree[i] = e.target.value
    
   
  }
  const choixPlat = [];
  const handleSelectPlat = (e, i) => {
    setPlats([{ id: i, value: e.target.value }]);
    console.log(plats);
  }
  const personne = [];
  const handleLoginSubmit = () => {
    const personne = myData.find(function (element) {
      return element.Mail == email;
    });
    if (pass == realPassword && personne != null) {
      if (personne.Nombre != undefined) {
        setNombre(personne.Nombre)
      }
    setformStyle("RSVP__venue-form");
    }
  }
  const handleChoixSubmit = () => {
    console.log("cc")
    console.log(choixEntree);
  }

  const content = [];
  for (let i = 0; i < nombre; i++) {
    content.push(<div>
      <h3 className=''>Choix menu {i + 1}</h3>
      <input className="inactive" value={i + 1} onChange={(e) => setMenuNumber(e.target.value)} type="menuNumber" name="menuNumber" />
      <label htmlFor="entree">{t("Programme.Menu.Entree.Title")}</label>
      <select name={`selectedEntree-${i}`} onChange={(e) => handleSelectEntree(e, i)}>
        <option value="entree1">{t("Programme.Menu.Entree.Choix1")}</option>
        <option value="entree2">{t("Programme.Menu.Entree.Choix2")}</option>
      </select>
      <label htmlFor="entree">{t("Programme.Menu.Plat.Title")}</label>
      <select name={`selectedPlat-${i}`} onChange={(e) => handleSelectPlat(e, i)}>
        <option value="plat1">{t("Programme.Menu.Plat.Choix1")}</option>
        <option value="plat2">{t("Programme.Menu.Plat.Choix2")}</option>
        <option value="plat3">{t("Programme.Menu.Plat.Choix3")}</option>
      </select>
    </div>);
  }

  return (

    <div className='RSVP'>
      <h1 className='RSVP__title'>{t("RSVP.Title")}</h1>
      <div className="progress-bar">
        <div className="progress-container">
          <div className="progress-bar-fill" style={{ width: `${width}%` }}></div>
          <div className="circle active">
            <p className="caption">{t("RSVP.Reservation.Etape1.NumeroEtape")}</p>
          </div>
          <div className={classCircle2}>
            <p className="caption">{t("RSVP.Reservation.Etape2.NumeroEtape")}</p>
          </div>
          <div className={classCircle3}>
            <p className="caption">{t("RSVP.Reservation.Etape3.NumeroEtape")}</p>
          </div>
        </div>

      </div>
      <div className='RSVP__container'>
        <div className={activeStep1}>
          <h2 className='step__title'>{t("RSVP.Reservation.Etape1.NumeroEtape")} : {t("RSVP.Reservation.Etape1.Title")}</h2>
          <p className='step__description'>{t("RSVP.Reservation.Etape1.Description")} : <Link to="/Schedule" className="navbar-onglets__element">{t("Navbar.Schedule")}</Link></p>
          <div className='step__form connection__form'>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className='step__button' onClick={handleLoginSubmit}>Je me connecte</button>
          </div>
          <form className={formStyle}>
            {content}
            <button className='step__button' onClick={handleChoixSubmit}>{t("RSVP.Reservation.Etape1.Bouton")}</button>
          </form>

        </div>
        <div className={activeStep2}>
          <h2 className='step__title'>{t("RSVP.Reservation.Etape2.NumeroEtape")} : {t("RSVP.Reservation.Etape3.Title")}</h2>
          <p className='step__description'>{t("RSVP.Reservation.Etape2.FirstParagraph")}</p>
          <p className='step__description'>{t("RSVP.Reservation.Etape2.SecondParagraph")}</p>
          <p className='step__description'>{t("RSVP.Reservation.Etape2.ThirdParagraph")}</p>
          <img src={Palette} alt="palette couleur" className='step__img'></img>

        </div>
        <div className={activeStep3}>
          <h2 className='step__title'>{t("RSVP.Reservation.Etape3.NumeroEtape")} : {t("RSVP.Reservation.Etape2.Title")}</h2>
          <p className='step__description'>{t("RSVP.Reservation.Etape3.Description")}</p>
          <p className='step__description remarque'>{t("RSVP.Reservation.Etape3.Remarque")}</p>
          <Link className='step__button' onMouseEnter={mailButtonHover} onMouseLeave={mailButtonUnHover}>{t("RSVP.Reservation.Etape3.Bouton1")} <p className='RSVP__mail'>{buttonText}</p></Link>
          <Link className='step__button' to="https://paypal.me/clemduchesne?country.x=FR&locale.x=fr_FR">{t("RSVP.Reservation.Etape3.Bouton2")}</Link>
        </div>
      </div>
      <div className='RSVP__button'>
        <button className="btn" disabled={disabledPrev} onClick={prevClick}>Prev</button>
        <button className="btn" disabled={disabledNext} onClick={nextClick}>Next</button>
      </div>
    </div>


  )


}

export default RSVP
