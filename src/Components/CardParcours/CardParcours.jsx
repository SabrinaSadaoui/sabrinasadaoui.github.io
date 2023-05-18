import React from 'react'
import "./CardParcours.css"

const CardParcours =({role, contratFormation, description, srcImg, nomParcours, date, children}) =>{
  return (
    <div className='card'>
    <div className="cardParcours">
      <div className='imgContainer'>
          <img src={srcImg} alt={nomParcours} className='logoParcours'/>
        </div>
    <h2>{contratFormation}</h2>
    <h2>{role}</h2>
      <h3 className="description">{description}</h3>
    </div>
    {children}
  
</div>
  )
}
export default CardParcours;