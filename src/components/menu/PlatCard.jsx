import React from "react";

export default function PlatCard(props) {
    
  return (
    
      <div className="dishGrid__item">
        <div className="dishGrid__item__img">
          <img src={props.val.img} alt="food img" />
        </div>
        <div className="dishGrid__item__info">
          <h3 className="dishGrid__item__title">{props.val.title}</h3>
          <h3 className="dishGrid__item__price">{props.val.price}</h3>
          <div className="dishGrid__item__stars">
            <img src={props.val.stars} alt="3 star" />
          </div>
        </div>
      </div>
   
  );
}
