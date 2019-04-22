import React from 'react'

function CategorySlideTemplate(item,index) {
    return (
        <div>
             <div key={index} className="slide" type={item.categoryName} typeid={index} >
                        <img src="/assets/img/icon-basketball.png" />
             </div>
        </div>
    )
}

export default CategorySlideTemplate
