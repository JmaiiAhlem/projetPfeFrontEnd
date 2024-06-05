
import "./pointage.css";
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pointage = () => {
  const [entries, setEntries] = useState([]);
  const [current, setCurrent] = useState(null);

  const handleClockIn = () => {
    const now = new Date();
    setCurrent({ clockIn: now, clockOut: null });
  };

  const handleClockOut = () => {
    const now = new Date();
    if (current) {
      setCurrent({ ...current, clockOut: now });
      setEntries([...entries, { ...current, clockOut: now }]);
      setCurrent(null);
    }
  };

  useEffect (() => {
    // Récupérer l'historique des pointages au chargement du composant
    axios.get('/pointage').then(response => {
      setEntries(response.data);
    });
  }, []);

  
  return (
    
    <div>
        <br/>
         <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={group} className="gradient-corona-img img-fluid" alt="Group" />
                  </div>
                  <div className="col-5 col-sm-7 col-xl-8 p-0 text-white">
                    <h4 className="mb-1 mb-sm-0">Bienvenue chez Visto Rh 🎉</h4>
                    <p className="mb-0 font-weight-normal d-none d-sm-block">
                      Chaque talent est valorisé. <br />
                      Chaque individu est encouragé à atteindre son plein potentiel professionnel.
                    </p>
                  </div>
                  <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                    <img src={arrier} className="gradient-corona-img img-fluid" alt="Arrier" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <h3 className="card-title col col-xl-3">Système de Pointage</h3>
      <div>
         
        <button onClick={handleClockIn} disabled={current !== null}>Entrée</button>
        <button onClick={handleClockOut} disabled={current === null}>Sortie</button>
      </div>
      <div>
        <h2>Historique de pointage</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              Entrée: {entry.clockIn.toString()}, Sortie: {entry.clockOut ? entry.clockOut.toString() : 'En cours'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pointage;