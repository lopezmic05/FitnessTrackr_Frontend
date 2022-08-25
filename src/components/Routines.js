import React, { useEffect, useState } from "react";
import { getRoutines } from "../api";
import './routine.css'

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const getRoutinesInfo = async () => {
    try {
      const result = await getRoutines();

      if (result) {
        setRoutines(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutinesInfo();
  }, []);
  const mapRoutines = routines.map((routine) => {
    return (
      <div>
        <h3 id="creator">{routine.creatorName}</h3>
        <h3>{routine.name}</h3>
        <h3>{routine.goal}</h3>
        <br />
      </div>
    );
  });
  return (
    <div id="routine-container">
      <h2 id="routine-heading">Welcome to Routines</h2>
      {routines && routines.length ? (
        <h3>{mapRoutines}</h3>
      ) : null}
    </div>
  );
};

export default Routines;
