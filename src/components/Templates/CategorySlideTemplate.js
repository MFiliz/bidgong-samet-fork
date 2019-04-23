import React from 'react'

function CategorySlideTemplate(props) {
    return (
        <div key={props.item.id} className="slide" type={props.item.name} typeid={props.item.id} >
            <img src="/assets/img/icon-basketball.png" />
        </div>
    )
}

export default CategorySlideTemplate
