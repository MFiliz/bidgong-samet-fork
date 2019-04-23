import React from 'react';
import {Link} from 'react-router-dom';

function MatchesItemTemplate(props) {
    console.log(props.item)
    const matchLink = `/currentmatch/${props.item.matchGuid}`;
    return (
        <div className="row team-list">            
            <div className="col-lg-1 col-md-1"><img src={props.item.detail.homeTeam.teamFlagUrl} className="img-fluid" alt={props.item.detail.homeTeam.teamName}/></div>
            <div className="col-lg-3 col-md-3">{props.item.detail.homeTeam.teamName}</div>
            <div className="col-lg-4 col-md-4 score"><Link to={matchLink}>1:0</Link></div>  
            <div className="col-lg-3 col-md-3 text-right">{props.item.detail.guestTeam.teamName}</div>
            <div className="col-lg-1 col-md-1"><img src={props.item.detail.guestTeam.teamFlagUrl} className="img-fluid" alt={props.item.detail.guestTeam.teamName}/></div>                    
        </div>
    )
}

export default MatchesItemTemplate
