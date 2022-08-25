import React, {useEffect, useState} from "react";
import { getUser, getUserRoutine, getUserActivity } from "../api";
import { DeleteRoutine, UpdateRoutine } from "./"
import { Link } from "react-router-dom";

const Profile = () => {
    const [info, setInfo] = useState ({});
    const [userRoutine, setUserRoutines] = useState([]);
    const [userActivity, setUserActivities] = useState([]);
    const [refresh, setRefresh] = useState(false);


    const getUserInfo = async () =>{
        try {
            const result = await getUser()
            if(result){
                setInfo(result)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getRoutinesInfo = async () =>{
        try {
            if(info && info.username) {
                const routinesResult = await getUserRoutine(info.username)
                if(routinesResult){
                    setUserRoutines(routinesResult)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    const getActivitiesInfo = async () =>{
        try {
            if(info && info.username) {
                const activityResult = await getUserActivity(info.username)
                if(activityResult){
                    setUserActivities(activityResult)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() =>{
        getUserInfo()
    },[]);

    useEffect(() =>{
        getRoutinesInfo()
        getActivitiesInfo()
    }, [info]);


    return ( 
        <div>
            <h3>Hello {info.username}!</h3>
            <br/>
            <h3>Here are your current routines:</h3>
            {userRoutine.length ? userRoutine.map((routine) => {
                return (
                    <div key={`profile:${routine.id}`}>
                        <div>{routine.name}</div>
                        <div>{routine.goal}</div>
                        {/* <Link to="/UpdateRoutine"><button>Edit</button></Link> */}
                        <UpdateRoutine name={routine.name} goal={routine.goal} refresh={refresh} setRefresh={setRefresh} routineId={routine.id} />
                        <DeleteRoutine routineId={routine.id} refresh={refresh} setRefresh={setRefresh} />
                    </div>
                );
            })
            : <div>You have no routines at this time..</div> }
            <br/>
            <h3>Here are your current activities:</h3>
            {userActivity.length ? userActivity.map((activity) => {
                return (
                    <div key={`profile:${activity.id}`}>
                        <div>{activity.name}</div>
                        <div>{activity.description}</div>
                    </div>
                );
            })
            : <div>You have no activities at this time..</div> }
            <br/>
            <Link to="/CreateRoutine"><button>Create a new routine</button></Link>
            <br/>

        </div>
     );
}
 
export default Profile;