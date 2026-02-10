import { useState } from "react";
import postSignup from "../../api/post-signup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./SignUpForm.css";

function SignupForm() {
  const navigateTo = useNavigate();

  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
    first_name: "",
    last_name: "",
    user_type: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError("");
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
//confirm passwords match
  useEffect(() => {
      if (!details.password || !details.confirmpassword) return; //if the password is empty or the confirm password is empty, stop here
      if(details.password !== details.confirmpassword) setPasswordError("Passwords do not match");
      else setPasswordError("");
  }, [details.password, details.confirmpassword]);


//confirm fields are filled out
  const validateDetails = () => {
    const values = Object.values(details);
    return values.every((value) => Boolean(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateDetails()) {
      setFormError("Please fill in all fields");
      return;
    }
    setFormError("");
    
    if (passwordError) return;

    postSignup(
      details.email,
      details.username,
      details.password,
      details.first_name,
      details.last_name,
      details.user_type
    )
      .then((response) => {
        window.localStorage.setItem("token", response.token);
        navigateTo("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="grid">

        <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
          />

        <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {passwordError && <p className="password-error">{passwordError}</p>}

          <label htmlFor="user_type">User Type:</label>
          <select
            id="user_type"
            name="user_type"
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="mentor">Mentor</option>
            <option value="mentee">Mentee</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {formError && <p className="form-error">{formError}</p>}
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default SignupForm;
