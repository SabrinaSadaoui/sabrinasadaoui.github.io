import React from "react";
import "./Projects.css";
import path from "path-browserify";
import hip from "/projects/Hack_In_Paris.png";
import kntd from "/projects/Logo_Kool_N_The_Dance.png";
import hubvous from "/projects/Logo_Hub&Vous.png";
import hubsite from "/projects/Hub_One.png";
import tagheuer from "/projects/TAG_Heuer_webmastering.png";
import sysdream from "/projects/SysDream.png";
import bootstrap from "/tools/dev/bootstrap.png";
import html5 from "/tools/dev/html5.png";
import css3 from "/tools/dev/css3.png";
import js from "/tools/dev/javascript.png";
import Wordpress from "/tools/dev/wordpress.png";
import jquery from "/tools/dev/jquery.png";
import adobeXD from "/tools/design/adobexd.png";
import vscode from "/tools/dev/vscode.png";
import illustrator from "/tools/design/illustrator.png"
import photoshop from "/tools/design/photoshop.png"
import jira from "/tools/management/jira.png";
import salesforce from "/tools/management/Salesforce.com_logo.svg.png";
import figma from "/tools/design/figma.png";

export default function Projects() {
  const devList = [
    {
      id: "1",
      projectName: "TAG Heuer",
      lienProject: "www.tagheuer.com",
      imgP: tagheuer,
      skillName: [salesforce, jira, photoshop, figma, html5, css3, vscode],
    },
    {
      id: "2",
      projectName: "Hub One",
      lienProject: "www.hubone.fr",
      imgP: hubsite,
      skillName: [html5, css3, js, jquery, bootstrap, vscode, Wordpress],
    }    
    /*
    ,
    {
      id: "3",
      projectName: "Hack In Paris",
      lienProject: "www.hackinparis.com",
      imgP: hip,
      skillName: [adobeXD, Wordpress],
    },
    {
      id: "4",
      projectName: "SysDream",
      lienProject: "www.sysdream.com",
      imgP: sysdream,
      skillName: [html5, css3, bootstrap, vscode,  Wordpress],
    },
    */
  ];

  const logoList = [
    {
      id: "1",
      projectName: "Hub&Vous",
      typeProject: "Newsletter",
      imgP: hubvous,
      skillName: illustrator,
      description:""
    },
    {
      id: "2",
      projectName: "KOOL 'N' THE DANCE",
      typeProject: "Association de danses et Fitness",
      imgP: kntd,
      skillName: illustrator,
    },
  ];

  return (
    <div id="projectsSection">
      <h1 className="sectionTitle">Projets Récents</h1>
      <div className="listsProjects">
        <div className="typeProject">
          <h2>Sites Web</h2>
          <div className="listProject">
            {devList.map((dev) => {
              return (
                <div className="projetDev" key={dev.id}>
                  <a href={'https://'+dev.lienProject} className="projetHov">
                    <div className="image-container">
                      <img className="imgProj" src={dev.imgP} />
                      <p className="image-text">{dev.lienProject}</p>
                    </div>
                    <h3>{dev.projectName}</h3>
                  </a>
                  {dev.skillName && dev.skillName.length > 0 && (
                    <div className="toolsProj">
                      {dev.skillName.map((skill) => (
                        <img
                          className={`tool ${
                            path.parse(path.basename(skill)).name
                          }`}
                          alt={path.basename(skill)}
                          key={path.basename(skill)}
                          src={skill}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="typeProject">
          <h2>Logos</h2>
          <div className="listProject">
            {logoList.map((logo) => {
              return (
                <div className="projetLogo" key={logo.id}>
                  <img className="imgProj" src={logo.imgP} />
                  <h3>{logo.projectName}</h3>
                  <p>{logo.typeProject}</p>
                  <img
                          className={`tool ${
                            path.parse(path.basename(logo.skillName)).name
                          }`}
                          alt={path.basename(logo.skillName)}
                          key={path.basename(logo.skillName)}
                          src={logo.skillName}
                        />
                        
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
