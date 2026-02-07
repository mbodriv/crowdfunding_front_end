import { useState } from "react";
import postLogin from "../../api/post-login";
import { useNavigate } from "react-router-dom";

function LoginForm() {

  const navigateTo = useNavigate(); //once the user is logged in we will send them to a specific page screen
  const [credentials, setCredentials] =useState({
        username : "",
        password : "",
  });

  const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (credentials.username && credentials.password){
        postLogin(
            credentials.username,
            credentials.password
        ).then((response) =>{
            windows.localStorage.setItem("token", response.token); //a sign of proof that our users are logged in. We need to add this line in ever log in page requirement.
            navigateTo("/") //with this we are sending the users to a page we want. At the moment we have selected the Home page, but we can take them to fundraisers etc.
        });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter username" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password" onChange={handleChange}/>
      </div>
      <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
  );
}

export default LoginForm;