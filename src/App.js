import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import RouterApp from "./router/Router-app";


function App() {
  return (
    <Router>
      <Navbar />
      <RouterApp />
    </Router>
  );
}

export default App;
