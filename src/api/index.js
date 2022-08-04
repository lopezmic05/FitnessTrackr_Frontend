const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const registerUser = async (username, password) => {
  try {
    console.log(`${BASE_URL}users/register`);
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
    const token = result.data.token;
    localStorage.setItem("token", token);
    return result;
  } catch (error) {
    throw error;
  }
};


const loginUser = async (username, password) => {
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
  console.log(result, "result")
  return result

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


const getUserRoutine = async () => {
  const response = await fetch(`${BASE_URL}users//routines`, {
    headers: {
      'Content-Type': 'application/json',
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
}


const getActivities = async () => {
  const response = await fetch(`${BASE_URL}activities`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}


module.exports = { registerUser, loginUser, getUser, getRoutines, getActivities };

