import React, { useState } from "react";
import { editRoutine } from "../api";

function UpdateRoutine(props) {
    const [routineId, refresh, setRefresh] = [props.routineId, props.refresh, props.setRefresh];
    const [name, setName] = useState(props.name ? props.name : "");
    const [goal, setGoal] = useState(props.goal ? props.goal : "");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedRoutine = await editRoutine({
            routineId: routineId,
            name: name,
            goal: goal
        }
        );
        setRefresh(!refresh);
        return updatedRoutine;
    };

    return (
        <section>
            <div>
                <h1>Edit Routine</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Edit name..."
                        ></input>
                        <input
                            type="text"
                            value={goal}
                            onChange={(event) => setGoal(event.target.value)}
                            placeholder="Edit goal..."
                        ></input>
                        <button type="submit">Submit Changes</button>
                    </div>
                </form>
            </div>
        </section>
    );


}

export default UpdateRoutine