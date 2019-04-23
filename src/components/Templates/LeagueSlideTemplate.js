import React from 'react'

function LeagueSlideTemplate(props) {
    let img = <img src="/assets/img/icon-basketball.png" />;
    // if(parseInt(props.index)===0 || parseInt(props.index)===10 )
    // {
    //     img =  <img src="/assets/img/icon-basketball.png" />;
    // }
    // else if(parseInt(props.index)===1 || parseInt(props.index)%5===0)
    // {
    //     img =  <img src="/assets/img/icon-basketball.png" />;
    // }
    // else if(parseInt(props.index)%2===0 || parseInt(props.index)%6===0)
    // {
    //     img =  <img src="/assets/img/icon-tennis.png" />;
    // }
    // else if(parseInt(props.index)%3===0 || parseInt(props.index)%7===0)
    // {
    //     img =  <img src="/assets/img/icon-celebrities.png" />;
    // }
    // else if(parseInt(props.index)%4===0 || parseInt(props.index)%8===0)
    // {
    //     img =  <img src="/assets/img/icon-formula.png" />;
    // }
    // else
    // {
    //     img=""
    // }

    return (
        <div key={props.item.id} className="slide" type={props.item.leagueName} typeid={props.item.id} >
           <img src="/assets/img/icon-basketball.png" />
        </div>
    )
}

export default LeagueSlideTemplate
