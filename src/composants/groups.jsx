import React from "react";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Groups() {
  return (
    <main className="main-container">
      <div className="groups">
        <span id="group-icon">
          <MdGroups />
        </span>
        <h2>Groupes</h2>
        {/* <p>2</p> */}
      </div>
      <div className="deve">
        <h1>Developpement digitale</h1>
        <div className="groups-main-cards">
          <div className="groups-card">
            <div className="groups-card-inner">
              <h3>1 année</h3>
              <MdGroups className="card-icon" />
            </div>
            <p>Liste des groupes de 2 eme annee option full stack</p>
            <Link to="/Liste-group" id="link-card">
              Liste group
            </Link>
          </div>
          <div className="groups-card">
            <div className="groups-card-inner">
              <h3>2eme année</h3>
              <MdGroups className="card-icon" />
            </div>
            <p>Liste des groupes de 2 eme annee option full stack</p>
            <Link to="/Liste-group" id="link-card">
              Liste group
            </Link>
          </div>
        </div>
      </div>
      <div className="infra">
        <h1>infrastructure digitale</h1>
        <div className="groups-main-cards">
          <div className="groups-card">
            <div className="groups-card-inner">
              <h3>1 année</h3>
              <MdGroups className="card-icon" />
            </div>
            <p>Liste des groupes de 2 eme annee option full stack</p>
            <Link to="/Liste-group" id="link-card">
              Liste group
            </Link>
          </div>
          <div className="groups-card">
            <div className="groups-card-inner">
              <h3>2eme année</h3>
              <MdGroups className="card-icon" />
            </div>
            <p>Liste des groupes de 2 eme annee option full stack</p>
            <Link to="/Liste-group" id="link-card">
              Liste group
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
