import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const state = useSelector((state) => state.admin.value);
  const statee = useSelector((statee) => statee.admin.test);

  return (
    <>
      {statee.map((props, i) => {
        return <h1 key={i}>category : {props}</h1>;
      })}


      {state.map((props, i) => {
        return (
          <div key={i} className="dishGrid__item">
            <div className="dishGrid__item__img">
              <img src={props.img} alt="food img" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title">{props.title}</h3>
              <h3 className="dishGrid__item__price">{props.price}</h3>
              <div className="dishGrid__item__stars">
                <img src={props.stars} alt="3 star" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
