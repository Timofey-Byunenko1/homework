import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Swapi from "./components/Swapi";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>SWAPI App</h1>
        <Swapi />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;