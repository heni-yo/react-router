import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const state = useSelector((state) => state.admin.value);

  return (
    <>
      <div className="container">
        <h2 className="dishGrid__title">
<<<<<<< HEAD
          {statee.map((props, i) => {
            return <p key={i}>category : {props.category}</p>;
=======
          {Object.keys(state).map((props, i) => {
            return <p key={i}>category : {props}</p>;
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
          })}
        </h2>
        <div className="dishGrid__wrapper">
          {Object.values(state)
            .flat()

            .map((props, i) => {
              console.log(props);
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
        </div>
      </div>
    </>
  );
}
