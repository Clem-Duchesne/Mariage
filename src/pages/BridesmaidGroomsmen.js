import React from 'react';
import './../styles/BridesmaidGroomsmen.css';
import Delphine from './../assets/delphine.png';
import Benjamin from './../assets/benjamin.png';
import Tom from './../assets/tom.png';
import Cecile from './../assets/cecile.png';
import Estelle from './../assets/estelle.png';
import FlavieJ from "./../assets/flavieJ.png";
import Clemence from "./../assets/clemence.jpg";
import Annie from "./../assets/annie.png";
import Basile from "./../assets/basile.png";
import Joris from "./../assets/joris.png";
import Joseph from "./../assets/joseph.png";
import FlavieB from "./../assets/flavieB.png";
import Pierre from "./../assets/pierre.png";
import Melina from "./../assets/melina.png";
import Julia from "./../assets/julia.png";
import DJ from "./../assets/dj.png";
import Vi from "./../assets/vi.png";
import Audrey from "./../assets/audrey.png";
import Rim from "./../assets/rim.png";

import { useTranslation } from 'react-i18next'

function BridesmaidGroomsmen() {

  const { t } = useTranslation();

  return (
    <div className='presentation'>
      <h1 className='presentation__title'>{t("BridesmaidGroosmen.Title")}</h1>
      <div className='presentation__container presentation__container--switch'>
        <div className='presentation__person--switch'>
          <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.Tom.Role")}</h2>
          <img src={Tom} alt="Tom" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Tom.Name")}</h3>
        </div>
        <div className='presentation__person first'>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Tom.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Tom.SecondParagraph")}</p>
        </div>
      </div>
      <div className='presentation__container presentation__container--switch'>
        <div className='presentation__person--switch'>
          <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.Estelle.Role")}</h2>
          <img src={Estelle} alt="Estelle" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Estelle.Name")}</h3>
        </div>
        <div className='presentation__person first'>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Estelle.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Estelle.SecondParagraph")}</p>
        </div>
      </div>
      <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.BrideSide.BrideSideTitle")}</h2>
      <div className='presentation__container'>
        <div className='presentation__person'>
          <img src={Delphine} alt="Delphine" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.BrideSide.Delphine.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Delphine.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Delphine.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Benjamin} alt="Benjamin" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.BrideSide.Benjamin.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Benjamin.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Benjamin.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={FlavieJ} alt="Flavie J" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.BrideSide.Flavie J.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Flavie J.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Flavie J.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Joris} alt="Joris" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.BrideSide.Joris.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Joris.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Joris.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={FlavieB} alt="Flavie B" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.BrideSide.Flavie B.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Flavie B.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.BrideSide.Flavie B.SecondParagraph")}</p>
        </div>
      </div>
      <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.GroomSide.GroomSideTitle")}</h2>
      <div className='presentation__container'>
      <div className='presentation__person'>
          <img src={Cecile} alt="Cecile" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.GroomSide.Cecile.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Cecile.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Cecile.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Pierre} alt="Pierre" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.GroomSide.Pierre.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Pierre.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Pierre.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Joseph} alt="Joseph" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.GroomSide.Joseph.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Joseph.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Joseph.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Basile} alt="Basile" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.GroomSide.Basile.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Basile.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Basile.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Melina} alt="Melina" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.GroomSide.Melina.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Melina.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.GroomSide.Melina.SecondParagraph")}</p>
        </div>
      </div>
      <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.Photographes.PhotographesTitle")}</h2>
      <div className='presentation__container'>
        <div className='presentation__person'>
          <img src={Julia} alt="Julia" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Photographes.Julia.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Julia.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Julia.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Vi} alt="Vi" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Photographes.Vi.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Vi.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Vi.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Audrey} alt="Audrey" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Photographes.Audrey.Name")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Audrey.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Audrey.SecondParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Photographes.Audrey.ThirdParagraph")}</p>
        </div>
      </div>
      <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.MusiqueActivites.Title")}</h2>
      <div className='presentation__container'>
        <div className='presentation__person without-desc'>
          <img src={Audrey} alt="Audrey" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.MusiqueActivites.Audrey.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.MusiqueActivites.Audrey.Role")}</h3>
        </div>
        <div className='presentation__person without-desc'>
          <img src={DJ} alt="DJ Rim et DJ Meglennial" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.MusiqueActivites.DJ.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.MusiqueActivites.DJ.Role")}</h3>
        </div>
        <div className='presentation__person without-desc'>
        <img src={Pierre} alt="Animation" className='presentation__person--img'></img>
        <img src={Estelle} alt="Animation" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.MusiqueActivites.Animation.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.MusiqueActivites.Animation.Role")}</h3>
        </div>
        <div className='presentation__person without-desc'>
        <img src={Melina} alt="Sound" className='presentation__person--img'></img>
        <img src={Rim} alt="Sound" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.MusiqueActivites.SonLumieres.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.MusiqueActivites.SonLumieres.Role")}</h3>
        </div>
      </div>
      <h2 className='presentation__part-title'>{t("BridesmaidGroosmen.Autres.Title")}</h2>
      <div className='presentation__container'>
        <div className='presentation__person'>
        <img src={FlavieB} alt="RSS" className='presentation__person--img'></img>
          <img src={Julia} alt="RSS" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Autres.RSS.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.Autres.RSS.Role")}</h3>
        </div>
        <div className='presentation__person'>
          <img src={Annie} alt="Annie" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Autres.Gateau.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.Autres.Gateau.Role")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Autres.Gateau.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Autres.Gateau.SecondParagraph")}</p>
        </div>
        <div className='presentation__person'>
          <img src={Clemence} alt="Clémence" className='presentation__person--img'></img>
          <h3 className='presentation__person--name'>{t("BridesmaidGroosmen.Autres.Site.Name")}</h3>
          <h3 className='presentation__person--role'>{t("BridesmaidGroosmen.Autres.Site.Role")}</h3>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Autres.Site.FirstParagraph")}</p>
          <p className='presentation__person--description'>{t("BridesmaidGroosmen.Autres.Site.SecondParagraph")}</p>
        </div>
      </div>

    </div>
  )
}

export default BridesmaidGroomsmen
