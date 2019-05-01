import React from 'react'

function LeagueSlideTemplate(props) {
    return (
        <div key={props.item.id} className="slide" type={props.item.leagueName} typeid={props.item.id} >
           <img src={props.item.imagePath} alt={props.item.leagueName} />
           <h5>{props.item.leagueName}</h5>
        </div>
    )
}

export default LeagueSlideTemplate
