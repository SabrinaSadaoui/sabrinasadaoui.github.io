import React from "react";
import CardParcours from "../CardParcours/CardParcours";
import CardSkills from "../CardSkills/CardSkills";
import Description from "../Description/Description";
import "./Parcours.css";
import iut from "/experiences/iutparis.png";
import g4 from "/experiences/G4-couleur-2.png";
import rpa from "/experiences/rpa.png";
import hubone from "/experiences/LOGO_HUBONE2019_W.png";
import reactlogo from "/tools/dev/react.png";
import git from "/tools/dev/git.png";
import bootstrap from "/tools/dev/bootstrap.png";
import html5 from "/tools/dev/html5.png";
import css3 from "/tools/dev/css3.png";
import js from "/tools/dev/javascript.png";
import Wordpress from "/tools/dev/wordpress.png";
import jquery from "/tools/dev/jquery.png";
import adobeXD from "/tools/design/adobexd.png";
import photoshop from "/tools/design/photoshop.png";
import illustrator from "/tools/design/illustrator.png";
import indesign from "/tools/design/indesing.png";
import premierePro from "/tools/design/premierepro.png";
import acrobat from "/tools/design/acrobat.png";
import Figma from "/tools/design/figma.png";
import php from "/tools/dev/php.png";
import mysql from "/tools/dev/mysql.png";
import java from "/tools/dev/java.png";
import python from "/tools/dev/python.png";
import cPlus from "/tools/dev/c++.png";
import vscode from "/tools/dev/vscode.png";
import angular from "/tools/dev/angular.png";
import wix from "/tools/dev/wix.png";
import gantt from "/tools/management/gantt.png";
import drive from "/tools/management/google-drive.png";
import togglePlan from "/tools/management/togglplan.png";
import eloqua from "/tools/management/eloqua.png";
import gSearch from "/tools/management/google-search-console.png";
import matomo from "/tools/management/matomo.svg";
import teams from "/tools/management/teams.png";
import miro from "/tools/management/miro.png";
import trello from "/tools/management/trello.png";
import xmind from "/tools/management/xmind.webp";
import moqups from "/tools/management/moqups.webp";

