import React, {useEffect, useState} from "react";

import { getRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState({})

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



  return (
    <div>
      <h2>This is Routines!!</h2>
      {routines && routines.username ?<h3> These are your routines!{routines.username}</h3> :null  }
    </div>
  );
};

export default Routines;
