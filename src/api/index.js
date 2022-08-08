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
    if(result.error) {
      throw result.error
    }
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
  const response = await fetch(`${BASE_URL}users/${username}routines`, {
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


module.exports = { registerUser, loginUser, getUser, getUserRoutine, getRoutines, getActivities};

