const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    const token = result.token;
    localStorage.setItem("token", token);
    return result;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}users/login`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username:username,
          password:password
      })
    })
    const result = await response.json();
    return result
    
  } catch (error) {
    throw error
  }

}

const getUser = async () => {
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}users/me`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await response.json()
  return result
}

const getUserRoutine = async (username) => {
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}users/${username}/routines`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
  const result = await response.json()
  return result
}

const getUserActivity = async (username) => {
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}users/${username}/activities`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
  const result = await response.json()
  return result
}

const getRoutines = async () => {
  const response = await fetch( `${BASE_URL}routines`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const result = await response.json()
  return result
}

const getActivities = async () => {
  const response = await fetch( `${BASE_URL}activities`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const result = await response.json()
  return result
}
const createActivity = async (name, description) => {
  const token = localStorage.getItem("token")
  const response = await fetch( `${BASE_URL}activities`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  });
  const result = await response.json()
  console.log(result, "HELLO")
  return result
}

const createRoutine = async (name, goal) => {
  const token = localStorage.getItem("token")
  const response = await fetch( `${BASE_URL}routines`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
    }),
  });
  const result = await response.json()
  return result
}

const editRoutine = async ({routineId, name, goal}) => {
  const token = localStorage.getItem("token")
  const response = await fetch( `${BASE_URL}routines/${routineId}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
    }),
  });
  const result = await response.json()
  return result;
}

const deleteRoutine = async (routineId) => {
  const token = localStorage.getItem("token")
  const response = await fetch( `${BASE_URL}routines/${routineId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  });
  const result = await response.json()
  return result;
}

module.exports = { registerUser, loginUser, getUser, getUserRoutine, getUserActivity, getRoutines, getActivities, createActivity, createRoutine, editRoutine, deleteRoutine};

