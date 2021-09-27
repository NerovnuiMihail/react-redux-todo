import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import RouterApp from "./router/Router-app";


function App() {
  return (
    <Router>
        <div className="top_wrapper_app">
          <Navbar />
          <RouterApp />
        </div>
    </Router>
  );
}

export default App;
