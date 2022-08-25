import React from "react";
import { deleteRoutine } from "../api";

function DeleteRoutine(props) {
    const [routineId, refresh, setRefresh] = [props.routineId, props.refresh, props.setRefresh];

    async function removeRoutine() {
        const erase = await deleteRoutine(routineId);
        console.log(routineId, "HIIIII");

        setRefresh(!refresh);
        return erase;
    }

    return (
        <div>
            <button
                onClick={() => {
                    removeRoutine();
                }}
                type="button">
                Delete
            </button>
        </div>
    )
}

export default DeleteRoutine