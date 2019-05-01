import React from 'react'

function CategorySlideTemplate(props) {
    console.log(props.item)
    return (
        <div key={props.item.id} className="slide" type={props.item.categoryName} typeid={props.item.id} >
            <img src={props.item.imagePath} alt={props.item.categoryName} />
            <h5>{props.item.categoryName}</h5>
        </div>
    )
}

export default CategorySlideTemplate
