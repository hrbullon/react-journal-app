import React from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

import 'animate.css';

function JournalApp() {
  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  );
}

export default JournalApp;
