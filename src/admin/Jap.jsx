import React from "react";
import { Provider } from "react-redux";
import CardForm from "./CardForm";
import { store } from "./store";
import Display from "./Display"


function Jap() {
  return (
    <div>
      <Provider store={store}>
        <Display />
        <CardForm />
      </Provider>
    </div>
  );
}

export default Jap;
