import React, { useState } from "react";
import "./../styles/LanguageSelector.css";
import i18n from '../i18n';

function LanguageSelector(){
    const lngs = [
        { id :1, key: "en", native: "EN" },
        { id:2, key: "fr", native: "FR" },
    ];

    const handleTrans = (key) => {
        i18n.changeLanguage(key);
    };

    return (
        <div className="languageSelector">
            {lngs.map((lng, i) => {
                const { id, key, native } = lng;
                return <button className="languageSelector__lng" onClick={() => handleTrans(key)}>{native}</button>;
            })}

        </div>
    );
}

export default LanguageSelector;