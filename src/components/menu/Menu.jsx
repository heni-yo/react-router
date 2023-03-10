import React from "react";
import DishItem from "./DishItem";
import menuData from "./menuData";
import MenuTop from "./MenuTop";

export default function Menu() {
  const cards = menuData.map((item,index) => {
    return <DishItem key={index} {...item} />;
  });
  return (
    <div>
      <MenuTop/>
      {/* <!-- Top Dishes --> */}
     {cards}
   
    </div>
  );
}
