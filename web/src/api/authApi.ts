const BASE_URL = "http://localhost:3000";

// This function is used to log the user in using an await post request.
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login Failed");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const registerUser = async (email: string, password: string, name: string) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    console.log(response)

    if (!response.ok) {
      throw new Error("Login Failed");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

export const getUser = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error("Getting user failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user details", error);
    throw error;
  }
};