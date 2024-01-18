import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRef } from "react";
import { useState, useEffect } from 'react'
import ScheduleBckgd from "./../assets/schedule-background.svg"
import "./../styles/Schedule.css";

function Schedule() {

  const { t } = useTranslation();

  return (
    <div className='schedule'>
      <h2 className='schedule__title'>{t("Programme.Title")}</h2>
      <h3 className='schedule__underTitle'>{t("Programme.UnderTitle")}</h3>
      <div className='schedule__timeline timeline' >
        <div className='timeline__time time'>
          <h3 className='time__title'>13H30 : {t("Programme.Programmation.Arrival")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>14H00 - 15H00 : {t("Programme.Programmation.Ceremonie")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>15H00 - 16H30 : {t("Programme.Programmation.VinHonneur")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>16H30 - 18H00 : {t("Programme.Programmation.Jeux")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>18H00 - 20H30 : {t("Programme.Programmation.Repas")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>20H30 - 21H00 : {t("Programme.Programmation.Spectacle")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>21H00 : {t("Programme.Programmation.Musique")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>22H00 : {t("Programme.Programmation.Danse")}</h3>
        </div>
        <div className='timeline__time time'>
          <h3 className='time__title'>1H : {t("Programme.Programmation.Depart")}</h3>
        </div>
      </div>
      <h3 className='schedule__underTitle'>{t("Programme.Menu.MenuTitle")}</h3>
      <p className='schedule__description'>{t("Programme.Menu.DescriptionChoix")}</p>
      <div className='schedule__menu menu'>
        <div className='menu__part appetizer'>
          <p className='menu__partTitle appetizer__title'>{t("Programme.Menu.Cocktail.Title")}</p>
          <p className='menu__choice appetizer__option'>{t("Programme.Menu.Cocktail.Choix1")}</p>
          <p className='menu__choice appetizer__option'>{t("Programme.Menu.Cocktail.Choix2")}</p>
          <p className='menu__choice appetizer__option'>{t("Programme.Menu.Cocktail.Choix3")}</p>
          <p className='menu__choice appetizer__option'>{t("Programme.Menu.Cocktail.Choix4")}</p>
        </div>
        <div className='menu__part starter'>
          <p className='menu__partTitle starter__title'>{t("Programme.Menu.Entree.Title")}</p>
          <p className='menu__choice starter__option'>{t("Programme.Menu.Entree.Choix1")}</p>
          <p className='menu__choice starter__option'>{t("Programme.Menu.Entree.Choix2")}</p>
        </div>
        <div className='menu__part mainCourse'>
          <p className='menu__partTitle mainCourse__title'>{t("Programme.Menu.Plat.Title")}</p>
          <p className='menu__choice mainCourse__option'>{t("Programme.Menu.Plat.Choix1")}</p>
          <p className='menu__choice mainCourse__option'>{t("Programme.Menu.Plat.Choix2")}</p>
          <p className='menu__choice mainCourse__option'>{t("Programme.Menu.Plat.Choix3")}</p>
        </div>
      </div>
    </div>
  )
}

export default Schedule
