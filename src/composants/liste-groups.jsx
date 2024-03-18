import React from "react";
import { FaSearch } from "react-icons/fa";

export default function ListeGroups() {
  return (
    <main className="main-container">
      <div className="filtrage">
        <div className="number-group">
          <h3 className="groups-h3">Groupes existant</h3>
          <h3 className="group-number">(4)</h3>
        </div>
        <div className="add-group">
          <button id="Ajouter-group">Ajouter</button>
        </div>
      </div>
    </main>
  );
}
