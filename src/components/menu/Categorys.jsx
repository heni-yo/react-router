import React from "react";
import PlatCard from "./PlatCard";
import { useSelector } from "react-redux";

function Categorys(props) {
  const state = useSelector((state) => state.admin.value);
  const plat = state[props.category].map((val, i) => {
    return <PlatCard key={i} val={val} />;
  })
  return (
    <section id="dishGrid" data-aos="fade-down">
      <div className="container">
        <h2 className="dishGrid__title">{props.category}</h2>
        <div className="dishGrid__wrapper">
          {plat}
          </div>
      </div>
    </section>
  );
}

export default Categorys;
