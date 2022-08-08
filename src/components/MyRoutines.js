import React, { useEffect, useState } from "react";
import { getUserRoutine } from "../api";

const MyRoutines = (props) => {
  const [username, token] = [props.username, props.token];
  const [routines, setRoutines] = useState([]);
  
  const userRoutines = async () => {
    if(token) {
      const yourRoutines = await getUserRoutine(username, token);
      setRoutines(yourRoutines);
    }
  };

  useEffect(() => {
    userRoutines();
  }, []);

  const mapMyRoutines = routines.map((routine) => {
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
    <div>
      <h1>This is My Routines</h1>
      <h2>{mapMyRoutines}</h2>
    </div>
  ); 
};

export default MyRoutines;
