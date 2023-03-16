import React from "react";
import { Provider } from "react-redux";
import CardForm from "./CardForm";
import { store } from "./store";
import CategoryForm from "./CategoryForm";
import Menu from "../components/menu/Menu";

function Jap() {
  return (
    <div>
      <Provider store={store}>
        <Menu/>
        <CategoryForm />
        <CardForm />
      </Provider>
    </div>
  );
}

export default Jap;
