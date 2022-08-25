import React, { useState, useEffect } from "react";
import { getActivities } from "../api";
import { Link } from "react-router-dom";



const Activities = () => {
  const [activities, setActivities] = useState([]);

  const getActivityInfo = async () => {
    try {
      const result = await getActivities();

      if (result) {
        setActivities(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getActivityInfo();
  }, []);
  const mapActivities = activities.map((activity) => {
    return (
      <div>
        <h3 id="creator">{activity.creatorName}</h3>
        <h3>{activity.name}</h3>
        <h3>{activity.goal}</h3>
        <br />
      </div>
    );
  });
  return (
    <div id="routine-container">
      <Link to="/CreateActivity"><button>Create a new activity</button></Link>
      <h2 id="routine-heading">Welcome To Activities!!</h2>
      {activities && activities.length ? (
        <h3>{mapActivities}</h3>
      ) : null}

    </div>
  );
};

export default Activities;
