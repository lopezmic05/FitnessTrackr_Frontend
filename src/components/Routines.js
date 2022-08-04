import React, {useEffect, useState} from "react";

import { getRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([])
  
  const getRoutinesInfo = async () =>{
    try {
      const result = await getRoutines()

      if(result){
        console.log(result, "i am routines result")
        setRoutines(result)
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() =>{
    getRoutinesInfo()
  }, [])

console.log(routines, "THIS IS ROUTINES")
  const routine = routines.map((routine) => {
    return routine.creatorName
  })
  return (
    <div>
      <h2>Welcome To Routines!!</h2>
      {routines && routine ?<p> These are your routines! -//-//-//-//-//- {routine.join('  ')}</p> :null  }
    </div>
  );
};

export default Routines;
