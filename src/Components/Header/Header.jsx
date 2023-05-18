import React from "react";
import "./Header.css";
import photo from "/photoProfile.png";
import LogoSVG from "../LogoTitle/LogoTitle";

export default function Header() {
  return (
    <div id="headerSection">
      <div className="headerIntro flex-item">
        <LogoSVG colorC="var(--main-color)" colorT="var(--white)" />
        <div className="headerText">
          <h1>WebMaster & Cheffe de Projet Web/Média</h1>
          <h3>Bonjour, je m'appelle Sabrina Sadaoui, j'ai 25 ans et je suis actuellement étudiante en dernière année pour devenir cheffe de projet web. Je me spécialise en developpment front, design et gestion de projet</h3>
        </div>
      </div>
      <div className="photoProfile flex-item">
        <img src={photo} alt="photo de profil" />
        <a
          className="btnCV"
          href="CV_SABRINA_SADAOUI.pdf"
          download="CV_SABRINA_SADAOUI.pdf"
        >
          MON CV
        </a>
      </div>
    </div>
  );
}
