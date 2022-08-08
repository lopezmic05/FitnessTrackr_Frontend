import React, { useState, useEffect } from "react";
import { getActivities } from "../api";


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
      <h2 id="routine-heading">Welcome To Activities!!</h2>
      {activities && activities.length ? (
        <p>{mapActivities}</p>
      ) : null}
    </div>
  );
};

export default Activities;
