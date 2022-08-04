import React, {useEffect, useState} from "react";
import { getUser } from "../api";

const Profile = () => {
    const [info, setInfo] = useState ({})
    const getUserInfo = async () =>{
        try {
            const result = await getUser()
            if(result){
                console.log(result, "I am Profile Result")
                setInfo(result)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() =>{
        getUserInfo()
    },[])
    return ( 
        <div>
            {info && info.username ?<h3>Hello {info.username}!</h3> : null}
        </div>
     );
}
 
export default Profile;