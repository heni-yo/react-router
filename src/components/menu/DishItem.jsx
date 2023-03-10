import React from "react";
import Card from "./Card";

function DishItem(props) {
  const Cards = props.Content.map((item,index) => {
    return <Card key={index} {...item} />;
  });
  return (
    <section id="dishGrid" data-aos="fade-down">
      <div className="container">
        <h2 className="dishGrid__title">{props.category}</h2>
        <div className="dishGrid__wrapper">
          {Cards}
          </div>
      </div>
    </section>
  );
}

export default DishItem;
