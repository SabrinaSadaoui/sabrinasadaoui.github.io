import React from 'react'
import "./CardSkills.css"
import path from 'path-browserify';

const CardSkills =({skills}) =>{
  return (
    <div className='mySkills'>
      <h3 className='title'>Technologies et Outils utilisés :</h3>
        {skills.map((skill) => (
          <div className='typeSkill' key={skill.typeSkill}>
            <div className='titleType'>
              <h3>{skill.typeSkill}</h3>
              </div>
            <div className='listTools'>
              {skill.skillName.map((src) => (
                <img className={`tool ${path.parse(path.basename(src)).name}`} alt={path.basename(src)} key={path.basename(src)} src={src} />
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default CardSkills;
