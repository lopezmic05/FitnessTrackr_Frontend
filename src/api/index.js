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

module.exports = { registerUser, loginUser };
