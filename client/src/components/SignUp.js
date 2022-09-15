import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./styleup.css";
const SignUp = ({ handleChange }) => {
  const [fullname, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");

  // const navigate = useNavigate();

  const newUser = {
    name: fullname,
    email: email,
    password: password,
    cpassword: confirmationPassword,
  };

  const handleCLickSignup = async (e) => {
    e.preventDefault();

    console.log(newUser);

    const url = "http://localhost:3000/signup";

    if (password === confirmationPassword) {
      try {
        const response = await fetch(url, {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(newUser),
        });

        const userData = await response.json();
        console.log(userData);

        if (response.ok) {
          // navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmationPassword("");
    }
  };

  return (
    <>
      <style>{"body {background-color:#080710}"}</style>
      <div>
        <div className="backgroundup">
          <div className="shapeup"></div>
          <div className="shapeup"></div>
        </div>

        <form className="formup">
          <h3>Sign Up Here</h3>

          <label className="labelup">Full Name</label>
          <input
            className="inputup"
            type="text"
            placeholder="Full name"
            value={fullname}
            required
            onChange={(e) => setFullName(e.target.value)}
          />

          <label className="labelup">Email</label>
          <input
            className="inputup"
            type="email"
            placeholder="name@gmail.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="labelup">Password</label>
          <input
            className="inputup"
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="labelup">Confirm Password</label>
          <input
            className="inputup"
            type="password"
            placeholder="Confirm Password"
            value={confirmationPassword}
            required
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />

          <button className="btnup" onClick={handleCLickSignup}>
            Sign Up
          </button>

          <div className="row pt-3 me-0 ">
            <p className="  col-8">Have an Account?</p>
            <p
              className="text-center col "
              onClick={() => {
                handleChange("event", 0);
              }}
            >
              <Link to="/signinup">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
