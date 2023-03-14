import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const state = useSelector((state) => state.admin.value);
  console.log("state", state);
  return (
    <div>
      {state.map((val,i) => {
        return (
          <div key={i}>
            <p> img: {val.img}</p>
            <p> title: {val.title}</p>
            <p> price: {val.price}</p>
            <p> stars: {val.stars}</p>
          </div>
        );
      })}
    </div>
  );
}