export default function Parcours() {
  const parcoursList = [
    {
      id: "1",
      contratFormation: "Apprentie",
      role: "Webmaster",
      imgParcours: hubone,
      nomParcours: "Hub One",
      description: (
        <Description
          text="De 2021 à 2023, j'accompagnais le service marketing sur le développement front des sites de l’entreprise avac Wordpress et BootStrap ainsi que sur la réalisation de visuels, maquettes et vidéos à l'aide de la suite Adobe pour la communication externe/interne de l’entreprise. De plus, j’ assistais le responsabable du pôle digital sur le suivi de projet, les campagnes d'emailing avec Eloqua et la réalisation de KPI grace à Matomo et Google Search Console."
          boldWords={[
            "développement front",
            "Wordpress",
            "BootStrap",
            "maquettes",
            "suite Adobe",
            "suivi de projet",
            "Eloqua",
            "Matomo",
            "Google Search Console",
          ]}
        />
      ),
      skills: [
        {
          typeSkill: "Gestion de Projet",
          skillName: [togglePlan, teams, eloqua, matomo, gSearch, drive],
        },
        {
          typeSkill: "Design",
          skillName: [
            acrobat,
            photoshop,
            premierePro,
            indesign,
            illustrator,
            adobeXD,
          ],
        },
        {
          typeSkill: "Developpement",
          skillName: [html5, css3, bootstrap, js, jquery, Wordpress, vscode],
        },
      ],
    },
    {
      id: "2",
      contratFormation: "Apprentie",
      role: "Webmaster",
      imgParcours: rpa,
      nomParcours: "Ryal Pièce Auto",
      description: (
        <Description
          text="En 2021, j'ai intégré la société Ryal Pièce Auto pour ma première alternance en tant que Webmaster. Mes missions allaient de la rédaction des spécifications fonctionnelles et techniques d'un site e-commerce aux wireframes en passant par la conception de la base de données SQL. En complément, je devais aussi réaliser grace à la suite Adobe la communication visuelle de l’entreprise comme affiches publicitaires ou des flyers."
          boldWords={[
            "spécifications fonctionnelles et techniques",
            "wireframes",
            "base de données SQL",
            "suite Adobe",
          ]}
        />
      ),
      skills: [
        {
          typeSkill: "Design",
          skillName: [Figma, photoshop, illustrator, indesign, acrobat],
        },
        {
          typeSkill: "Developpement",
          skillName: [mysql],
        },
        {
          typeSkill: "Gestion de Projet",
          skillName: [drive, gantt],
        },
      ],
    },
    {
      id: "3",
      contratFormation: "étudiante",
      role: "Chef de Projet Web",
      imgParcours: g4,
      nomParcours: "Institut G4",
      description: (
        <Description
          text="Depuis 2023, j'ai rejoins le cycle d'ingénierie de l'institut G4 pour devenir Chef de Projet en Système d’Information où j'ai aussi diversifié mes compétences en me spécialisant en web/média. J'ai pu y apprendre les différentes méthodes et outils de gestion de projet, de la planiﬁcation à la construction de réponse à une Appel d'offre en passant par le Cahier des Charges, les spéciﬁcations fonctionnelles et techniques ainsi qu'un tableau de bord de gestion et pilotage"
          boldWords={["Chef de Projet en Système d’Information", "web", "média", "gestion de projet", "planiﬁcation", "appel d'offre", "cahier des charges", "spéciﬁcations fonctionnelles", "techniques", "tableau de bord de gestion", "pilotage"]}
        />
      ),
      skills: [
        {
          typeSkill: "Design",
          skillName: [Figma, photoshop, illustrator, indesign, adobeXD, moqups],
        },
        {
          typeSkill: "Developpement",
          skillName: [
            reactlogo,
            git,
            html5,
            css3,
            bootstrap,
            php,
            js,
            angular,
            vscode,
          ],
        },
        {
          typeSkill: "Gestion de Projet",
          skillName: [drive, gantt, miro, trello, xmind],
        },
      ],
    },

    {
      id: "4",
      contratFormation: "étudiante",
      role: "DUT Informatique",
      imgParcours: iut,
      nomParcours: "IUT de Paris",
      description: (
        <Description
          text="De 2017 à 2020, j'ai intégré le cursus universitaire DUT Informatique. J’ai pu appendre différents langages de programmation et les mettre à profit dans plusieurs projets d'étude. J'ai également suivi le dernier semestre de cours en anglais. Je peux citer certains projets d'étude comme un Sudoku en Visual Basic, divers bases de données mySQL ou Access, des sites web en HTML, CSS avec du JavaScript ou sur Wix."
          boldWords={["cours en anglais", "Visual Basic","bases de données","mySQL","Access","HTML","CSS","JavaScript", "Wix"]}
        />
      ),
      skills: [
        {
          typeSkill: "Developpement",
          skillName: [
            html5,
            css3,
            js,
            bootstrap,
            java,
            python,
            cPlus,
            vscode,
            git,
            mysql,
            php,
            jquery,
            wix
          ],
        },
      ],
    },
  ];

  return (
    <div id="parcoursSection">
      <svg
        version="1.1"
        id="parcoursSep"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1203.4 110"
      >
        <polygon
          className="polygon"
          points="1203.4,0 0,0 0,97.7"
          fill="var(--bg-color-b)"
        />
      </svg>

      <h1 className="sectionTitle">PARCOURS</h1>
      <div className="listParcours">
        {parcoursList.map((parcours) => {
          return (
            <CardParcours
              key={parcours.id}
              nomParcours={parcours.nomParcours}
              role={parcours.role}
              contratFormation={parcours.contratFormation}
              srcImg={`${parcours.imgParcours}`}
              description={parcours.description}
              date={parcours.date}
            >
              <CardSkills skills={parcours.skills} />
            </CardParcours>
          );
        })}
        <svg
          version="1.1"
          id="projectSep"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1202.4 125"
        >
          <g>
            {" "}
            <polygon
              fill="var(--bg-color-l)"
              className="polygon"
              points="0,126.1 1203.4,126.1 1203.4,28.5 		"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
