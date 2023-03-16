import React from "react";
import Categorys from "./Categorys";
import { useSelector } from "react-redux";

export default function Menu() {
  const state = useSelector((state) => state.admin.value);
  const category = Object.keys(state).map((props, index) => {
    return <Categorys key={index} category={props}/>;
  });
  return (
    <div>
     {category}
    </div>
  );
}
