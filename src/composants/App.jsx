import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/App.css";
import Accueil from "./Accueil";
import Saidbar from "./Navbar";
import Header from "./header";
import Ts from "./Ts";
import Groups from "./groups";
import ListeGroups from "./liste-groups";

function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Saidbar />
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Ts" element={<Ts />} />
          <Route path="/Groups" element={<Groups />} />
          <Route path="/Liste-group" element={<ListeGroups />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
