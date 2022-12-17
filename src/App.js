import React from "react";
import Navigation from "./Navigation";

import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
