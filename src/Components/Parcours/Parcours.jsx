import React from "react";
import CardParcours from "../CardParcours/CardParcours";
import CardSkills from "../CardSkills/CardSkills";
import Description from "../Description/Description";
import "./Parcours.css";
import iut from "/experiences/iutparis.png";
import g4 from "/experiences/G4-couleur-2.png";
import rpa from "/experiences/rpa.png";
import hubone from "/experiences/LOGO_HUBONE2019_W.png";
import wead from "/experiences/WEAD_X_TAG_Heuer.png";
import reactlogo from "/tools/dev/react.png";
import git from "/tools/dev/git.png";
import bootstrap from "/tools/dev/bootstrap.png";
import html5 from "/tools/dev/html5.png";
import css3 from "/tools/dev/css3.png";
import js from "/tools/dev/javascript.png";
import Wordpress from "/tools/dev/wordpress.png";
import squarespace from "/tools/dev/squarespace.png";
import jquery from "/tools/dev/jquery.png";
import adobeXD from "/tools/design/adobexd.png";
import photoshop from "/tools/design/photoshop.png";
import illustrator from "/tools/design/illustrator.png";
import indesign from "/tools/design/indesing.png";
import premierePro from "/tools/design/premierepro.png";
import rushpremiere from "/tools/design/premiere-rush.png";
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
import gSearch from "/tools/management/google-search-console.png";
import eloqua from "/tools/management/eloqua-oracle.png";
import matomo from "/tools/management/matomo.svg";
import teams from "/tools/management/teams.png";
import miro from "/tools/management/miro.png";
import trello from "/tools/management/trello.png";
import xmind from "/tools/management/xmind.webp";
import moqups from "/tools/management/moqups.webp";
import salesforce from "/tools/management/Salesforce.com_logo.svg.png";
import jira from "/tools/management/jira.svg.png";

export default function Parcours() {
  const parcoursList = [
    {
      id: "1",
      contratFormation: "CDI",
      role: "Cheffe de projet 360 / Webmaster",
      imgParcours: wead,
      nomParcours: "WEAD / TAG Heuer",
      description: (
        <Description
          text="Depuis septembre 2023, je suis Cheffe de projet 360 au sein de l'agence WEAD et Webmaster externe pour TAG Heuer. Dans ce cadre, je collabore étroitement avec la Digital Experience Team pour optimiser l'expérience digitale de la marque. Mon rôle consiste à gérer divers projets au quotidien, de l’organisation et du suivi des tâches dans JIRA à la création de pages web : Landing Pages, Product List Pages et Product Detail Pages sur Salesforce. 
          En parallèle, je participe également à la conception de maquettes sur Figma, afin de garantir une expérience utilisateur fluide et esthétique. Au sein de l’agence WEAD, j’ai également été responsable du webmastering du site et de la gestion/support de Furious, en charge de la gestion de la production de l’agence. Cette mission comprenait la coordination avec les équipes techniques et créatives, la mise à jour du site en fonction des besoins clients et la gestion de la production de contenu digital, tout en assurant la bonne communication et le bon suivi des projets."
          boldWords={[
            "Cheffe de projet",
            "Webmaster",
            "Jira",
            "salesforce",
            "figma",
            "webmastering",
            "suivi de projet"
          ]}
        />
      ),
      skills: [
        {
          typeSkill: "Gestion de Projet",
          skillName: [jira, teams, gSearch, drive],
        },
        {
          typeSkill: "Design",
          skillName: [
            acrobat,
            photoshop,
            rushpremiere,
            adobeXD,
            Figma
          ],
        },
        {
          typeSkill: "CRM / Développement",
          skillName: [salesforce, html5, css3, Wordpress, vscode, squarespace],
        },
      ],
    },
    {
      id: "2",
      contratFormation: "Apprentie",
      role: "Webmaster",
      imgParcours: hubone,
      nomParcours: "Hub One",
      description: (
        <Description
          text="De 2021 à 2023, j'accompagnais le service marketing sur le développement front des sites de l’entreprise avec Wordpress et BootStrap ainsi que sur la réalisation de visuels, maquettes et vidéos à l'aide de la suite Adobe pour la communication externe/interne de l’entreprise. De plus, j’assistais le responsable du pôle digital sur le suivi de projet, les campagnes d'emailing avec Eloqua et la réalisation de KPI grâce à Matomo et Google Search Console."
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
          typeSkill: "Développement",
          skillName: [html5, css3, bootstrap, js, jquery, Wordpress, vscode],
        },
      ],
    },
    {
      id: "2",
      contratFormation: "Apprentie",
      role: "Webmaster",
      imgParcours: hubone,
      nomParcours: "Hub One",
      description: (
        <Description
          text="De 2021 à 2023, j'accompagnais le service marketing sur le développement front des sites de l’entreprise avec Wordpress et BootStrap ainsi que sur la réalisation de visuels, maquettes et vidéos à l'aide de la suite Adobe pour la communication externe/interne de l’entreprise. De plus, j’assistais le responsable du pôle digital sur le suivi de projet, les campagnes d'emailing avec Eloqua et la réalisation de KPI grâce à Matomo et Google Search Console."
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
          typeSkill: "Développement",
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
          text="En 2021, j'ai intégré la société Ryal Pièce Auto pour ma première alternance en tant que Webmaster. Mes missions allaient de la rédaction des spécifications fonctionnelles et techniques d'un site web aux wireframes en passant par la conception de la base de données SQL. En complément, je devais aussi réaliser la communication visuelle de l’entreprise comme des affiches publicitaires ou des flyers en utilisant la suite Adobe."
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
          typeSkill: "Développement",
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
      role: "Cheffe de Projet Web",
      imgParcours: g4,
      nomParcours: "Institut G4",
      description: (
        <Description
          text="Depuis 2020, j'ai rejoins le cycle d'ingénierie de l'institut G4 pour devenir Cheffe de Projet en Système d’Information où j'ai aussi diversifié mes compétences en me spécialisant en web/média. J'ai pu y apprendre différentes méthodes, comme le cycle en V et la méthode Agile, en utilisant divers outils de gestion de projet, de la planiﬁcation à la construction de réponse à un appel d'offre en passant par le cahier des charges, les spéciﬁcations fonctionnelles et techniques ainsi qu'un tableau de bord de gestion et pilotage."
          boldWords={[
            "Cheffe de Projet en Système d’Information",
            "web",
            "média",
            "cycle en V",
            "méthode Agile",
            "gestion de projet",
            "planiﬁcation",
            "appel d'offre",
            "cahier des charges",
            "spéciﬁcations fonctionnelles",
            "techniques",
            "tableau de bord de gestion",
            "pilotage",
          ]}
        />
      ),
      skills: [
        {
          typeSkill: "Design",
          skillName: [Figma, photoshop, illustrator, indesign, adobeXD, moqups],
        },
        {
          typeSkill: "Développement",
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
          text="De 2017 à 2020, j'ai intégré le cursus universitaire DUT Informatique. J’ai pu apprendre différents langages de programmation et les mettre à profit dans plusieurs projets d'étude. J'ai eu l'occasion de développer un Sudoku en Visual Basic, divers bases de données mySQL ou Access, des sites web en HTML, CSS avec du JavaScript ou sur Wix. J'ai également suivi le dernier semestre de cours en anglais."
          boldWords={[
            "Visual Basic",
            "bases de données",
            "mySQL",
            "Access",
            "HTML",
            "CSS",
            "JavaScript",
            "Wix",
            "cours en anglais",
          ]}
        />
      ),
      skills: [
        {
          typeSkill: "Développement",
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
            wix,
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
