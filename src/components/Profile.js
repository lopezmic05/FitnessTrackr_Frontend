import React, {useEffect, useState} from "react";
import { getUser, getUserRoutine } from "../api";

const Profile = () => {
    const [info, setInfo] = useState ({})
    const [userRoutine, setUserRoutines] = useState({})
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
            const RoutinesResult = await getUserRoutine()
            if(RoutinesResult){
                setUserRoutines(RoutinesResult)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() =>{
        getUserInfo()
        getRoutinesInfo()
    },[])

    return ( 
        <div>
            {info && info.username ?<h3>Hello {info.username}!</h3> : null}

            <p>These are your routines:{userRoutine && userRoutine.length ?<h3> {userRoutine.username}!</h3> : null}</p>
        </div>
     );
}
 
export default Profile;