import React from "react";
import { useNavigate } from "react-router-dom";
import { createRoutine } from "../api";

const CreateRoutine = ({routines, setRoutines}) => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const goal = event.target[1].value;

        const userRoutines = await createRoutine(name, goal);
        if(userRoutines) {
            setRoutines([userRoutines, ...routines])
        }

        navigate("/profile")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create a new routine:</h2>
                <label>Name: </label>
                <input type="text" placeholder="Enter routine" required/>
                <label>Goal: </label>
                <input type="text" placeholder="Enter goal" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    
}

export default CreateRoutine;