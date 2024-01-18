import React from 'react'

import './../styles/Home.css';
import Mariee2 from "./../assets/mariee2.png"
import Background from "./../assets/married--background.png"
import Chateau from "./../assets/chateau.png"
import BackgroundImg from "./../assets/home_background.svg"
import Chevron from "./../assets/chevron.svg"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import LoveStoryImg from "./../assets/lovestory.png";

function Home() {
  const { t } = useTranslation();

  return (
    <div className='home'>
      <div className='home__welcome' style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <div className='home__welcome--mariees mariees'>
          <div className='mariees__image'>
            <img src={Mariee2} alt="mariées" className='home__img mariees__img'></img>
            <h1 className='home__welcome--title'>{t("Home.Title")}</h1>
          </div>
          <div className='mariees__image'>
            <img src={Background} alt="background" className='home__img mariees__name'></img>
          </div>
        </div>
        <img src={Chevron} alt="chevron" className='home__welcome--chevron pulse'></img>
      </div>

      <div className='home__information'>
        <div className='home__information--arrival venue'>
          <h2 className='home__information--h2 venue__date'>{t("Home.Information.Date")}</h2>
          <img src={Chateau} alt="lieu" className='venue__lieu--img'></img>
          <h3 className='venue__lieu venue__coordinate'><p className='home__information--detail venue__lieu--description'>{t("Home.Information.IntituleLieu")} </p> Le Château Taillefer Lafon - Vignoble & Cidrerie</h3>
          <h3 className='venue__adresse venue__coordinate'><p className='home__information--detail venue__lieu--description'>{t("Home.Information.IntituleAdresse")}</p><Link className='venue__adresse--link' to="https://www.google.com/maps/place/Le+Ch%C3%A2teau+Taillefer+Lafon+-+Vignoble+%26+Cidrerie/@45.5507133,-73.8260595,17z/data=!3m1!5s0x4cc924f5bc1de217:0xbf8c2fb543316fe7!4m15!1m8!3m7!1s0x4cc924f5ca0f66f5:0x42ada1657ccba26f!2s1500+Mnt+Champagne,+Laval,+QC+H7X+4H9!3b1!8m2!3d45.5507096!4d-73.8234846!16s%2Fg%2F11c4h64g2k!3m5!1s0x4cc9249d4b1b2009:0x4de8c1453fd11b!8m2!3d45.5510917!4d-73.8233101!16s%2Fg%2F1td251qt?entry=ttu" target='_blank'>1500 Mnt Champagne, Laval, QC H7X 4H9</Link></h3>
        </div>
        <div className='home__information--arrival reservation'>
          <h2 className='home__information--h2 reservation__title'>{t("Home.Information.RSVP.Title")}</h2>
          <p className='reservation__explanation'>{t("Home.Information.RSVP.FirstParagraph")}</p>
          <p className='reservation__explanation'>{t("Home.Information.RSVP.SecondParagraph")}</p>
          <Link to="/RSVP" className='reservation__link'>{t("Home.Information.RSVP.Button")}</Link>
        </div>
      </div>

      <div className='home__loveStory loveStory'>
        <h2 className='loveStory__title'>{t("Home.LoveStory.Title")}</h2>
        <div className='loveStory__container'>
          <div className='loveStory__timeline'>
            <div className='loveStory__timeline--moment timeline__moment'>
              <h3 className='timeline__moment--title'>{t("Home.LoveStory.PremiereRencontre.Title")}</h3>
              <p className='timeline__moment--description'>{t("Home.LoveStory.PremiereRencontre.FirstParagraph")}</p>
            </div>
            <div className='loveStory__timeline--moment timeline__moment'>
              <h3 className='timeline__moment--title'>{t("Home.LoveStory.PremierDate.Title")}</h3>
              <p className='timeline__moment--description'>{t("Home.LoveStory.PremierDate.FirstParagraph")}</p>
              <p className='timeline__moment--description'>{t("Home.LoveStory.PremierDate.SecondParagraph")}</p>
            </div>
            <div className='loveStory__timeline--moment timeline__moment'>
              <h3 className='timeline__moment--title'>{t("Home.LoveStory.EvenementMarquant.Title")}</h3>
              <p className='timeline__moment--description'>{t("Home.LoveStory.EvenementMarquant.FirstParagraph")}</p>
            </div>
            <div className='loveStory__timeline--moment timeline__moment'>
              <h3 className='timeline__moment--title'>{t("Home.LoveStory.DemandeMariage.Title")}</h3>
              <p className='timeline__moment--description'>{t("Home.LoveStory.DemandeMariage.FirstParagraph")}</p>
            </div>
          </div>
          <div className='home__about loveStory__about about'>
            <img src={LoveStoryImg} alt="Celine&Vincent" className='loveStory__img'></img>
            <div className='about__presentation--vincent about__presentation'>
              <h3 className='presentation presentation__bigtitle'>{t("Home.About.VincentPresentation.Title")}</h3>
              <p className='presentation__vincent about__title'>{t("Home.About.VincentPresentation.FirstParagraphTitle")}</p>
              <p className='presentation__description'>{t("Home.About.VincentPresentation.FirstParagraph")}</p>
              <p className='presentation__vincent about__title'>{t("Home.About.VincentPresentation.SecondParagraphTitle")}</p>
              <p className='presentation__description'>{t("Home.About.VincentPresentation.SecondParagraph")}</p>
            </div>
            <div className='about__presentation--celine about__presentation'>
              <h3 className='presentation presentation__bigtitle'>{t("Home.About.CelinePresentation.Title")}</h3>
              <p className='presentation__celine about__title'>{t("Home.About.CelinePresentation.FirstParagraphTitle")}</p>
              <p className='presentation__description'>{t("Home.About.CelinePresentation.FirstParagraph")}</p>
              <p className='presentation__celine about__title'>{t("Home.About.CelinePresentation.SecondParagraphTitle")}</p>
              <p className='presentation__description'>{t("Home.About.CelinePresentation.SecondParagraph")}</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
